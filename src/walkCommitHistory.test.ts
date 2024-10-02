import * as assert from "node:assert/strict";
import { test } from "node:test";
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
	assert.deepEqual(third.value, thirdCommitLike);
	const second = await asyncIterator.next();
	assert.deepEqual(second.value, secondCommit);
	const first = await asyncIterator.next();
	assert.deepEqual(first.value, firstCommit);
	const done = await asyncIterator.next();
	assert.equal(done.done, true);
});
