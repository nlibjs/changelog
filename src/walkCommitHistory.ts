import {JSON} from '@nlib/global';
import {ensure} from '@nlib/typing';
import {exec} from './exec';
import {CommitFormatJSON} from './CommitFormat';
import {isCommit, Commit} from './is/Commit';

export const getCommit = async (
    commitish: string,
): Promise<Commit> => {
    const {stdout} = await exec([
        'git log -1',
        `--format=${CommitFormatJSON}`,
        commitish,
    ].join(' '));
    let messageOffset = 0;
    for (let index = 0; index < 5; index++) {
        messageOffset = stdout.indexOf('\n', messageOffset) + 1;
    }
    return ensure({
        ...JSON.parse(stdout.slice(0, messageOffset)),
        message: stdout.slice(messageOffset).trim(),
    }, isCommit);
};

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
