import {sum, sumAll} from '../src/sum.js';

test('test sum function', () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
})

test('test sum function 2', () => {
  const result = sum(13, 2);

  expect(result).toBe(15);
})

test('test sum all', () => {
  const numbers = [1,2,3,4,5];
  expect(sumAll(numbers)).toBe(15);
})