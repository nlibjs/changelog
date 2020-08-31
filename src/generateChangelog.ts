import {Commit} from './is/Commit';
import {groupCommits} from './groupCommits';

export const generateChangelog = async function* (
    commits: AsyncGenerator<Commit> | Iterable<Commit>,
): AsyncGenerator<string> {
    for await (const group of groupCommits(commits)) {
        yield group.tag;
    }
};
