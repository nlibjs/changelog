import {testFunction} from '@nlib/test';
import {getCommit} from './getCommit';
import {
    thirdCommit,
    thirdCommitLike,
    secondCommit,
    firstCommit,
} from './sample.test';

testFunction(getCommit, {input: thirdCommit.hash, like: thirdCommitLike});

testFunction(getCommit, {input: secondCommit.hash, expected: secondCommit});
testFunction(getCommit, {input: secondCommit.shortHash, expected: secondCommit});
testFunction(getCommit, {input: secondCommit.tag[0], expected: secondCommit});

testFunction(getCommit, {input: firstCommit.hash, expected: firstCommit});
