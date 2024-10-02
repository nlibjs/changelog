import * as assert from "node:assert/strict";
import { test } from "node:test";
import type { Commit } from "./is/Commit.js";
import { groupCommits } from "./groupCommits.js";

const user = {
	date: new Date("2020-09-01T15:00:00Z"),
	name: "Kei Ito",
	email: "kei.ito@example.com",
};

const baseCommit = {
	reference: [],
	tag: [],
	hash: "1111",
	shortHash: "1111",
	parentHash: "2222",
	author: user,
	committer: user,
	message: "message1",
};

test("group commits", async () => {
	const commits: Array<Commit> = [
		{ ...baseCommit },
		{ ...baseCommit, message: "chore: message2" },
		{ ...baseCommit, message: "feat: message3" },
		{ ...baseCommit, message: "v1.0.1", tag: ["v1.0.1"] },
		{ ...baseCommit, message: "feat: message4" },
		{ ...baseCommit, message: "fix: message5" },
		{ ...baseCommit, message: "feat: message6" },
		{ ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] },
		{ ...baseCommit, message: "ci: message7" },
		{ ...baseCommit, message: "build: message8" },
		{ ...baseCommit, message: "build: message9" },
	];
	const iterator = groupCommits(commits);
	assert.deepEqual(await iterator.next(), {
		done: false,
		value: {
			tag: null,
			commits: new Map([
				["", [{ ...baseCommit }]],
				["chore", [{ ...baseCommit, message: "message2" }]],
				["feat", [{ ...baseCommit, message: "message3" }]],
			]),
		},
	});
	assert.deepEqual(await iterator.next(), {
		done: false,
		value: {
			tag: "v1.0.1",
			commit: { ...baseCommit, message: "v1.0.1", tag: ["v1.0.1"] },
			commits: new Map([
				["", [{ ...baseCommit, message: "v1.0.1", tag: ["v1.0.1"] }]],
				[
					"feat",
					[
						{ ...baseCommit, message: "message4" },
						{ ...baseCommit, message: "message6" },
					],
				],
				["fix", [{ ...baseCommit, message: "message5" }]],
			]),
		},
	});
	assert.deepEqual(await iterator.next(), {
		done: false,
		value: {
			tag: "v1.0.0",
			commit: { ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] },
			commits: new Map([
				["", [{ ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] }]],
				["ci", [{ ...baseCommit, message: "message7" }]],
				[
					"build",
					[
						{ ...baseCommit, message: "message8" },
						{ ...baseCommit, message: "message9" },
					],
				],
			]),
		},
	});
	assert.deepEqual(await iterator.next(), { done: true, value: undefined });
});

test("initialTag", async () => {
	const commits: Array<Commit> = [
		{ ...baseCommit },
		{ ...baseCommit, message: "feat: message1" },
		{ ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] },
		{ ...baseCommit, message: "ci: message2" },
	];
	const iterator1 = groupCommits(commits, {
		initialTag: { commit: baseCommit, tag: "v1.0.1" },
	});
	assert.deepEqual(await iterator1.next(), {
		done: false,
		value: {
			tag: "v1.0.1",
			commit: { ...baseCommit },
			commits: new Map([
				["", [{ ...baseCommit }]],
				["feat", [{ ...baseCommit, message: "message1" }]],
			]),
		},
	});
	assert.deepEqual(await iterator1.next(), {
		done: false,
		value: {
			tag: "v1.0.0",
			commit: { ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] },
			commits: new Map([
				["", [{ ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] }]],
				["ci", [{ ...baseCommit, message: "message2" }]],
			]),
		},
	});
	assert.deepEqual(await iterator1.next(), { done: true, value: undefined });
	const iterator2 = groupCommits(commits, {
		initialTag: { commit: baseCommit, tag: "v1.0.0" },
	});
	assert.deepEqual(await iterator2.next(), {
		done: false,
		value: {
			tag: "v1.0.0",
			commit: { ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] },
			commits: new Map([
				[
					"",
					[
						{ ...baseCommit },
						{ ...baseCommit, message: "v1.0.0", tag: ["v1.0.0"] },
					],
				],
				["feat", [{ ...baseCommit, message: "message1" }]],
				["ci", [{ ...baseCommit, message: "message2" }]],
			]),
		},
	});
	assert.deepEqual(await iterator2.next(), { done: true, value: undefined });
});
