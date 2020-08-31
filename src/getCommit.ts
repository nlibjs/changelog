import {ensure} from '@nlib/typing';
import {exec} from './exec';
import {isCommit, Commit} from './is/Commit';
import {Date} from '@nlib/global';
import {parseRefNames} from './parseRefNames';

/**
 * https://git-scm.com/docs/pretty-formats
 */
const NewLine = '%x0A';
const CommitHash = '%H';
const AbbreviatedCommitHash = '%h';
const ParentHash = '%P';
// const AbbreviatedParentHash = '%p';
const AuthorDate = '%aI';
const AuthorName = '%aN';
const AuthorEmail = '%aE';
const CommitterDate = '%aI';
const CommitterName = '%aN';
const CommitterEmail = '%aE';
const RefNames = '%D';
const RawBody = '%B';

export const CommitFormat = [
    RefNames,
    CommitHash,
    AbbreviatedCommitHash,
    ParentHash,
    AuthorDate,
    AuthorName,
    AuthorEmail,
    CommitterDate,
    CommitterName,
    CommitterEmail,
    RawBody,
].join(NewLine);

export const getCommit = async (
    commitish: string,
): Promise<Commit> => {
    const result = await exec(`git log -1 --format='${CommitFormat}' ${commitish}`);
    const rawCommit = result.stdout.trim();
    let offset = 0;
    const consume = (): string => {
        const currentOffset = offset;
        const nextNewLineOffset = rawCommit.indexOf('\n', offset);
        offset = nextNewLineOffset + 1;
        return rawCommit.slice(currentOffset, nextNewLineOffset);
    };
    const refs = parseRefNames(consume());
    return ensure({
        tag: refs.tag,
        hash: consume(),
        shortHash: consume(),
        parentHash: consume(),
        author: {
            date: new Date(consume()),
            name: consume(),
            email: consume(),
        },
        committer: {
            date: new Date(consume()),
            name: consume(),
            email: consume(),
        },
        message: rawCommit.slice(offset),
    }, isCommit);
};
