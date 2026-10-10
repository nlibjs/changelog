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
	{
		input: ["feat(cli): add output option"],
		expected: { type: "feat", body: "**cli:** add output option" },
	},
	{
		input: ["deps(renovate): update dependency commander to v15"],
		expected: {
			type: "deps",
			body: "**renovate:** update dependency commander to v15",
		},
	},
	{
		input: [
			"dependency(renovate): update foo",
			{ aliases: new Map([["dependency", "deps"]]) },
		],
		expected: { type: "deps", body: "**renovate:** update foo" },
	},
	{
		input: ["feat!: remove legacy option"],
		expected: { type: "break", body: "remove legacy option" },
	},
	{
		input: ["feat(cli)!: remove legacy option"],
		expected: { type: "break", body: "**cli:** remove legacy option" },
	},
	{
		input: ["feat: drop node 14\n\nBREAKING CHANGE: requires node 18"],
		expected: { type: "break", body: "drop node 14" },
	},
	{
		input: ["fix: foo\n\nBREAKING-CHANGE: bar"],
		expected: { type: "break", body: "foo" },
	},
	{
		input: ["fix: foo\n\nthis is not a BREAKING CHANGE: bar"],
		expected: { type: "fix", body: "foo" },
	},
	{
		input: ["foo bar: baz"],
		expected: { type: "", body: "foo bar: baz" },
	},
];

for (const { input, expected } of cases) {
	test(`${JSON.stringify(input)} → ${JSON.stringify(expected)}`, () => {
		assert.deepEqual(extractCommitType(...input), expected);
	});
}
