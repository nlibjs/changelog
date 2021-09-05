import ava from 'ava';
import {serializeCommitGroup} from './serializeCommitGroup';
import type {Commit} from './is/Commit';
import {thirdCommit, firstCommit} from './sample.test';
import {RemoteRepository} from './RemoteRepository';

ava('empty tag', (t) => {
    const remote = new RemoteRepository('git@github.com:nlibjs/changelog.git');
    const generator = serializeCommitGroup(remote, {
        tag: null,
        commits: new Map<string, Array<Commit>>(),
    });
    const actual = [...generator].join('');
    t.is(actual, '');
});

ava('tagged', (t) => {
    const tagged = {...thirdCommit};
    const remote = new RemoteRepository('git@github.com:nlibjs/changelog.git');
    const generator = serializeCommitGroup(remote, {
        tag: 'foo',
        commit: tagged,
        commits: new Map([
            ['test', [thirdCommit, firstCommit]],
            ['feat', [firstCommit, thirdCommit]],
            ['foo', [firstCommit, thirdCommit]],
        ]),
    });
    const actual = [...generator].join('');
    t.is(actual, [
        '## foo (2020-08-30)',
        '',
        '### Features',
        '',
        `- ${firstCommit.message} ([${firstCommit.shortHash}](https://github.com/nlibjs/changelog/commit/${firstCommit.hash}))`,
        `- ${thirdCommit.message} ([${thirdCommit.shortHash}](https://github.com/nlibjs/changelog/commit/${thirdCommit.hash}))`,
        '',
        '### Tests',
        '',
        `- ${thirdCommit.message} ([${thirdCommit.shortHash}](https://github.com/nlibjs/changelog/commit/${thirdCommit.hash}))`,
        `- ${firstCommit.message} ([${firstCommit.shortHash}](https://github.com/nlibjs/changelog/commit/${firstCommit.hash}))`,
        '',
        '',
    ].join('\n'));
});
