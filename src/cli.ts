#!/usr/bin/env node
import * as process from 'process';
import * as console from 'console';
import * as path from 'path';
import * as fs from 'fs';
import type * as stream from 'stream';
import {Date, Map} from '@nlib/global';
import {createCLIArgumentsParser, getVersion, serializeDefinitionMap} from '@nlib/nodetool';
import type {GenerateChangelogProps} from './generateChangelog';
import {generateChangelog} from './generateChangelog';
import {getCommit} from './getCommit';
import type {TagData} from './groupCommits';
import type {Commit} from './is/Commit';
import {parseTypeAliases} from './parseTypeAliases';
import {DefaultTypeAliases} from './serializeCommitGroup';

const parse = createCLIArgumentsParser({
    output: {
        type: 'string?',
        alias: 'o',
        description: 'A file path nlib-changelog writes to',
    },
    head: {
        type: 'string?',
        description: 'Specify the head commitish',
    },
    alias: {
        type: 'string[]?',
        alias: 'a',
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
    stdout: stream.Writable = process.stdout,
) => {
    if (args.includes('--help') || args.includes('-h')) {
        stdout.write('nlib-changelog --output path/to/changelog.md\n\n');
        for (const help of serializeDefinitionMap(parse.definition)) {
            stdout.write(help);
        }
    } else if (args.includes('--version') || args.includes('-v')) {
        stdout.write(`${getVersion(path.join(__dirname, '../package.json'))}\n`);
    } else {
        const props = parse(args);
        const output: stream.Writable = props.output ? fs.createWriteStream(path.resolve(props.output)) : process.stdout;
        const options: GenerateChangelogProps = {
            aliases: 0 < props.alias.length ? new Map(parseTypeAliases(props.alias)) : DefaultTypeAliases,
        };
        if (!props.head) {
            options.initialTag = getPseudoTagData({
                tag: `v${getVersion(path.resolve('package.json'))}`,
                commit: await getCommit('HEAD'),
            });
        }
        for await (const fragment of generateChangelog(props.head, options)) {
            output.write(fragment);
        }
        output.end();
    }
};

if (require.main === module) {
    nlibChangelogCLI(process.argv.slice(2))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
