import {Serializable, serialize} from '@nlib/global';
import {Commit} from './is/Commit';
import {groupCommits, CommitGroup, TagData} from './groupCommits';
import {serializeCommitGroup} from './serializeCommitGroup';
import {walkCommitHistory} from './walkCommitHistory';

export interface GenerateChangelogFromCommitsOptions {
    serializer?: (commitGroup: CommitGroup) => Serializable,
    header?: string,
    footer?: string,
    tagPattern?: RegExp,
    initialTag?: TagData,
}

export const generateChangelogFromCommits = async function* (
    commits: AsyncGenerator<Commit> | Iterable<Commit>,
    {
        serializer = serializeCommitGroup,
        header = '# Changelog\n\n',
        footer = '',
        tagPattern,
        initialTag,
    }: GenerateChangelogFromCommitsOptions = {},
): AsyncGenerator<string> {
    if (header) {
        yield header;
    }
    for await (const commitGroup of groupCommits(commits, {tagPattern, initialTag})) {
        yield* serialize(serializer(commitGroup));
        yield '\n';
    }
    if (footer) {
        yield footer;
    }
};

export interface GenerateChangelogOptions {
    headCommit?: string,
    serializer?: (commitGroup: CommitGroup) => Serializable,
    header?: string,
    footer?: string,
    tagPattern?: RegExp,
    initialTag?: TagData,
}

export const generateChangelog = async function* (
    props: GenerateChangelogOptions = {},
): AsyncGenerator<string> {
    yield* generateChangelogFromCommits(walkCommitHistory(props.headCommit), props);
};
