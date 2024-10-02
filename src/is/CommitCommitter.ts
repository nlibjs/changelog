import { typeChecker, isString, isValidDate } from "@nlib/typing";

export interface CommitCommitter {
	date: Date;
	name: string;
	email: string;
}

export const isCommitCommitter = typeChecker<CommitCommitter>({
	date: isValidDate,
	name: isString,
	email: isString,
});
