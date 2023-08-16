import ava from 'ava';
import { parseUnquotedCSVLine } from './parseUnquotedCSVLine';

ava('parse a CSV line', (t) => {
  const iterator = parseUnquotedCSVLine(' , foo  ,bar,,');
  t.deepEqual(iterator.next(), { done: false, value: '' });
  t.deepEqual(iterator.next(), { done: false, value: 'foo' });
  t.deepEqual(iterator.next(), { done: false, value: 'bar' });
  t.deepEqual(iterator.next(), { done: false, value: '' });
  t.like(iterator.next(), { done: true });
});
