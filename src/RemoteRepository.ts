import {exec} from '@nlib/nodetool';
import type {GitServiceName} from './parseRemoteUrl';
import {parseRemoteUrl} from './parseRemoteUrl';

export class RemoteRepository {

    public static async get(remoteName = 'origin'): Promise<RemoteRepository> {
        const {stdout: remoteUrl} = await exec(`git remote get-url ${remoteName}`);
        return new this(remoteUrl);
    }

    public readonly remoteUrl: string;

    public readonly serviceName: GitServiceName;

    public readonly userName: string;

    public readonly repositoryName: string;

    public constructor(remoteUrl: string) {
        const {serviceName, userName, repositoryName} = parseRemoteUrl(remoteUrl);
        this.remoteUrl = remoteUrl;
        this.serviceName = serviceName;
        this.userName = userName;
        this.repositoryName = repositoryName;
    }

    public get baseUrl() {
        const {serviceName, userName, repositoryName} = this;
        switch (serviceName) {
        case 'bitbucket':
            return `https://bitbucket.org/${userName}/${repositoryName}`;
        case 'github':
            return `https://github.com/${userName}/${repositoryName}`;
        case 'gitlab':
            return `https://gitlab.com/${userName}/${repositoryName}`;
        default:
            return `/${userName}/${repositoryName}`;
        }
    }

    public getCommitUrl(commitish: string) {
        const {serviceName, baseUrl} = this;
        switch (serviceName) {
        case 'bitbucket':
            return `${baseUrl}/commits/${commitish}`;
        case 'github':
        case 'gitlab':
        default:
            return `${baseUrl}/commit/${commitish}`;
        }
    }

}
