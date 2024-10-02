import * as assert from "node:assert/strict";
import { test } from "node:test";
import type { Commit } from "./is/Commit.js";
import { isCommit } from "./is/Commit.js";

// biome-ignore lint/suspicious/noExportsInTest: used in other tests
export const user = {
	name: "Kei Ito",
	email: ["kei.itof", "gmail.com"].join("@"),
};

// biome-ignore lint/suspicious/noExportsInTest: used in other tests
export const firstCommit: Commit = {
	tag: [],
	reference: [],
	hash: "09261b7cd053b3b2c0a75bbe21266c1843768fec",
	shortHash: "09261b7",
	parentHash: "",
	author: { ...user, date: new Date("2020-08-31T03:04:05+09:00") },
	committer: { ...user, date: new Date("2020-08-31T03:04:05+09:00") },
	message: "chore: setup",
};
test("first commit", () => {
	assert.equal(isCommit(firstCommit), true);
});

// biome-ignore lint/suspicious/noExportsInTest: used in other tests
export const secondCommit: Commit = {
	tag: ["tag-2", "tag-1"],
	reference: [],
	hash: "b3ec2a662d1adf4d040960bd5ae40b2d7e308418",
	shortHash: "b3ec2a6",
	parentHash: firstCommit.hash,
	author: { ...user, date: new Date("2020-08-31T03:07:01+09:00") },
	committer: { ...user, date: new Date("2020-08-31T03:07:01+09:00") },
	message: [
		'feat: add the "exec" function',
		"this message includes some '\\special' characters😉",
	].join("\n"),
};
test("second commit", () => {
	assert.equal(isCommit(secondCommit), true);
});

// biome-ignore lint/suspicious/noExportsInTest: used in other tests
export const thirdCommit: Commit = {
	tag: [],
	reference: [],
	hash: "4f25e7e3672d591fbb379790192d0b035889a5e2",
	shortHash: "4f25e7e",
	parentHash: secondCommit.hash,
	author: { ...user, date: new Date("2020-08-31T03:08:38+09:00") },
	committer: { ...user, date: new Date("2020-08-31T03:08:38+09:00") },
	message: "feat: add isCommit",
};
test("third commit", () => {
	assert.equal(isCommit(thirdCommit), true);
});

// biome-ignore lint/suspicious/noExportsInTest: used in other tests
export const thirdCommitLike: Partial<Commit> = { ...thirdCommit };
// biome-ignore lint/performance/noDelete: make sure the property is deleted
delete thirdCommitLike.reference;
