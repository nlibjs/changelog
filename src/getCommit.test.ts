import * as assert from "node:assert/strict";
import { test } from "node:test";
import type { Resolved } from "@nlib/typing";
import { getCommit } from "./getCommit.js";
import {
	firstCommit,
	secondCommit,
	thirdCommit,
	thirdCommitLike,
} from "./sample.test.js";

interface Case {
	input: string;
	expected: Partial<Resolved<ReturnType<typeof getCommit>>>;
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
