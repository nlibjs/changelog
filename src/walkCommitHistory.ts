import { logCommits } from "./getCommit.js";
import type { Commit } from "./is/Commit.js";

const BatchSize = 1000;

const listParents = (commit: Commit): Array<string> =>
	commit.parentHash.split(" ").filter(Boolean);

/**
 * Yields every commit reachable from `startCommitish` exactly once.
 *
 * The walk follows the first-parent chain. When it meets a merge commit, it
 * yields the merge commit and then the commits merged by it (reachable from
 * the merge commit but not from its first parent) before moving on to the
 * first parent. Each commit is therefore attributed to the first-parent
 * commit that brought it in, so tags on the first-parent chain mark release
 * boundaries correctly even when a merged branch forked before an older tag.
 *
 * Commits are read in batches so that Git is not launched for every commit.
 */
export const walkCommitHistory = async function* (
	startCommitish = "HEAD",
	batchSize = BatchSize,
): AsyncGenerator<Commit> {
	let next = startCommitish;
	while (next) {
		const batch = await logCommits(["--first-parent", next], batchSize);
		if (batch.length === 0) {
			break;
		}
		for (const { commit } of batch) {
			yield commit;
			const [firstParent = "", ...otherParents] = listParents(commit);
			if (0 < otherParents.length) {
				const merged = await logCommits(
					["--topo-order", commit.hash, "--not", firstParent],
					-1,
				);
				for (const logged of merged) {
					if (logged.commit.hash !== commit.hash) {
						yield logged.commit;
					}
				}
			}
			next = firstParent;
		}
	}
};
