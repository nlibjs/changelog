import {Commit} from './is/Commit';
import {extractCommitType} from './extractCommitType';
import {Map} from '@nlib/global';

export interface CommitGroup {
    tag: string,
    commits: Map<string, Array<Commit>>,
}

export const groupCommits = async function* (
    commitIterator: AsyncGenerator<Commit> | Iterable<Commit>,
    tagPattern = /^v/,
): AsyncGenerator<CommitGroup> {
    const commits = new Map<string, Array<Commit>>();
    let tag = '';
    for await (const commit of commitIterator) {
        const newTag = commit.tag.find((tag) => tagPattern.test(tag));
        if (newTag) {
            if (0 < commits.size || tag) {
                yield {tag, commits};
                commits.clear();
            }
            tag = newTag;
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
        yield {tag, commits};
    }
};
