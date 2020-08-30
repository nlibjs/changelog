import ava from 'ava';
import {walkCommitHistory} from './walkCommitHistory';

ava('walk commit history', async (t) => {
    const thirdCommitish = '4f25e7e3672d591fbb379790192d0b035889a5e2';
    const asyncIterator = walkCommitHistory(thirdCommitish);
    const thirdCommit = await asyncIterator.next();
    t.like(thirdCommit.value, {
        hash: '4f25e7e3672d591fbb379790192d0b035889a5e2',
        parentHash: 'b3ec2a662d1adf4d040960bd5ae40b2d7e308418',
    });
    t.log(thirdCommit.value);
    const secondCommit = await asyncIterator.next();
    t.like(secondCommit.value, {
        hash: 'b3ec2a662d1adf4d040960bd5ae40b2d7e308418',
        parentHash: '09261b7cd053b3b2c0a75bbe21266c1843768fec',
    });
    t.log(secondCommit.value);
    const firstCommit = await asyncIterator.next();
    t.like(firstCommit.value, {
        hash: '09261b7cd053b3b2c0a75bbe21266c1843768fec',
        parentHash: '',
    });
    t.log(firstCommit.value);
    const done = await asyncIterator.next();
    t.true(done.done);
});
