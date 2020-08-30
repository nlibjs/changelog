#!/usr/bin/env node
import * as process from 'process';
import * as console from 'console';
import * as path from 'path';
import * as fs from 'fs';
import {JSON} from '@nlib/global';
// import {generateChangelog} from './generateChangelog';

const execute = async (
) => {
    // tbw
};

if (!module.parent) {
    const args = process.argv.slice(2);
    if (args.includes('--help') || args.includes('-h')) {
        console.log([
            'nlib-changelog [options]',
            '-h, --help     Show help',
            '-v, --version  Output the version number',
        ].join('\n'));
    } else if (args.includes('--version') || args.includes('-v')) {
        const jsonPath = path.join(__dirname, '../package.json');
        const {version} = JSON.parse(fs.readFileSync(jsonPath, 'utf8')) as unknown as {version: string};
        console.log(version);
    } else {
        execute()
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
    }
}
