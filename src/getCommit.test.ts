import type {Resolved} from '@nlib/typing';
import ava from 'ava';
import {getCommit} from './getCommit';
import {
    firstCommit, secondCommit, thirdCommit,
    thirdCommitLike,
} from './sample.test';

interface Case {
    input: string,
    expected: Partial<Resolved<ReturnType<typeof getCommit>>>,
}

const cases: Array<Case> = [
    {input: thirdCommit.hash, expected: thirdCommitLike},
    {input: secondCommit.hash, expected: secondCommit},
    {input: secondCommit.shortHash, expected: secondCommit},
    {input: secondCommit.tag[0], expected: secondCommit},
    {input: firstCommit.hash, expected: firstCommit},
];

for (const {input, expected} of cases) {
    ava(`${input} → ${JSON.stringify(expected)}`, async (t) => {
        t.like(await getCommit(input), expected);
    });
}
