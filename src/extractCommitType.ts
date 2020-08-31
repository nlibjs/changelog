import {AppError} from '@nlib/global';

export const extractCommitType = (
    commitMessage: string,
    noType = '_',
    pattern = /^\s*(\w+)\s*:\s*/,
): {type: string, body: string} => {
    if (pattern.global) {
        throw new AppError({
            code: 'GlobalPattern',
            message: 'Cannot use a global flagged RegExp.',
            data: pattern,
        });
    }
    const matched = pattern.exec(commitMessage);
    if (matched) {
        return {
            type: matched[1],
            body: commitMessage.slice(matched[0].length).trim(),
        };
    }
    return {type: noType, body: commitMessage.trim()};
};
