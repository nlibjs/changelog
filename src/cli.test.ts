import * as assert from "node:assert/strict";
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
