import {createTypeChecker, isString} from '@nlib/typing';
import {CommitAuthor, isCommitAuthor} from './CommitAuthor';
import {CommitCommitter, isCommitCommitter} from './CommitCommitter';

export interface Commit {
    tag: Array<string>,
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
        hash: isString,
        shortHash: isString,
        parentHash: isString,
        // shortParentHash: isString,
        author: isCommitAuthor,
        committer: isCommitCommitter,
        message: isString,
    },
);
