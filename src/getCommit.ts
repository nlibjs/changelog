import * as childProcess from "node:child_process";
import { ensure } from "@nlib/typing";
import type { Commit } from "./is/Commit.js";
import { isCommit } from "./is/Commit.js";
import { parseRefNames } from "./parseRefNames.js";

/**
 * https://git-scm.com/docs/pretty-formats
 */
const NewLine = "%x0A";
const CommitHash = "%H";
const AbbreviatedCommitHash = "%h";
const ParentHash = "%P";
// const AbbreviatedParentHash = '%p';
const AuthorDate = "%aI";
const AuthorName = "%aN";
const AuthorEmail = "%aE";
const CommitterDate = "%cI";
const CommitterName = "%cN";
const CommitterEmail = "%cE";
const CommitterTimestamp = "%ct";
const RefNames = "%D";
const RawBody = "%B";

export const prefix = "> ";
export const CommitFormat = [
	RefNames,
	CommitHash,
	AbbreviatedCommitHash,
	ParentHash,
	AuthorDate,
	AuthorName,
	AuthorEmail,
	CommitterDate,
	CommitterName,
	CommitterEmail,
	RawBody,
]
	.map((line) => `${prefix}${line}`)
	.join(NewLine);

/**
 * The committer timestamp is prepended so that the history walk can choose
 * the parent that `git log -1` would choose.
 */
const LogFormat = `${prefix}${CommitterTimestamp}${NewLine}${CommitFormat}`;

export interface LoggedCommit {
	commit: Commit;
	/** Committer timestamp in seconds. */
	committedAt: number;
}

const parseLoggedCommit = (rawCommit: string): LoggedCommit => {
	let offset = prefix.length;
	const consume = (): string => {
		const currentOffset = offset;
		const nextNewLineOffset = rawCommit.indexOf("\n", offset);
		offset = nextNewLineOffset + 1 + prefix.length;
		return rawCommit.slice(currentOffset, nextNewLineOffset);
	};
	const committedAt = Number(consume());
	const commit = ensure(
		{
			...parseRefNames(consume()),
			hash: consume(),
			shortHash: consume(),
			parentHash: consume(),
			author: {
				date: new Date(consume()),
				name: consume(),
				email: consume(),
			},
			committer: {
				date: new Date(consume()),
				name: consume(),
				email: consume(),
			},
			message: rawCommit.slice(offset),
		},
		isCommit,
	);
	return { commit, committedAt };
};

/**
 * Runs `git log` once and returns up to `maxCount` commits reachable from
 * `revisions` in the order `git log` outputs them.
 */
export const logCommits = async (
	revisions: Array<string>,
	maxCount: number,
): Promise<Array<LoggedCommit>> => {
	const args = [
		"log",
		"-z",
		`--max-count=${maxCount}`,
		`--format=${LogFormat}`,
		...revisions,
		"--",
	];
	const stdout = await new Promise<string>((resolve, reject) => {
		childProcess.execFile(
			"git",
			args,
			{ maxBuffer: 1024 * 1024 * 1024 },
			(error, out, stderr) => {
				if (error) {
					console.error(`--- stderr ---\n${stderr}`);
					reject(error);
				} else {
					resolve(out);
				}
			},
		);
	});
	const result: Array<LoggedCommit> = [];
	for (const rawCommit of stdout.split("\0")) {
		const trimmed = rawCommit.trimEnd();
		if (trimmed) {
			result.push(parseLoggedCommit(trimmed));
		}
	}
	return result;
};

export const getCommit = async (commitish: string): Promise<Commit> => {
	const [logged] = await logCommits([commitish], 1);
	if (!logged) {
		throw new Error(`NoCommit: ${commitish}`);
	}
	return logged.commit;
};
