import {testFunction} from '@nlib/test';
import {getCommit} from './getCommit';
import {Date} from '@nlib/global';

testFunction(getCommit, {
    input: 'b3ec2a662d1adf4d040960bd5ae40b2d7e308418',
    expected: {
        tag: ['tag-2', 'tag-1'],
        hash: 'b3ec2a662d1adf4d040960bd5ae40b2d7e308418',
        shortHash: 'b3ec2a6',
        parentHash: '09261b7cd053b3b2c0a75bbe21266c1843768fec',
        author: {
            date: new Date('2020-08-31T03:07:01+09:00'),
            name: 'Kei Ito',
            email: ['kei.itof', 'gmail.com'].join('@'),
        },
        committer: {
            date: new Date('2020-08-31T03:07:01+09:00'),
            name: 'Kei Ito',
            email: ['kei.itof', 'gmail.com'].join('@'),
        },
        message: [
            'feat: add the "exec" function',
            'this message includes some \'\\special\' characters😉',
        ].join('\n'),
    },
});
