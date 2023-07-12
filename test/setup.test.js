import {sum} from '../src/sum';

// One-Time Setup Function
beforeAll(() => console.info('Before All')); // dijalankan hanya sekali sebelum semua unit test dijalankan
afterAll(() => console.info('After All')); // dijalankan hanya sekali setelah semua unit test dijalankan

// Setup Function
beforeEach(() => console.info('Before Each')); // dijalankan "setiap" sebelum menjalanakan 1 unit test
afterEach(() => console.info('After Each')); // dijalankan "setiap" setelah menjalankan 1 unit test

test('first test', () => {
  expect(sum(1,2)).toBe(3);
  console.info('first test');
});

test('second test', () => {
  expect(sum(1,5)).toBe(6);
  console.info('second test');
});