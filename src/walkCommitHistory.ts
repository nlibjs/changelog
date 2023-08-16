import { getCommit } from './getCommit';
import type { Commit } from './is/Commit';

export const walkCommitHistory = async function* (
  startCommitish = 'HEAD',
): AsyncGenerator<Commit> {
  let commitish = startCommitish;
  while (commitish) {
    const commit = await getCommit(commitish);
    yield commit;
    commitish = commit.parentHash;
  }
};
