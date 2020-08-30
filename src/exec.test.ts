import * as process from 'process';
import {testFunction} from '@nlib/test';
import {exec} from './exec';

testFunction(exec, {
    input: 'node -v',
    expected: {
        stdout: process.version,
        stderr: '',
    },
});
