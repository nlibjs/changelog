import type {CommitGroup} from './groupCommits';
import type {Commit} from './is/Commit';
import type {RemoteRepository} from './RemoteRepository';
import type {Serializable} from './serialize';
import {serialize} from './serialize';

export const DefaultTypeAliases = new Map([
    ['breaking', 'break'],
    ['feature', 'feat'],
    ['performance', 'perf'],
    ['refactoring', 'refactor'],
    ['document', 'docs'],
    ['documents', 'docs'],
    ['doc', 'docs'],
    ['dependency', 'deps'],
    ['dependencies', 'deps'],
    ['dep', 'deps'],
]);

export const CommitTypeInformation = [
    {prefix: 'break', title: 'Breaking Changes'},
    {prefix: 'feat', title: 'Features'},
    {prefix: 'fix', title: 'Bug Fixes'},
    {prefix: 'revert', title: 'Reverts'},
    {prefix: 'perf', title: 'Performance Improvements'},
    {prefix: 'test', title: 'Tests'},
    {prefix: 'refactor', title: 'Code Refactoring'},
    {prefix: 'style', title: 'Styles'},
    {prefix: 'docs', title: 'Documentation'},
    {prefix: 'build', title: 'Build System'},
    {prefix: 'ci', title: 'Continuous Integration'},
    {prefix: 'deps', title: 'Dependency Upgrades'},
];

const getPriority = (
    type: string,
    Information = CommitTypeInformation,
): number => {
    let priority = Information.length;
    for (const {prefix} of Information) {
        if (type.startsWith(prefix)) {
            return priority;
        }
        priority -= 1;
    }
    return priority;
};

const getTitle = (
    type: string,
    Information = CommitTypeInformation,
): string | null => {
    for (const {prefix, title} of Information) {
        if (type.startsWith(prefix)) {
            return title;
        }
    }
    return null;
};

export const serializeCommit = (
    remote: RemoteRepository,
    commit: Commit,
): string => `- ${commit.message} ([${commit.shortHash}](${remote.getCommitUrl(commit.hash)}))\n`;

export const serializeCommitGroup = function* (
    remote: RemoteRepository,
    group: CommitGroup,
    {
        serializer = serializeCommit,
        types = CommitTypeInformation,
    }: {
        serializer?: (remote: RemoteRepository, commits: Commit) => Serializable,
        types?: Array<{prefix: string, title: string}>,
    } = {},
): Generator<string> {
    if (group.tag) {
        yield `## ${group.tag} (${group.commit.committer.date.toISOString().split('T')[0]})\n\n`;
        for (const [type, commitList] of [...group.commits].sort(([a], [b]): number => getPriority(a, types) < getPriority(b, types) ? 1 : -1)) {
            const title = getTitle(type, types);
            if (title) {
                yield `### ${getTitle(type, types)}\n\n`;
                for (const commit of commitList) {
                    yield* serialize(serializer(remote, commit));
                }
                yield '\n';
            }
        }
    }
};
