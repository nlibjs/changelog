import {Serializable, serialize} from '@nlib/global';
import {Commit} from './is/Commit';
import {groupCommits, CommitGroup} from './groupCommits';
import {serializeCommitGroup} from './serializeCommitGroup';
import {walkCommitHistory} from './walkCommitHistory';

export const generateChangelogFromCommits = async function* (
    commits: AsyncGenerator<Commit> | Iterable<Commit>,
    {
        serializer = serializeCommitGroup,
        header = '# Changelog\n\n',
        footer = '',
    }: {
        serializer?: (commitGroup: CommitGroup) => Serializable,
        header?: string,
        footer?: string,
    } = {},
): AsyncGenerator<string> {
    if (header) {
        yield header;
    }
    for await (const commitGroup of groupCommits(commits)) {
        yield* serialize(serializer(commitGroup));
        yield '\n';
    }
    if (footer) {
        yield footer;
    }
};

export const generateChangelog = async function* (
    props: {
        headCommit?: string,
        serializer?: (commitGroup: CommitGroup) => Generator<string> | string,
        header?: string,
        footer?: string,
    } = {},
): AsyncGenerator<string> {
    yield* generateChangelogFromCommits(walkCommitHistory(props.headCommit), props);
};
