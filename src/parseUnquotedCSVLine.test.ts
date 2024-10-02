import * as assert from "node:assert/strict";
import { test } from "node:test";
import { parseUnquotedCSVLine } from "./parseUnquotedCSVLine.js";

test("parse a CSV line", () => {
	const iterator = parseUnquotedCSVLine(" , foo  ,bar,,");
	assert.deepEqual(iterator.next(), { done: false, value: "" });
	assert.deepEqual(iterator.next(), { done: false, value: "foo" });
	assert.deepEqual(iterator.next(), { done: false, value: "bar" });
	assert.deepEqual(iterator.next(), { done: false, value: "" });
	assert.deepEqual(iterator.next(), { done: true });
});
