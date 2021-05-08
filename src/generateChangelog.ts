import type {Serializable} from '@nlib/global';
import {serialize} from '@nlib/global';
import type {Commit} from './is/Commit';
import type {CommitGroup, TagData, GroupCommitsProps} from './groupCommits';
import {groupCommits} from './groupCommits';
import {serializeCommitGroup} from './serializeCommitGroup';
import {walkCommitHistory} from './walkCommitHistory';

export interface GenerateChangelogFromCommitsProps extends GroupCommitsProps {
    serializer?: (commitGroup: CommitGroup) => Serializable,
    header?: string,
    footer?: string,
    tagPattern?: RegExp,
    initialTag?: TagData,
}

export const generateChangelogFromCommits = async function* (
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
        yield* serialize(serializer(commitGroup));
        yield '\n';
    }
    if (footer) {
        yield footer;
    }
};

export interface GenerateChangelogProps extends GenerateChangelogFromCommitsProps {}

export const generateChangelog = async function* (
    headCommit?: string,
    props: GenerateChangelogProps = {},
): AsyncGenerator<string> {
    yield* generateChangelogFromCommits(walkCommitHistory(headCommit), props);
};
