/**
 * https://git-scm.com/docs/pretty-formats
 */
const NewLine = '%n';
const CommitHash = '%H';
const AbbreviatedCommitHash = '%h';
const ParentHash = '%P';
// const AbbreviatedParentHash = '%p';
const RawBody = '%B';

export const CommitFormatJSON = `'${[
    '{',
    `    "hash": "${CommitHash}",`,
    `    "shortHash": "${AbbreviatedCommitHash}",`,
    `    "parentHash": "${ParentHash}"`,
    '}',
    `${RawBody}`,
].join(NewLine)}'`;
