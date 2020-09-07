import ava from 'ava';
import {Map} from '@nlib/global';
import {serializeCommitGroup} from './serializeCommitGroup';
import {Commit} from './is/Commit';
import {thirdCommit, firstCommit} from './sample.test';

ava('empty tag', (t) => {
    const generator = serializeCommitGroup({
        tag: null,
        commits: new Map<string, Array<Commit>>(),
    });
    const actual = [...generator].join('');
    t.is(actual, '');
});

ava('tagged', (t) => {
    const tagged = {...thirdCommit};
    const generator = serializeCommitGroup({
        tag: 'foo',
        commit: tagged,
        commits: new Map([
            ['test', [thirdCommit, firstCommit]],
            ['feat', [firstCommit, thirdCommit]],
        ]),
    });
    const actual = [...generator].join('');
    t.is(actual, [
        '## foo (2020-08-31)',
        '',
        '### Features',
        '',
        `- ${firstCommit.message} (${firstCommit.shortHash})`,
        `- ${thirdCommit.message} (${thirdCommit.shortHash})`,
        '',
        '### Tests',
        '',
        `- ${thirdCommit.message} (${thirdCommit.shortHash})`,
        `- ${firstCommit.message} (${firstCommit.shortHash})`,
        '',
        '',
    ].join('\n'));
});
