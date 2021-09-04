import {testFunction} from '@nlib/test';
import {parseRemoteUrl} from './parseRemoteUrl';

testFunction(parseRemoteUrl, {
    input: 'git@github.com:user/repo.git',
    expected: {
        serviceName: 'github',
        userName: 'user',
        repositoryName: 'repo',
    },
});
testFunction(parseRemoteUrl, {
    input: 'https://github.com/user/repo.git',
    expected: {
        serviceName: 'github',
        userName: 'user',
        repositoryName: 'repo',
    },
});
testFunction(parseRemoteUrl, {
    input: 'git@gitlab.com:user/repo.git',
    expected: {
        serviceName: 'gitlab',
        userName: 'user',
        repositoryName: 'repo',
    },
});
testFunction(parseRemoteUrl, {
    input: 'https://gitlab.com/user/repo.git',
    expected: {
        serviceName: 'gitlab',
        userName: 'user',
        repositoryName: 'repo',
    },
});
testFunction(parseRemoteUrl, {
    input: 'git@bitbucket.org:user/repo.git',
    expected: {
        serviceName: 'bitbucket',
        userName: 'user',
        repositoryName: 'repo',
    },
});
testFunction(parseRemoteUrl, {
    input: 'https://user@bitbucket.org/user/repo.git',
    expected: {
        serviceName: 'bitbucket',
        userName: 'user',
        repositoryName: 'repo',
    },
});
