import * as assert from "node:assert/strict";
import { test } from "node:test";
import { extractCommitType } from "./extractCommitType.js";

interface Case {
	input: Parameters<typeof extractCommitType>;
	expected: ReturnType<typeof extractCommitType>;
}

const cases: Array<Case> = [
	{
		input: ["foo:bar"],
		expected: { type: "foo", body: "bar" },
	},
	{
		input: ["foo:bar", { aliases: new Map([["foo", "replaced"]]) }],
		expected: { type: "replaced", body: "bar" },
	},
	{
		input: ["foo :bar"],
		expected: { type: "foo", body: "bar" },
	},
	{
		input: ["foo: bar"],
		expected: { type: "foo", body: "bar" },
	},
	{
		input: ["foo : bar"],
		expected: { type: "foo", body: "bar" },
	},
	{
		input: [" foo : bar"],
		expected: { type: "foo", body: "bar" },
	},
	{
		input: [" foo"],
		expected: { type: "", body: "foo" },
	},
	{
		input: [" foo", { empty: "__" }],
		expected: { type: "__", body: "foo" },
	},
];

for (const { input, expected } of cases) {
	test(`${JSON.stringify(input)} → ${JSON.stringify(expected)}`, () => {
		assert.deepEqual(extractCommitType(...input), expected);
	});
}
