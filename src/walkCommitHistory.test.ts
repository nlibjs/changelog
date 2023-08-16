import ava from 'ava';
import { walkCommitHistory } from './walkCommitHistory';
import {
  thirdCommit,
  thirdCommitLike,
  secondCommit,
  firstCommit,
} from './sample.test';

ava('walk commit history', async (t) => {
  const asyncIterator = walkCommitHistory(thirdCommit.hash);
  const third = await asyncIterator.next();
  t.like(third.value, thirdCommitLike);
  const second = await asyncIterator.next();
  t.deepEqual(second.value, secondCommit);
  const first = await asyncIterator.next();
  t.deepEqual(first.value, firstCommit);
  const done = await asyncIterator.next();
  t.true(done.done);
});
