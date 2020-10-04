import {testFunction} from '@nlib/test';
import {parseTypeAliases} from './parseTypeAliases';

const parse = (aliases: Iterable<string>): Array<[string, string]> => [...parseTypeAliases(aliases)];

testFunction(parse, {
    input: ['a/b', 'c/d'],
    expected: [
        ['a', 'b'],
        ['c', 'd'],
    ],
});
testFunction(parse, {
    input: ['a a/b', 'c/d'],
    error: {code: 'InvalidAliasFrom'},
});
testFunction(parse, {
    input: ['a/b', 'c/d d'],
    error: {code: 'InvalidAliasTo'},
});
