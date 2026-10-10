import type { LoggedCommit } from "./getCommit.js";
import { logCommits } from "./getCommit.js";
import type { Commit } from "./is/Commit.js";

const BatchSize = 1000;

/**
 * Follows `parentHash` from `startCommitish`. For a merge commit, the parent
 * chosen is the one `git log -1 <parents...>` would output: the one with the
 * latest committer timestamp, and the first listed on a tie.
 *
 * Commits are read in batches so that Git is not launched for every commit.
 */
export const walkCommitHistory = async function* (
	startCommitish = "HEAD",
	batchSize = BatchSize,
): AsyncGenerator<Commit> {
	const cache = new Map<string, LoggedCommit>();
	const fetch = async (
		revisions: Array<string>,
	): Promise<LoggedCommit | undefined> => {
		const batch = await logCommits(revisions, batchSize);
		for (const logged of batch) {
			cache.set(logged.commit.hash, logged);
		}
		return batch[0];
	};
	const select = async (
		parents: Array<string>,
	): Promise<LoggedCommit | undefined> => {
		let selected: LoggedCommit | undefined;
		for (const hash of parents) {
			const logged = cache.get(hash);
			if (!logged) {
				return await fetch(parents);
			}
			if (!selected || selected.committedAt < logged.committedAt) {
				selected = logged;
			}
		}
		return selected;
	};
	let current: LoggedCommit | undefined = await fetch([startCommitish]);
	while (current) {
		yield current.commit;
		const parents: Array<string> = current.commit.parentHash
			.split(" ")
			.filter(Boolean);
		current = parents.length > 0 ? await select(parents) : undefined;
	}
};
