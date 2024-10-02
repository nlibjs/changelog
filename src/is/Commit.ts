import { typeChecker, isString, isArrayOf } from "@nlib/typing";
import type { CommitAuthor } from "./CommitAuthor.js";
import { isCommitAuthor } from "./CommitAuthor.js";
import type { CommitCommitter } from "./CommitCommitter.js";
import { isCommitCommitter } from "./CommitCommitter.js";

export interface Commit {
	tag: Array<string>;
	reference: Array<string>;
	hash: string;
	shortHash: string;
	parentHash: string;
	// shortParentHash: string,
	author: CommitAuthor;
	committer: CommitCommitter;
	message: string;
}

export const isCommit = typeChecker<Commit>({
	tag: isArrayOf(isString),
	reference: isArrayOf(isString),
	hash: isString,
	shortHash: isString,
	parentHash: isString,
	// shortParentHash: isString,
	author: isCommitAuthor,
	committer: isCommitCommitter,
	message: isString,
});
