import {createTypeChecker, isString} from '@nlib/typing';
import type {CommitAuthor} from './CommitAuthor';
import {isCommitAuthor} from './CommitAuthor';
import type {CommitCommitter} from './CommitCommitter';
import {isCommitCommitter} from './CommitCommitter';

export interface Commit {
    tag: Array<string>,
    reference: Array<string>,
    hash: string,
    shortHash: string,
    parentHash: string,
    // shortParentHash: string,
    author: CommitAuthor,
    committer: CommitCommitter,
    message: string,
}

export const isCommit = createTypeChecker<Commit>(
    'Commit',
    {
        tag: [isString],
        reference: [isString],
        hash: isString,
        shortHash: isString,
        parentHash: isString,
        // shortParentHash: isString,
        author: isCommitAuthor,
        committer: isCommitCommitter,
        message: isString,
    },
);
