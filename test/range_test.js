import test from 'ava';
import {range, Range} from '../index.js';

test('create range object', t => {
  const r = range(5);
  t.true(r instanceof Range);
});

test('iterabel', t => {
  const r1 = range(2, 7, 2);
  t.deepEqual([...r1], [2, 4, 6]);
});

test('toArray', t => {
  const r1 = range(1, 5, 2);
  t.deepEqual(r1.toArray(), [1, 3]);

  const r2 = range(1, 6, 2);
  t.deepEqual(r2.toArray(), [1, 3, 5]);
});

test('length', t => {
  const r1 = range(1, 5, 2);
  t.deepEqual(r1.length, 2);

  const r2 = range(1, 6, 2);
  t.deepEqual(r2.length, 3);
});