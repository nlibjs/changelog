export type GitServiceName = 'bitbucket' | 'github' | 'gitlab' | 'unknown';
export interface ParseRemoteUrlResult {
  serviceName: GitServiceName;
  userName: string;
  repositoryName: string;
}

/**
 * git@github.com:user/repo.git
 * https://github.com/user/repo.git
 * git@gitlab.com:user/repo.git
 * https://gitlab.com/user/repo.git
 * git@bitbucket.org:user/repo.git
 * https://user@bitbucket.org/user/repo.git
 */
export const parseRemoteUrl = (remoteUrl: string): ParseRemoteUrlResult => {
  const [, userName, repositoryName] = /([^:/]+?)\/([^/]+?)\.git$/.exec(
    remoteUrl,
  ) || ['', 'unknown', 'unknown'];
  const serviceName = getServiceName(remoteUrl);
  return { serviceName, userName, repositoryName };
};

const getServiceName = (remoteUrl: string): GitServiceName => {
  const host = getHost(remoteUrl);
  const matched = /(\w+\.\w+)$/.exec(host);
  switch (matched && matched[0]) {
    case 'bitbucket.org':
      return 'bitbucket';
    case 'github.com':
      return 'github';
    case 'gitlab.com':
      return 'gitlab';
    default:
      return 'unknown';
  }
};

const getHost = (remoteUrl: string): string => {
  for (const [prefix, delimiter] of [
    ['git@', ':'],
    ['https://', '/'],
  ]) {
    if (remoteUrl.startsWith(prefix)) {
      const delimiterIndex = remoteUrl.indexOf(delimiter, prefix.length);
      if (prefix.length < delimiterIndex) {
        return remoteUrl.slice(prefix.length, delimiterIndex);
      }
    }
  }
  return '';
};
