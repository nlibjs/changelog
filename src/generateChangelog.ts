import * as console from "node:console";
import type { Serializable } from "./serialize.js";
import { serialize } from "./serialize.js";
import type {
	CommitGroup,
	GroupCommitsProps,
	TagData,
} from "./groupCommits.js";
import { groupCommits } from "./groupCommits.js";
import type { Commit } from "./is/Commit.js";
import type { RemoteRepository } from "./RemoteRepository.js";
import { serializeCommitGroup } from "./serializeCommitGroup.js";
import { walkCommitHistory } from "./walkCommitHistory.js";

export interface GenerateChangelogFromCommitsProps extends GroupCommitsProps {
	serializer?: (
		remote: RemoteRepository,
		commitGroup: CommitGroup,
	) => Serializable;
	header?: string;
	footer?: string;
	tagPattern?: RegExp;
	initialTag?: TagData;
}

export const generateChangelogFromCommits = async function* (
	remote: RemoteRepository,
	commits: AsyncGenerator<Commit> | Iterable<Commit>,
	props: GenerateChangelogFromCommitsProps = {},
): AsyncGenerator<string> {
	const {
		serializer = serializeCommitGroup,
		header = "# Changelog\n\n",
		footer = "",
	} = props;
	if (header) {
		yield header;
	}
	for await (const commitGroup of groupCommits(commits, props)) {
		console.info(`${commitGroup.tag} (${commitGroup.commits.size})`);
		yield* serialize(serializer(remote, commitGroup));
		yield "\n";
	}
	if (footer) {
		yield footer;
	}
};

export interface GenerateChangelogProps
	extends GenerateChangelogFromCommitsProps {}

export const generateChangelog = async function* (
	remote: RemoteRepository,
	headCommit?: string,
	props: GenerateChangelogProps = {},
): AsyncGenerator<string> {
	yield* generateChangelogFromCommits(
		remote,
		walkCommitHistory(headCommit),
		props,
	);
};
