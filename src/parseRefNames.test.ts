import * as assert from "node:assert/strict";
import { test } from "node:test";
import { parseRefNames } from "./parseRefNames.js";

test("HEAD -> proto, origin/proto, tag: tag-2, tag: tag-1", () => {
	assert.deepEqual(
		parseRefNames("HEAD -> proto, origin/proto, tag: tag-2, tag: tag-1"),
		{
			tag: ["tag-2", "tag-1"],
			reference: ["HEAD -> proto", "origin/proto"],
		},
	);
});
