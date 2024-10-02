import * as assert from "node:assert/strict";
import { test } from "node:test";
import { RemoteRepository } from "./RemoteRepository.js";

const commit = "cb797698b66027378ee2d23c5f0c20293802b1aa";

test("get github url", () => {
	const repo1 = new RemoteRepository("git@github.com:nlibjs/changelog.git");
	const repo2 = new RemoteRepository("https://github.com/nlibjs/changelog.git");
	const expected = `https://github.com/nlibjs/changelog/commit/${commit}`;
	assert.equal(repo1.getCommitUrl(commit), expected);
	assert.equal(repo2.getCommitUrl(commit), expected);
});

test("get gitlab url", () => {
	const repo1 = new RemoteRepository("git@gitlab.com:kei-itof/changelog.git");
	const repo2 = new RemoteRepository(
		"https://gitlab.com/kei-itof/changelog.git",
	);
	const expected = `https://gitlab.com/kei-itof/changelog/commit/${commit}`;
	assert.equal(repo1.getCommitUrl(commit), expected);
	assert.equal(repo2.getCommitUrl(commit), expected);
});

test("get bitbucket url", () => {
	const repo1 = new RemoteRepository(
		"git@bitbucket.org:kei-itof/changelog.git",
	);
	const repo2 = new RemoteRepository(
		"https://kei-itof@bitbucket.org/kei-itof/changelog.git",
	);
	const expected = `https://bitbucket.org/kei-itof/changelog/commits/${commit}`;
	assert.equal(repo1.getCommitUrl(commit), expected);
	assert.equal(repo2.getCommitUrl(commit), expected);
});

test("get unknown url", () => {
	const repo = new RemoteRepository("");
	const expected = `/unknown/unknown/commit/${commit}`;
	assert.equal(repo.getCommitUrl(commit), expected);
});
