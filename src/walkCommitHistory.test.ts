import * as assert from "node:assert/strict";
import { test } from "node:test";
import { exec } from "./exec.js";
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

test("walk every reachable commit once, in batches", async () => {
	/** A commit whose history includes merge commits. */
	const head = "685c5b9ccdb62ebae448b74fa43634c622a21110";
	const commits = await collect(walkCommitHistory(head));
	assert.ok(commits.some((commit) => commit.parentHash.includes(" ")));
	const { stdout } = await exec(`git rev-list ${head}`);
	assert.deepEqual(
		commits.map((commit) => commit.hash).sort(),
		stdout.split(/\s+/).sort(),
	);
	assert.deepEqual(await collect(walkCommitHistory(head, 7)), commits);
});
