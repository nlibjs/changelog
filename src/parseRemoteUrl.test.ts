import * as assert from "node:assert/strict";
import { test } from "node:test";
import { parseRemoteUrl } from "./parseRemoteUrl.js";

interface Case {
	input: string;
	expected: ReturnType<typeof parseRemoteUrl>;
}

const cases: Array<Case> = [
	{
		input: "git@github.com:user/repo.git",
		expected: {
			serviceName: "github",
			userName: "user",
			repositoryName: "repo",
		},
	},
	{
		input: "https://github.com/user/repo.git",
		expected: {
			serviceName: "github",
			userName: "user",
			repositoryName: "repo",
		},
	},
	{
		input: "git@gitlab.com:user/repo.git",
		expected: {
			serviceName: "gitlab",
			userName: "user",
			repositoryName: "repo",
		},
	},
	{
		input: "https://gitlab.com/user/repo.git",
		expected: {
			serviceName: "gitlab",
			userName: "user",
			repositoryName: "repo",
		},
	},
	{
		input: "git@bitbucket.org:user/repo.git",
		expected: {
			serviceName: "bitbucket",
			userName: "user",
			repositoryName: "repo",
		},
	},
	{
		input: "https://user@bitbucket.org/user/repo.git",
		expected: {
			serviceName: "bitbucket",
			userName: "user",
			repositoryName: "repo",
		},
	},
];

const unsuffixedCases: Array<Case> = cases.map(({ input, expected }) => ({
	input: input.replace(/\.git$/, ""),
	expected,
}));

const extraCases: Array<Case> = [
	{
		input: "https://github.com/user/repo/",
		expected: {
			serviceName: "github",
			userName: "user",
			repositoryName: "repo",
		},
	},
	{
		input: "https://github.com/user/my.repo",
		expected: {
			serviceName: "github",
			userName: "user",
			repositoryName: "my.repo",
		},
	},
	{
		input: "https://github.com/user/my.repo.git",
		expected: {
			serviceName: "github",
			userName: "user",
			repositoryName: "my.repo",
		},
	},
];

for (const { input, expected } of [
	...cases,
	...unsuffixedCases,
	...extraCases,
]) {
	test(input, () => {
		assert.deepEqual(parseRemoteUrl(input), expected);
	});
}
