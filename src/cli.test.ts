import * as path from 'path';
import ava from 'ava';
import {exec} from '@nlib/nodetool';
const scriptPath = path.join(__dirname, 'cli.ts');

ava('Generate a changelog', async (t) => {
    const {stdout} = await exec(`npx ts-node ${scriptPath}`);
    t.true(stdout.includes('## v0.1.0 (2020-09-07)'));
});
