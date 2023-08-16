import { getCommit } from './getCommit.mjs';
import type { Commit } from './is/Commit.mjs';

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
