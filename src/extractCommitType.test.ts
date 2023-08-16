import ava from 'ava';
import { extractCommitType } from './extractCommitType';

interface Case {
  input: Parameters<typeof extractCommitType>;
  expected: ReturnType<typeof extractCommitType>;
}

const cases: Array<Case> = [
  {
    input: ['foo:bar'],
    expected: { type: 'foo', body: 'bar' },
  },
  {
    input: ['foo:bar', { aliases: new Map([['foo', 'replaced']]) }],
    expected: { type: 'replaced', body: 'bar' },
  },
  {
    input: ['foo :bar'],
    expected: { type: 'foo', body: 'bar' },
  },
  {
    input: ['foo: bar'],
    expected: { type: 'foo', body: 'bar' },
  },
  {
    input: ['foo : bar'],
    expected: { type: 'foo', body: 'bar' },
  },
  {
    input: [' foo : bar'],
    expected: { type: 'foo', body: 'bar' },
  },
  {
    input: [' foo'],
    expected: { type: '', body: 'foo' },
  },
  {
    input: [' foo', { empty: '__' }],
    expected: { type: '__', body: 'foo' },
  },
];

for (const { input, expected } of cases) {
  ava(`${JSON.stringify(input)} → ${JSON.stringify(expected)}`, (t) => {
    t.deepEqual(extractCommitType(...input), expected);
  });
}
