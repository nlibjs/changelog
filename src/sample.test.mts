import ava from 'ava';
import type { Commit } from './is/Commit.mjs';
import { isCommit } from './is/Commit.mjs';

export const user = {
  name: 'Kei Ito',
  email: ['kei.itof', 'gmail.com'].join('@'),
};

export const firstCommit: Commit = {
  tag: [],
  reference: [],
  hash: '09261b7cd053b3b2c0a75bbe21266c1843768fec',
  shortHash: '09261b7',
  parentHash: '',
  author: { ...user, date: new Date('2020-08-31T03:04:05+09:00') },
  committer: { ...user, date: new Date('2020-08-31T03:04:05+09:00') },
  message: 'chore: setup',
};
ava('first commit', (t) => {
  t.is(isCommit(firstCommit), true);
});

export const secondCommit: Commit = {
  tag: ['tag-2', 'tag-1'],
  reference: [],
  hash: 'b3ec2a662d1adf4d040960bd5ae40b2d7e308418',
  shortHash: 'b3ec2a6',
  parentHash: firstCommit.hash,
  author: { ...user, date: new Date('2020-08-31T03:07:01+09:00') },
  committer: { ...user, date: new Date('2020-08-31T03:07:01+09:00') },
  message: [
    'feat: add the "exec" function',
    "this message includes some '\\special' characters😉",
  ].join('\n'),
};
ava('second commit', (t) => {
  t.is(isCommit(secondCommit), true);
});

export const thirdCommit: Commit = {
  tag: [],
  reference: [],
  hash: '4f25e7e3672d591fbb379790192d0b035889a5e2',
  shortHash: '4f25e7e',
  parentHash: secondCommit.hash,
  author: { ...user, date: new Date('2020-08-31T03:08:38+09:00') },
  committer: { ...user, date: new Date('2020-08-31T03:08:38+09:00') },
  message: 'feat: add isCommit',
};
ava('third commit', (t) => {
  t.is(isCommit(thirdCommit), true);
});

export const thirdCommitLike: Partial<Commit> = { ...thirdCommit };
delete thirdCommitLike.reference;
