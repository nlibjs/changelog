import { typeChecker, isString, isValidDate } from "@nlib/typing";

export interface CommitAuthor {
	date: Date;
	name: string;
	email: string;
}

export const isCommitAuthor = typeChecker<CommitAuthor>({
	date: isValidDate,
	name: isString,
	email: isString,
});
