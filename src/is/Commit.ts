import {createTypeChecker, isString} from '@nlib/typing';

export interface Commit {
    hash: string,
    shortHash: string,
    parentHash: string,
    // shortParentHash: string,
    message: string,
}

export const isCommit = createTypeChecker<Commit>(
    'Commit',
    {
        hash: isString,
        shortHash: isString,
        parentHash: isString,
        // shortParentHash: isString,
        message: isString,
    },
);
