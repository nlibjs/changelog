#!/usr/bin/env node
import * as process from 'process';
import * as console from 'console';
import * as path from 'path';
import * as fs from 'fs';
import {Date} from '@nlib/global';
import {
    createCLIArgumentsParser,
    getVersion,
    serializeDefinitionMap,
} from '@nlib/nodetool';
import {
    generateChangelog,
    GenerateChangelogOptions,
} from './generateChangelog';
import {getCommit} from './getCommit';
import {TagData} from './groupCommits';
import {Commit} from './is/Commit';

const parse = createCLIArgumentsParser({
    output: {
        type: 'string',
        alias: 'o',
        description: 'A file path nlib-changelog writes to',
    },
    head: {
        type: 'string?',
        description: 'Specify the head commitish',
    },
    help: {
        type: 'boolean',
        alias: 'h',
        description: 'Show help',
    },
    version: {
        type: 'boolean',
        alias: 'v',
        description: 'Output the version number',
    },
});

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

export const nlibChangelogCLI = async (
    args: Array<string>,
    stdout: NodeJS.WritableStream = process.stdout,
) => {
    if (args.includes('--help') || args.includes('-h')) {
        stdout.write('cleanup-package-json --file path/to/package.json\n\n');
        for (const help of serializeDefinitionMap(parse.definition)) {
            stdout.write(help);
        }
    } else if (args.includes('--version') || args.includes('-v')) {
        stdout.write(`${getVersion(path.join(__dirname, '../package.json'))}\n`);
    } else {
        const props = parse(args);
        const output = fs.createWriteStream(path.resolve(props.output));
        const options: GenerateChangelogOptions = {
            headCommit: props.head,
        };
        if (!options.headCommit) {
            options.initialTag = getPseudoTagData({
                tag: `v${getVersion(path.join(__dirname, '../package.json'))}`,
                commit: await getCommit('HEAD'),
            });
        }
        for await (const fragment of generateChangelog(options)) {
            output.write(fragment);
        }
        output.close();
    }
};

if (require.main === module) {
    nlibChangelogCLI(process.argv.slice(2))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
