#!/usr/bin/env node
import * as console from 'node:console';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';
import type * as stream from 'node:stream';
import { Command } from 'commander';
import { ensure, isString } from '@nlib/typing';
import type { GenerateChangelogProps } from './generateChangelog';
import { generateChangelog } from './generateChangelog';
import { parseTypeAliases } from './parseTypeAliases';
import { RemoteRepository } from './RemoteRepository';
import { DefaultTypeAliases } from './serializeCommitGroup';

const { name, description, version } = ensure(
  JSON.parse(
    fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
  ),
  {
    name: isString,
    description: isString,
    version: isString,
  },
);
const program = new Command();
program.name(name);
program.description(description);
program.option('-o, --output <path>', 'A path where the result is written to.');
program.option('--head <commit-ish>', 'Specify the head commit-ish.');
program.option('--alias <aliases...>', 'Specify the commit type aliases.');
program.option('--remote', 'Specify the short name of remote.');
program.version(version);
program.action(
  async (props: {
    output?: string;
    head?: string;
    alias?: Array<string>;
    remote?: string;
  }) => {
    const output: stream.Writable = props.output
      ? fs.createWriteStream(path.resolve(props.output))
      : process.stdout;
    const aliases = props.alias || [];
    const options: GenerateChangelogProps = {
      aliases:
        0 < aliases.length
          ? new Map(parseTypeAliases(aliases))
          : DefaultTypeAliases,
    };
    console.info(options);
    const remote = await RemoteRepository.get(props.remote || 'origin');
    for await (const fragment of generateChangelog(
      remote,
      props.head,
      options,
    )) {
      output.write(fragment);
    }
    output.end();
  },
);

await program.parseAsync();
