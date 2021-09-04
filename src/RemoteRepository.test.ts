/* eslint-disable max-lines-per-function */
import ava from 'ava';
import {RemoteRepository} from './RemoteRepository';

const commit = 'cb797698b66027378ee2d23c5f0c20293802b1aa';

ava('get github url', (t) => {
    const repo1 = new RemoteRepository('git@github.com:nlibjs/changelog.git');
    const repo2 = new RemoteRepository('https://github.com/nlibjs/changelog.git');
    const expected = `https://github.com/nlibjs/changelog/commit/${commit}`;
    t.is(repo1.getCommitUrl(commit), expected);
    t.is(repo2.getCommitUrl(commit), expected);
});

ava('get gitlab url', (t) => {
    const repo1 = new RemoteRepository('git@gitlab.com:kei-itof/changelog.git');
    const repo2 = new RemoteRepository('https://gitlab.com/kei-itof/changelog.git');
    const expected = `https://gitlab.com/kei-itof/changelog/commit/${commit}`;
    t.is(repo1.getCommitUrl(commit), expected);
    t.is(repo2.getCommitUrl(commit), expected);
});

ava('get bitbucket url', (t) => {
    const repo1 = new RemoteRepository('git@bitbucket.org:kei-itof/changelog.git');
    const repo2 = new RemoteRepository('https://kei-itof@bitbucket.org/kei-itof/changelog.git');
    const expected = `https://bitbucket.org/kei-itof/changelog/commits/${commit}`;
    t.is(repo1.getCommitUrl(commit), expected);
    t.is(repo2.getCommitUrl(commit), expected);
});

ava('get unknown url', (t) => {
    const repo = new RemoteRepository('');
    const expected = `/unknown/unknown/commit/${commit}`;
    t.is(repo.getCommitUrl(commit), expected);
});
