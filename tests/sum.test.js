
import sum from '../src/sum.js';

test('soma 1 + 2 e retorna 3', () => {
  expect(sum([1, 2])).toBe(3);
});

test('soma -1 + 1 e retorna 0', () => {
  expect(sum([-1, 1])).toBe(0);
});

test('soma 1, 2, 3, 4 e 5 e retorna 15', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});
