import {testFunction} from '@nlib/test';
import {extractCommitType} from './extractCommitType';

testFunction(extractCommitType, {
    input: 'foo:bar',
    expected: {type: 'foo', body: 'bar'},
});
testFunction(extractCommitType, {
    parameters: ['foo:bar', {aliases: new Map([['foo', 'replaced']])}],
    expected: {type: 'replaced', body: 'bar'},
});
testFunction(extractCommitType, {
    input: 'foo :bar',
    expected: {type: 'foo', body: 'bar'},
});
testFunction(extractCommitType, {
    input: 'foo: bar',
    expected: {type: 'foo', body: 'bar'},
});
testFunction(extractCommitType, {
    input: 'foo : bar',
    expected: {type: 'foo', body: 'bar'},
});
testFunction(extractCommitType, {
    input: ' foo : bar',
    expected: {type: 'foo', body: 'bar'},
});
testFunction(extractCommitType, {
    input: ' foo',
    expected: {type: '', body: 'foo'},
});
testFunction(extractCommitType, {
    parameters: [' foo', {empty: '__'}],
    expected: {type: '__', body: 'foo'},
});
