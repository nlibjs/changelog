import * as assert from "node:assert/strict";
import { test } from "node:test";
import { serialize } from "./serialize.js";

test("serialize each supported custom serializer result", () => {
	const chunks = ["## v1.0.0\n", "\n", "- initial release\n"];
	const expected = chunks.join("");
	assert.equal([...serialize(expected)].join(""), expected);
	assert.equal([...serialize(chunks)].join(""), expected);
	assert.equal(
		[...serialize({ 0: chunks[0], 1: chunks[1], 2: chunks[2], length: 3 })].join(
			"",
		),
		expected,
	);
	assert.equal([...serialize(new Set(chunks))].join(""), expected);
	assert.equal([...serialize(chunks.values())].join(""), expected);
	assert.equal([...serialize([])].join(""), "");
	assert.equal([...serialize(new Set<string>())].join(""), "");
});
