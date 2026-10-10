import * as assert from "node:assert/strict";
import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import * as process from "node:process";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { exec } from "./exec.js";

const scriptPath = fileURLToPath(new URL("./cli.js", import.meta.url));

test("Generate a changelog", async () => {
	const { stdout } = await exec(`node ${scriptPath}`);
	console.info(stdout);
	assert.equal(stdout.includes("## v0.1.1 (2020-09-07)"), true);
	assert.equal(stdout.includes("## v0.1.0 (2020-09-07)"), true);
});

test("Generate a changelog before tag-1", async () => {
	const { stdout } = await exec(`node ${scriptPath} --head v0.1.0`);
	console.info(stdout);
	assert.equal(stdout.includes("## v0.1.1 (2020-09-07)"), false);
	assert.equal(stdout.includes("## v0.1.0 (2020-09-07)"), true);
});

test("Use the remote given by --remote", async () => {
	const cwd = await fs.mkdtemp(path.join(os.tmpdir(), "changelog-"));
	try {
		const git = async (args: string) => await exec(`git ${args}`, { cwd });
		await git("init");
		await git(
			'-c user.name=a -c user.email=a@example.com commit --allow-empty -m "feat: add something"',
		);
		await git("tag v1.0.0");
		await git("remote add origin https://github.com/example/origin.git");
		await git("remote add upstream https://github.com/example/upstream.git");
		const { stdout } = await exec(`node ${scriptPath} --remote upstream`, {
			cwd,
		});
		assert.equal(
			stdout.includes("https://github.com/example/upstream/commit/"),
			true,
		);
		assert.equal(stdout.includes("https://github.com/example/origin/"), false);
		const { stdout: defaultStdout } = await exec(`node ${scriptPath}`, { cwd });
		assert.equal(
			defaultStdout.includes("https://github.com/example/origin/commit/"),
			true,
		);
	} finally {
		await fs.rm(cwd, { recursive: true, force: true });
	}
});

test("Reject --remote without a name", async () => {
	await assert.rejects(exec(`node ${scriptPath} --remote`), (error: Error) =>
		error.message.includes("option '--remote <name>' argument missing"),
	);
});

test("Write only the changelog to stdout", async () => {
	const cwd = await fs.mkdtemp(path.join(os.tmpdir(), "changelog-"));
	try {
		const git = async (args: string) =>
			await exec(`git ${args}`, {
				cwd,
				env: {
					...process.env,
					GIT_AUTHOR_DATE: "2020-09-07T00:00:00Z",
					GIT_COMMITTER_DATE: "2020-09-07T00:00:00Z",
				},
			});
		const commit = async (message: string) =>
			await git(
				`-c user.name=a -c user.email=a@example.com commit --allow-empty -m "${message}"`,
			);
		await git("init");
		await commit("feat: add something");
		await git("tag v1.0.0");
		await commit("fix: fix something");
		await git("tag v1.0.1");
		await git("remote add origin https://github.com/example/origin.git");
		const { stdout, stderr } = await exec(`node ${scriptPath}`, { cwd });
		assert.equal(stdout.startsWith("# Changelog\n"), true);
		assert.equal(stdout.includes("v1.0.1 2020-09-07"), false);
		assert.equal(stderr.includes("v1.0.1 2020-09-07"), true);
		const outputPath = path.join(cwd, "CHANGELOG.md");
		await exec(`node ${scriptPath} --output "${outputPath}"`, { cwd });
		const written = await fs.readFile(outputPath, "utf8");
		assert.equal(written.trim(), stdout);
	} finally {
		await fs.rm(cwd, { recursive: true, force: true });
	}
});

test("Use the committer date in release headings", async () => {
	const cwd = await fs.mkdtemp(path.join(os.tmpdir(), "changelog-"));
	try {
		const git = async (args: string) =>
			await exec(`git ${args}`, {
				cwd,
				env: {
					...process.env,
					GIT_AUTHOR_DATE: "2020-01-02T00:00:00Z",
					GIT_COMMITTER_DATE: "2020-02-02T00:00:00Z",
				},
			});
		await git("init");
		await git(
			'-c user.name=a -c user.email=a@example.com commit --allow-empty -m "fix: example"',
		);
		await git("tag v1.0.1");
		await git("remote add origin https://github.com/example/origin.git");
		const { stdout } = await exec(`node ${scriptPath} --head v1.0.1`, { cwd });
		assert.equal(stdout.includes("## v1.0.1 (2020-02-02)"), true);
		assert.equal(stdout.includes("2020-01-02"), false);
	} finally {
		await fs.rm(cwd, { recursive: true, force: true });
	}
});
