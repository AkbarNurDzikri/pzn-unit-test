import { sayHelloAsync } from "../src/async";

test('test async function', async () => {
  const result = await sayHelloAsync('Dzikri Nur Akbar');
  expect(result).toBe('Hello, Dzikri Nur Akbar');
});

// test menggunakan async matcher bawaan jest
test('test async matcher', async () => {
  await expect(sayHelloAsync('Dzikri Nur Akbar')).resolves.toBe('Hello, Dzikri Nur Akbar');
  await expect(sayHelloAsync()).rejects.toBe('Name is empty');
});