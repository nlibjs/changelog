/* eslint-disable max-lines-per-function */
import ava from 'ava';
import {RemoteRepository} from './RemoteRepository';

ava('get commit URL', (t) => {
    const repo = new RemoteRepository('git@github.com:nlibjs/changelog.git');
    t.is(
        repo.getCommitUrl('cb797698b66027378ee2d23c5f0c20293802b1aa'),
        'https://github.com/nlibjs/changelog/commit/cb797698b66027378ee2d23c5f0c20293802b1aa',
    );
});
