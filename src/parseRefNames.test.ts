import ava from 'ava';
import { parseRefNames } from './parseRefNames';

ava('HEAD -> proto, origin/proto, tag: tag-2, tag: tag-1', (t) => {
  t.deepEqual(
    parseRefNames('HEAD -> proto, origin/proto, tag: tag-2, tag: tag-1'),
    {
      tag: ['tag-2', 'tag-1'],
      reference: ['HEAD -> proto', 'origin/proto'],
    },
  );
});
