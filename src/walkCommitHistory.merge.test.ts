import * as assert from "node:assert/strict";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import * as process from "node:process";
import { test } from "node:test";
import { exec } from "./exec.js";
import { groupCommits } from "./groupCommits.js";
import { walkCommitHistory } from "./walkCommitHistory.js";

/**
 * v1.0.0 ── main A (v1.1.0) ── main B ── merge (v1.2.0)
 *    └── feature A ── feature B ──────────┘
 */
const setupRepository = async (dates: {
	mainB: string;
	featureB: string;
}): Promise<void> => {
	const git = async (args: string, date = "2020-01-01T00:00:00Z") => {
		await exec(`git -c user.name=test -c user.email=test@example.com ${args}`, {
			env: { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
		});
	};
	const commit = async (message: string, date: string) => {
		await git(`commit --allow-empty --no-gpg-sign -m "${message}"`, date);
	};
	process.chdir(fs.mkdtempSync(path.join(os.tmpdir(), "changelog-")));
	await git("init -b main");
	await commit("chore: init", "2020-01-01T00:00:00Z");
	await commit("feat: base", "2020-01-02T00:00:00Z");
	await git("tag v1.0.0");
	await git("checkout -b feature");
	await commit("feat: feature A", "2020-01-03T00:00:00Z");
	await commit("fix: feature B", dates.featureB);
	await git("checkout main");
	await commit("feat: main A", "2020-01-04T00:00:00Z");
	await git("tag v1.1.0");
	await commit("fix: main B", dates.mainB);
	await git(
		'merge --no-ff --no-gpg-sign -m "Merge feature" feature',
		"2020-01-10T00:00:00Z",
	);
	await git("tag v1.2.0");
};

const expected = [
	["Merge feature", "v1.2.0"],
	["fix: feature B", ""],
	["feat: feature A", ""],
	["fix: main B", ""],
	["feat: main A", "v1.1.0"],
	["feat: base", "v1.0.0"],
	["chore: init", ""],
];

const cases = [
	{
		name: "main is newer",
		mainB: "2020-01-06T00:00:00Z",
		featureB: "2020-01-05T00:00:00Z",
	},
	{
		name: "feature is newer",
		mainB: "2020-01-05T00:00:00Z",
		featureB: "2020-01-06T00:00:00Z",
	},
];

for (const { name, ...dates } of cases) {
	test(`walk a merge commit (${name})`, async () => {
		await setupRepository(dates);
		const actual: Array<Array<string>> = [];
		for await (const commit of walkCommitHistory()) {
			actual.push([commit.message.trim(), commit.tag.join(",")]);
		}
		assert.deepEqual(actual, expected);
		const groups: Array<[string | null, Array<string>]> = [];
		for await (const group of groupCommits(walkCommitHistory())) {
			const messages = [...group.commits.values()].flat().map((c) => c.message);
			groups.push([group.tag, messages.sort()]);
		}
		assert.deepEqual(groups, [
			["v1.2.0", ["Merge feature", "feature A", "feature B", "main B"]],
			["v1.1.0", ["main A"]],
			["v1.0.0", ["base", "init"]],
		]);
	});
}
