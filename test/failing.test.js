import {sayHello} from '../src/sayHello.js';

test('sayHello success', () => {
  expect(sayHello('Dzikri')).toBe('Hello, Dzikri');
});

test.failing('sayHello error', () => {
  sayHello(null);
});

test('sayHello error matcher', () => {
  expect(() => sayHello(null)).toThrow();
});