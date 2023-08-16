/* eslint-disable max-lines-per-function */
import ava from 'ava';
import type { Commit } from './is/Commit';
import { groupCommits } from './groupCommits';

const user = {
  date: new Date('2020-09-01T15:00:00Z'),
  name: 'Kei Ito',
  email: 'kei.ito@example.com',
};

const baseCommit = {
  reference: [],
  tag: [],
  hash: '1111',
  shortHash: '1111',
  parentHash: '2222',
  author: user,
  committer: user,
  message: 'message1',
};

ava('group commits', async (t) => {
  const commits: Array<Commit> = [
    { ...baseCommit },
    { ...baseCommit, message: 'chore: message2' },
    { ...baseCommit, message: 'feat: message3' },
    { ...baseCommit, message: 'v1.0.1', tag: ['v1.0.1'] },
    { ...baseCommit, message: 'feat: message4' },
    { ...baseCommit, message: 'fix: message5' },
    { ...baseCommit, message: 'feat: message6' },
    { ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] },
    { ...baseCommit, message: 'ci: message7' },
    { ...baseCommit, message: 'build: message8' },
    { ...baseCommit, message: 'build: message9' },
  ];
  const iterator = groupCommits(commits);
  t.deepEqual(await iterator.next(), {
    done: false,
    value: {
      tag: null,
      commits: new Map([
        ['', [{ ...baseCommit }]],
        ['chore', [{ ...baseCommit, message: 'message2' }]],
        ['feat', [{ ...baseCommit, message: 'message3' }]],
      ]),
    },
  });
  t.deepEqual(await iterator.next(), {
    done: false,
    value: {
      tag: 'v1.0.1',
      commit: { ...baseCommit, message: 'v1.0.1', tag: ['v1.0.1'] },
      commits: new Map([
        ['', [{ ...baseCommit, message: 'v1.0.1', tag: ['v1.0.1'] }]],
        [
          'feat',
          [
            { ...baseCommit, message: 'message4' },
            { ...baseCommit, message: 'message6' },
          ],
        ],
        ['fix', [{ ...baseCommit, message: 'message5' }]],
      ]),
    },
  });
  t.deepEqual(await iterator.next(), {
    done: false,
    value: {
      tag: 'v1.0.0',
      commit: { ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] },
      commits: new Map([
        ['', [{ ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] }]],
        ['ci', [{ ...baseCommit, message: 'message7' }]],
        [
          'build',
          [
            { ...baseCommit, message: 'message8' },
            { ...baseCommit, message: 'message9' },
          ],
        ],
      ]),
    },
  });
  t.like(await iterator.next(), {
    done: true,
  });
});

ava('initialTag', async (t) => {
  const commits: Array<Commit> = [
    { ...baseCommit },
    { ...baseCommit, message: 'feat: message1' },
    { ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] },
    { ...baseCommit, message: 'ci: message2' },
  ];
  const iterator1 = groupCommits(commits, {
    initialTag: { commit: baseCommit, tag: 'v1.0.1' },
  });
  t.deepEqual(await iterator1.next(), {
    done: false,
    value: {
      tag: 'v1.0.1',
      commit: { ...baseCommit },
      commits: new Map([
        ['', [{ ...baseCommit }]],
        ['feat', [{ ...baseCommit, message: 'message1' }]],
      ]),
    },
  });
  t.deepEqual(await iterator1.next(), {
    done: false,
    value: {
      tag: 'v1.0.0',
      commit: { ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] },
      commits: new Map([
        ['', [{ ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] }]],
        ['ci', [{ ...baseCommit, message: 'message2' }]],
      ]),
    },
  });
  t.like(await iterator1.next(), { done: true });
  const iterator2 = groupCommits(commits, {
    initialTag: { commit: baseCommit, tag: 'v1.0.0' },
  });
  t.deepEqual(await iterator2.next(), {
    done: false,
    value: {
      tag: 'v1.0.0',
      commit: { ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] },
      commits: new Map([
        [
          '',
          [
            { ...baseCommit },
            { ...baseCommit, message: 'v1.0.0', tag: ['v1.0.0'] },
          ],
        ],
        ['feat', [{ ...baseCommit, message: 'message1' }]],
        ['ci', [{ ...baseCommit, message: 'message2' }]],
      ]),
    },
  });
  t.like(await iterator2.next(), { done: true });
});
