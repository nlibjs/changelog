import {testFunction} from '@nlib/test';
import {parseRefNames} from './parseRefNames';

testFunction(parseRefNames, {
    input: 'HEAD -> proto, origin/proto, tag: tag-2, tag: tag-1',
    expected: {
        tag: ['tag-2', 'tag-1'],
        reference: ['HEAD -> proto', 'origin/proto'],
    },
});
