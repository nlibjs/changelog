import * as console from 'console';
import type { Serializable } from './serialize.mjs';
import { serialize } from './serialize.mjs';
import type {
  CommitGroup,
  GroupCommitsProps,
  TagData,
} from './groupCommits.mjs';
import { groupCommits } from './groupCommits.mjs';
import type { Commit } from './is/Commit.mjs';
import type { RemoteRepository } from './RemoteRepository.mjs';
import { serializeCommitGroup } from './serializeCommitGroup.mjs';
import { walkCommitHistory } from './walkCommitHistory.mjs';

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
    header = '# Changelog\n\n',
    footer = '',
  } = props;
  if (header) {
    yield header;
  }
  for await (const commitGroup of groupCommits(commits, props)) {
    console.info(`${commitGroup.tag} (${commitGroup.commits.size})`);
    yield* serialize(serializer(remote, commitGroup));
    yield '\n';
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
