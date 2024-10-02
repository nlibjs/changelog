import * as assert from "node:assert/strict";
import { test } from "node:test";
import { parseTypeAliases } from "./parseTypeAliases.js";

test("a/b c/d", () => {
	assert.deepEqual(
		[...parseTypeAliases(["a/b", "c/d"])],
		[
			["a", "b"],
			["c", "d"],
		],
	);
	assert.throws(
		() => {
			[...parseTypeAliases(["a a/b", "c/d"])].slice();
		},
		{ code: "InvalidAliasFrom" },
	);
	assert.throws(
		() => {
			[...parseTypeAliases(["a/b", "c/d d"])].slice();
		},
		{ code: "InvalidAliasTo" },
	);
});
