import type {Serializable} from './serialize';
import {serialize} from './serialize';
import type {CommitGroup, GroupCommitsProps, TagData} from './groupCommits';
import {groupCommits} from './groupCommits';
import type {Commit} from './is/Commit';
import type {RemoteRepository} from './RemoteRepository';
import {serializeCommitGroup} from './serializeCommitGroup';
import {walkCommitHistory} from './walkCommitHistory';

export interface GenerateChangelogFromCommitsProps extends GroupCommitsProps {
    serializer?: (remote: RemoteRepository, commitGroup: CommitGroup) => Serializable,
    header?: string,
    footer?: string,
    tagPattern?: RegExp,
    initialTag?: TagData,
}

export const generateChangelogFromCommits = async function* (
    remote: RemoteRepository,
    commits: AsyncGenerator<Commit> | Iterable<Commit>,
    props: GenerateChangelogFromCommitsProps = {},
): AsyncGenerator<string> {
    const {
        serializer = serializeCommitGroup,
        header = '# Changelog\n\n',
        footer = '',
    } = props;
    if (header) {
        yield header;
    }
    for await (const commitGroup of groupCommits(commits, props)) {
        yield* serialize(serializer(remote, commitGroup));
        yield '\n';
    }
    if (footer) {
        yield footer;
    }
};

export interface GenerateChangelogProps extends GenerateChangelogFromCommitsProps {}

export const generateChangelog = async function* (
    remote: RemoteRepository,
    headCommit?: string,
    props: GenerateChangelogProps = {},
): AsyncGenerator<string> {
    yield* generateChangelogFromCommits(remote, walkCommitHistory(headCommit), props);
};
