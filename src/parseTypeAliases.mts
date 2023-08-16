import { isValidType } from './extractCommitType.mjs';

export const parseTypeAliases = function* (
  aliases: Iterable<string>,
): Generator<[string, string]> {
  for (const alias of aliases) {
    const parts = alias.split('/');
    const from = parts[0].trim();
    if (!isValidType(from)) {
      throw Object.assign(new Error('InvalidAliasFrom'), {
        code: 'InvalidAliasFrom',
        data: from,
      });
    }
    const to = parts[1].trim();
    if (!isValidType(to)) {
      throw Object.assign(new Error('InvalidAliasTo'), {
        code: 'InvalidAliasTo',
        data: to,
      });
    }
    yield [from, to];
  }
};
