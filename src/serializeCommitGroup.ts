import {serialize, Serializable} from '@nlib/global';
import {uISO8601DATE} from '@nlib/date';
import {CommitGroup} from './groupCommits';
import {Commit} from './is/Commit';

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
    commit: Commit,
): string => `- ${commit.message} (${commit.shortHash})\n`;

export const serializeCommitGroup = function* (
    group: CommitGroup,
    {
        serializer = serializeCommit,
        types = CommitTypeInformation,
    }: {
        serializer?: (commits: Commit) => Serializable,
        types?: Array<{prefix: string, title: string}>,
    } = {},
): Generator<string> {
    if (group.tag) {
        yield `## ${group.tag} (${uISO8601DATE(group.commit.committer.date)})\n\n`;
        for (const [type, commitList] of [...group.commits].sort(([a], [b]): number => getPriority(a, types) < getPriority(b, types) ? 1 : -1)) {
            const title = getTitle(type, types);
            if (title) {
                yield `### ${getTitle(type, types)}\n\n`;
                for (const commit of commitList) {
                    yield* serialize(serializer(commit));
                }
                yield '\n';
            }
        }
    }
};
