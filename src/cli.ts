#!/usr/bin/env node
import {Command} from 'commander';
import * as console from 'console';
import * as fs from 'fs';
import * as path from 'path';
import * as process from 'process';
import type * as stream from 'stream';
import type {GenerateChangelogProps} from './generateChangelog';
import {generateChangelog} from './generateChangelog';
import {getCommit} from './getCommit';
import type {TagData} from './groupCommits';
import type {Commit} from './is/Commit';
import {parseTypeAliases} from './parseTypeAliases';
import {RemoteRepository} from './RemoteRepository';
import {DefaultTypeAliases} from './serializeCommitGroup';

const getPseudoTagData = (
    {tag, commit, date = new Date()}: {
        tag: string,
        commit: Commit,
        date?: Date,
    },
): TagData => ({
    tag,
    commit: {
        ...commit,
        author: {...commit.author, date},
        committer: {...commit.committer, date},
    },
});

const packageJson = JSON.parse(
    fs.readFileSync(new URL('../package.json', import.meta.url), 'utf-8'),
) as unknown as {name: string, version: string, description: string};

const program = new Command();
program.name(packageJson.name);
program.description(packageJson.description);
program.option('-o, --output <path>', 'A path where the result is written to.');
program.option('--head <commit-ish>', 'Specify the head commit-ish.');
program.option('--alias <...aliases>', 'Specify the commit type aliases.');
program.option('--remote', 'Specify the short name of remote.');
program.version(packageJson.version);
program.action(
    async (
        props: {
            output?: string,
            head?: string,
            alias?: Array<string>,
            remote?: string,
        },
    ) => {
        const output: stream.Writable = props.output ? fs.createWriteStream(path.resolve(props.output)) : process.stdout;
        const aliases = props.alias || [];
        const options: GenerateChangelogProps = {
            aliases: 0 < aliases.length ? new Map(parseTypeAliases(aliases)) : DefaultTypeAliases,
        };
        if (!props.head) {
            options.initialTag = getPseudoTagData({
                tag: `v${packageJson.version}`,
                commit: await getCommit('HEAD'),
            });
        }
        const remote = await RemoteRepository.get(props.remote || 'origin');
        for await (const fragment of generateChangelog(remote, props.head, options)) {
            output.write(fragment);
        }
        output.end();
    },
);
program.parseAsync()
.catch((error) => {
    console.error(error);
    process.exit(1);
});
