import ava from 'ava';
import { parseTypeAliases } from './parseTypeAliases.mjs';

ava('a/b c/d', (t) => {
  t.deepEqual(
    [...parseTypeAliases(['a/b', 'c/d'])],
    [
      ['a', 'b'],
      ['c', 'd'],
    ],
  );
  t.throws(
    () => {
      [...parseTypeAliases(['a a/b', 'c/d'])].slice();
    },
    { code: 'InvalidAliasFrom' },
  );
  t.throws(
    () => {
      [...parseTypeAliases(['a/b', 'c/d d'])].slice();
    },
    { code: 'InvalidAliasTo' },
  );
});
