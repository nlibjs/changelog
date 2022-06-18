import ava from 'ava';
import {fileURLToPath} from 'url';
import {exec} from './exec.private';
const scriptPath = fileURLToPath(new URL('./cli.mjs', import.meta.url));

ava('Generate a changelog', async (t) => {
    const {stdout} = await exec(`node ${scriptPath}`);
    t.log(stdout);
    t.true(stdout.includes('## v0.1.1 (2020-09-07)'));
    t.true(stdout.includes('## v0.1.0 (2020-09-07)'));
});

ava('Generate a changelog before tag-1', async (t) => {
    const {stdout} = await exec(`node ${scriptPath} --head v0.1.0`);
    t.log(stdout);
    t.false(stdout.includes('## v0.1.1 (2020-09-07)'));
    t.true(stdout.includes('## v0.1.0 (2020-09-07)'));
});
