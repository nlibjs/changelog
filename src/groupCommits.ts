import {Commit} from './is/Commit';
import {extractCommitType} from './extractCommitType';
import {Map} from '@nlib/global';

export interface UntaggedCommitGroup {
    tag: null,
    commits: Map<string, Array<Commit>>,
}

interface TagData {
    tag: string,
    commit: Commit,
}

export interface TaggedCommitGroup extends TagData {
    commits: Map<string, Array<Commit>>,
}

export type CommitGroup =
| UntaggedCommitGroup
| TaggedCommitGroup;

export const groupCommits = async function* (
    commitIterator: AsyncGenerator<Commit> | Iterable<Commit>,
    tagPattern: RegExp,
): AsyncGenerator<CommitGroup> {
    const commits = new Map<string, Array<Commit>>();
    let tagData: TagData | undefined;
    for await (const commit of commitIterator) {
        const tag = commit.tag.find((t) => tagPattern.test(t));
        if (tag) {
            if (0 < commits.size) {
                yield tagData ? {...tagData, commits} : {tag: null, commits};
                commits.clear();
            }
            tagData = {tag, commit};
        }
        const {type, body} = extractCommitType(commit.message);
        let list = commits.get(type);
        if (!list) {
            list = [];
            commits.set(type, list);
        }
        list.push({...commit, message: body});
    }
    if (0 < commits.size) {
        yield tagData ? {...tagData, commits} : {tag: null, commits};
    }
};
