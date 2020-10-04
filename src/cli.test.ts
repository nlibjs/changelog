import * as path from 'path';
import ava from 'ava';
import {exec} from '@nlib/nodetool';
const scriptPath = path.join(__dirname, 'cli.ts');

ava('Generate a changelog', async (t) => {
    const {stdout} = await exec(`npx ts-node ${scriptPath}`);
    t.true(stdout.includes('## v0.1.1 (2020-09-07)'));
    t.true(stdout.includes('## v0.1.0 (2020-09-07)'));
});
ava('Generate a changelog before tag-1', async (t) => {
    const {stdout} = await exec(`npx ts-node ${scriptPath} --head v0.1.0`);
    t.false(stdout.includes('## v0.1.1 (2020-09-07)'));
    t.true(stdout.includes('## v0.1.0 (2020-09-07)'));
});
