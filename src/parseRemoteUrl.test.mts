import ava from 'ava';
import { parseRemoteUrl } from './parseRemoteUrl.mjs';

interface Case {
  input: string;
  expected: ReturnType<typeof parseRemoteUrl>;
}

const cases: Array<Case> = [
  {
    input: 'git@github.com:user/repo.git',
    expected: {
      serviceName: 'github',
      userName: 'user',
      repositoryName: 'repo',
    },
  },
  {
    input: 'https://github.com/user/repo.git',
    expected: {
      serviceName: 'github',
      userName: 'user',
      repositoryName: 'repo',
    },
  },
  {
    input: 'git@gitlab.com:user/repo.git',
    expected: {
      serviceName: 'gitlab',
      userName: 'user',
      repositoryName: 'repo',
    },
  },
  {
    input: 'https://gitlab.com/user/repo.git',
    expected: {
      serviceName: 'gitlab',
      userName: 'user',
      repositoryName: 'repo',
    },
  },
  {
    input: 'git@bitbucket.org:user/repo.git',
    expected: {
      serviceName: 'bitbucket',
      userName: 'user',
      repositoryName: 'repo',
    },
  },
  {
    input: 'https://user@bitbucket.org/user/repo.git',
    expected: {
      serviceName: 'bitbucket',
      userName: 'user',
      repositoryName: 'repo',
    },
  },
];

for (const { input, expected } of cases) {
  ava(input, (t) => {
    t.deepEqual(parseRemoteUrl(input), expected);
  });
}
