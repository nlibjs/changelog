import {ensure} from '@nlib/typing';
import {Date} from '@nlib/global';
import {exec} from '@nlib/nodetool';
import {isCommit, Commit} from './is/Commit';
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

export const prefix = '> ';
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
]
.map((line) => `${prefix}${line}`)
.join(NewLine);

export const getCommit = async (
    commitish: string,
): Promise<Commit> => {
    const {stdout: rawCommit} = await exec(`git log -1 --format='${CommitFormat}' ${commitish}`);
    let offset = prefix.length;
    const consume = (): string => {
        const currentOffset = offset;
        const nextNewLineOffset = rawCommit.indexOf('\n', offset);
        offset = nextNewLineOffset + 1 + prefix.length;
        return rawCommit.slice(currentOffset, nextNewLineOffset);
    };
    return ensure({
        ...parseRefNames(consume()),
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
