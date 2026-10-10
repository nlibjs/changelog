import * as assert from "node:assert/strict";
import * as childProcess from "node:child_process";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { test } from "node:test";
import { getCommit } from "./getCommit.js";
import {
	firstCommit,
	secondCommit,
	thirdCommit,
	thirdCommitLike,
} from "./sample.test.js";

interface Case {
	input: string;
	expected: Partial<Awaited<ReturnType<typeof getCommit>>>;
}

const cases: Array<Case> = [
	{ input: thirdCommit.hash, expected: { reference: [], ...thirdCommitLike } },
	{ input: secondCommit.hash, expected: secondCommit },
	{ input: secondCommit.shortHash, expected: secondCommit },
	{ input: secondCommit.tag[0], expected: secondCommit },
	{ input: firstCommit.hash, expected: firstCommit },
];

const moduleUrl = new URL("./getCommit.js", import.meta.url).href;

const execFile = async (
	file: string,
	args: Array<string>,
	options: childProcess.ExecFileOptions = {},
) =>
	await new Promise<{ code: number | null; stdout: string; stderr: string }>(
		(resolve) => {
			const child = childProcess.execFile(
				file,
				args,
				{ encoding: "utf8", ...options },
				(_error, stdout, stderr) => {
					resolve({
						code: child.exitCode,
						stdout: `${stdout}`,
						stderr: `${stderr}`,
					});
				},
			);
		},
	);

for (const { input, expected } of cases) {
	test(`${input} → ${JSON.stringify(expected)}`, async () => {
		assert.deepEqual(await getCommit(input), expected);
	});
}

test("write git diagnostics only to stderr", async () => {
	const script = [
		`const { logCommits } = await import(${JSON.stringify(moduleUrl)});`,
		`await logCommits(["does-not-exist"], 1).catch(() => process.exit(3));`,
	].join("\n");
	const result = await execFile(process.execPath, [
		"--input-type=module",
		"--eval",
		script,
	]);
	assert.equal(result.code, 3);
	assert.equal(result.stdout, "");
	assert.match(result.stderr, /does-not-exist/);
});

test("read author and committer metadata separately", async () => {
	const cwd = await fs.mkdtemp(path.join(os.tmpdir(), "changelog-"));
	try {
		const env = {
			...process.env,
			GIT_AUTHOR_NAME: "Author",
			GIT_AUTHOR_EMAIL: "author@example.com",
			GIT_AUTHOR_DATE: "2020-01-02T00:00:00Z",
			GIT_COMMITTER_NAME: "Committer",
			GIT_COMMITTER_EMAIL: "committer@example.com",
			GIT_COMMITTER_DATE: "2020-02-02T00:00:00Z",
		};
		await execFile("git", ["init"], { cwd });
		await execFile("git", ["commit", "--allow-empty", "-m", "fix: example"], {
			cwd,
			env,
		});
		const script = [
			`const { getCommit } = await import(${JSON.stringify(moduleUrl)});`,
			`const { author, committer } = await getCommit("HEAD");`,
			"console.log(JSON.stringify({ author, committer }));",
		].join("\n");
		const result = await execFile(
			process.execPath,
			["--input-type=module", "--eval", script],
			{ cwd },
		);
		assert.equal(result.code, 0, result.stderr);
		assert.deepEqual(JSON.parse(result.stdout), {
			author: {
				date: "2020-01-02T00:00:00.000Z",
				name: "Author",
				email: "author@example.com",
			},
			committer: {
				date: "2020-02-02T00:00:00.000Z",
				name: "Committer",
				email: "committer@example.com",
			},
		});
	} finally {
		await fs.rm(cwd, { recursive: true, force: true });
	}
});
