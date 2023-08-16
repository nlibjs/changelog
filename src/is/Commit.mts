import { createTypeChecker, isString } from '@nlib/typing';
import type { CommitAuthor } from './CommitAuthor.mjs';
import { isCommitAuthor } from './CommitAuthor.mjs';
import type { CommitCommitter } from './CommitCommitter.mjs';
import { isCommitCommitter } from './CommitCommitter.mjs';

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

export const isCommit = createTypeChecker<Commit>('Commit', {
  tag: isString.array,
  reference: isString.array,
  hash: isString,
  shortHash: isString,
  parentHash: isString,
  // shortParentHash: isString,
  author: isCommitAuthor,
  committer: isCommitCommitter,
  message: isString,
});
