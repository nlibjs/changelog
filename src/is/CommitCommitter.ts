import { createTypeChecker, isString, isValidDate } from "@nlib/typing";

export interface CommitCommitter {
	date: Date;
	name: string;
	email: string;
}

export const isCommitCommitter = createTypeChecker<CommitCommitter>(
	"CommitCommitter",
	{
		date: isValidDate,
		name: isString,
		email: isString,
	},
);
