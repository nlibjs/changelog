import { createTypeChecker, isString, isValidDate } from '@nlib/typing';

export interface CommitAuthor {
  date: Date;
  name: string;
  email: string;
}

export const isCommitAuthor = createTypeChecker<CommitAuthor>('CommitAuthor', {
  date: isValidDate,
  name: isString,
  email: isString,
});
