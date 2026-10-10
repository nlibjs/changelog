import * as assert from "node:assert/strict";
import * as childProcess from "node:child_process";
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

for (const { input, expected } of cases) {
	test(`${input} → ${JSON.stringify(expected)}`, async () => {
		assert.deepEqual(await getCommit(input), expected);
	});
}

test("write git diagnostics only to stderr", async () => {
	const moduleUrl = new URL("./getCommit.js", import.meta.url).href;
	const script = [
		`const { logCommits } = await import(${JSON.stringify(moduleUrl)});`,
		`await logCommits(["does-not-exist"], 1).catch(() => process.exit(3));`,
	].join("\n");
	const result = await new Promise<{
		code: number | null;
		stdout: string;
		stderr: string;
	}>((resolve) => {
		const child = childProcess.execFile(
			process.execPath,
			["--input-type=module", "--eval", script],
			(_error, stdout, stderr) => {
				resolve({ code: child.exitCode, stdout, stderr });
			},
		);
	});
	assert.equal(result.code, 3);
	assert.equal(result.stdout, "");
	assert.match(result.stderr, /does-not-exist/);
});
