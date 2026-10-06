import { test } from 'node:test';
import assert from 'node:assert/strict';
import { average } from '../src/average.js';

test('average of numbers', () => {
  assert.equal(average([2, 4, 6]), 4);
});

test('average of empty list is 0', () => {
  assert.equal(average([]), 0);
});
