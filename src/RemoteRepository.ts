import { exec } from "./exec.js";
import type { GitServiceName } from "./parseRemoteUrl.js";
import { parseRemoteUrl } from "./parseRemoteUrl.js";

export class RemoteRepository {
	public static async get(remoteName: string): Promise<RemoteRepository> {
		const { stdout: remoteUrl } = await exec(
			`git remote get-url ${remoteName}`,
		);
		return new RemoteRepository(remoteUrl);
	}

	public readonly remoteUrl: string;

	public readonly serviceName: GitServiceName;

	public readonly userName: string;

	public readonly repositoryName: string;

	public constructor(remoteUrl: string) {
		const { serviceName, userName, repositoryName } = parseRemoteUrl(remoteUrl);
		this.remoteUrl = remoteUrl;
		this.serviceName = serviceName;
		this.userName = userName;
		this.repositoryName = repositoryName;
	}

	public get baseUrl() {
		const { serviceName, userName, repositoryName } = this;
		switch (serviceName) {
			case "bitbucket":
				return `https://bitbucket.org/${userName}/${repositoryName}`;
			case "github":
				return `https://github.com/${userName}/${repositoryName}`;
			case "gitlab":
				return `https://gitlab.com/${userName}/${repositoryName}`;
			default:
				return `/${userName}/${repositoryName}`;
		}
	}

	public getCommitUrl(commitish: string) {
		const { serviceName, baseUrl } = this;
		switch (serviceName) {
			case "bitbucket":
				return `${baseUrl}/commits/${commitish}`;
			default:
				return `${baseUrl}/commit/${commitish}`;
		}
	}
}
