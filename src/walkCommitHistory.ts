import {getCommit} from './getCommit';

export const walkCommitHistory = async function* (
    startCommitish = 'HEAD',
): AsyncGenerator {
    let commitish = startCommitish;
    while (commitish) {
        const commit = await getCommit(commitish);
        yield commit;
        commitish = commit.parentHash;
    }
};
