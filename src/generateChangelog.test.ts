import * as assert from "node:assert/strict";
import { test } from "node:test";
import { generateChangelogFromCommits } from "./generateChangelog.js";
import type { Commit } from "./is/Commit.js";
import { RemoteRepository } from "./RemoteRepository.js";
import { DefaultTypeAliases } from "./serializeCommitGroup.js";

const user = {
	date: new Date("2020-09-01T15:00:00Z"),
	name: "Kei Ito",
	email: "kei.ito@example.com",
};

const createCommit = (id: number, message: string, tag: Array<string> = []) => {
	const hash = `${id}`.padEnd(40, "0");
	return {
		reference: [],
		tag,
		hash,
		shortHash: hash.slice(0, 7),
		parentHash: "",
		author: user,
		committer: user,
		message,
	} satisfies Commit;
};

test("scoped and breaking commits are written to the changelog", async () => {
	const remote = new RemoteRepository("git@github.com:nlibjs/changelog.git");
	const commits = [
		createCommit(1, "chore: release", ["v1.0.0"]),
		createCommit(2, "feat(cli): add output option"),
		createCommit(3, "deps(renovate): update dependency commander to v15"),
		createCommit(4, "feat!: remove legacy option"),
		createCommit(5, "feat(cli)!: remove another option"),
		createCommit(6, "fix: change default\n\nBREAKING CHANGE: new default"),
		createCommit(7, "fix: plain fix"),
	];
	let actual = "";
	for await (const chunk of generateChangelogFromCommits(remote, commits, {
		aliases: DefaultTypeAliases,
	})) {
		actual += chunk;
	}
	const line = (id: number, text: string) => {
		const { hash, shortHash } = createCommit(id, "");
		return `- ${text} ([${shortHash}](https://github.com/nlibjs/changelog/commit/${hash}))`;
	};
	assert.equal(
		actual,
		[
			"# Changelog",
			"",
			"## v1.0.0 (2020-09-01)",
			"",
			"### Breaking Changes",
			"",
			line(4, "remove legacy option"),
			line(5, "**cli:** remove another option"),
			line(6, "change default"),
			"",
			"### Features",
			"",
			line(2, "**cli:** add output option"),
			"",
			"### Bug Fixes",
			"",
			line(7, "plain fix"),
			"",
			"### Dependency Upgrades",
			"",
			line(3, "**renovate:** update dependency commander to v15"),
			"",
			"",
			"",
		].join("\n"),
	);
});
