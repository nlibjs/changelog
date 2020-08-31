import {testFunction} from '@nlib/test';
import {extractCommitType} from './extractCommitType';

testFunction(extractCommitType, {
    input: 'foo:bar',
    expected: {type: 'foo', body: 'bar'},
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
    expected: {type: '_', body: 'foo'},
});
testFunction(extractCommitType, {
    parameters: [' foo', '__'],
    expected: {type: '__', body: 'foo'},
});
