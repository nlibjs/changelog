import * as assert from "node:assert/strict";
import { test } from "node:test";
import { logCommits } from "./getCommit.js";
import type { Commit } from "./is/Commit.js";
import { walkCommitHistory } from "./walkCommitHistory.js";
import {
	thirdCommit,
	thirdCommitLike,
	secondCommit,
	firstCommit,
} from "./sample.test.js";

test("walk commit history", async () => {
	const asyncIterator = walkCommitHistory(thirdCommit.hash);
	const third = await asyncIterator.next();
	assert.deepEqual(third.value, { reference: [], ...thirdCommitLike });
	const second = await asyncIterator.next();
	assert.deepEqual(second.value, secondCommit);
	const first = await asyncIterator.next();
	assert.deepEqual(first.value, firstCommit);
	const done = await asyncIterator.next();
	assert.equal(done.done, true);
});

const collect = async (iterator: AsyncGenerator<Commit>) => {
	const result: Array<Commit> = [];
	for await (const commit of iterator) {
		result.push(commit);
	}
	return result;
};

/** The previous implementation: one `git log -1` per commit. */
const walkOneByOne = async function* (
	startCommitish: string,
): AsyncGenerator<Commit> {
	let revisions = [startCommitish];
	while (0 < revisions.length) {
		const [logged] = await logCommits(revisions, 1);
		yield logged.commit;
		revisions = logged.commit.parentHash.split(" ").filter(Boolean);
	}
};

test("walk commit history in batches as git log -1 does", async () => {
	/** A commit whose history includes merge commits. */
	const head = "685c5b9ccdb62ebae448b74fa43634c622a21110";
	const expected = await collect(walkOneByOne(head));
	assert.ok(expected.some((commit) => commit.parentHash.includes(" ")));
	assert.deepEqual(await collect(walkCommitHistory(head)), expected);
	assert.deepEqual(await collect(walkCommitHistory(head, 7)), expected);
});
