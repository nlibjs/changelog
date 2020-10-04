import {AppError} from '@nlib/global';
import {isValidType} from './extractCommitType';

export const parseTypeAliases = function* (
    aliases: Iterable<string>,
): Generator<[string, string]> {
    for (const alias of aliases) {
        const parts = alias.split('/');
        const from = parts[0].trim();
        if (!isValidType(from)) {
            throw new AppError({code: 'InvalidAliasFrom', data: from});
        }
        const to = parts[1].trim();
        if (!isValidType(to)) {
            throw new AppError({code: 'InvalidAliasTo', data: to});
        }
        yield [from, to];
    }
};
