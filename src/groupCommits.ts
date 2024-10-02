import * as console from "node:console";
import type { Commit } from "./is/Commit.js";
import type { ExtractCommitTypeProps } from "./extractCommitType.js";
import { extractCommitType } from "./extractCommitType.js";

export interface UntaggedCommitGroup {
	tag: null;
	commits: Map<string, Array<Commit>>;
}

export interface TagData {
	tag: string;
	commit: Commit;
}

export interface TaggedCommitGroup extends TagData {
	commits: Map<string, Array<Commit>>;
}

export type CommitGroup = TaggedCommitGroup | UntaggedCommitGroup;

export const DefaultTagPattern = /^v/;

export interface GroupCommitsProps extends ExtractCommitTypeProps {
	tagPattern?: RegExp;
	initialTag?: TagData;
}

export const groupCommits = async function* (
	commitIterator: AsyncGenerator<Commit> | Iterable<Commit>,
	props: GroupCommitsProps = {},
): AsyncGenerator<CommitGroup> {
	const commits = new Map<string, Array<Commit>>();
	const tagPattern = props.tagPattern || DefaultTagPattern;
	let tagData = props.initialTag;
	for await (const commit of commitIterator) {
		const tag = commit.tag.find((t) => tagPattern.test(t));
		if (tag) {
			if (tagData && tagData.tag === tag) {
				tagData.commit = commit;
			} else {
				if (0 < commits.size) {
					yield tagData ? { ...tagData, commits } : { tag: null, commits };
					commits.clear();
				}
				tagData = { tag, commit };
			}
			console.info(`${tag} ${commit.author.date.toISOString()} ${commit.hash}`);
		}
		const { type, body } = extractCommitType(commit.message, props);
		let list = commits.get(type);
		if (!list) {
			list = [];
			commits.set(type, list);
		}
		list.push({ ...commit, message: body });
	}
	if (0 < commits.size) {
		yield tagData ? { ...tagData, commits } : { tag: null, commits };
	}
};
