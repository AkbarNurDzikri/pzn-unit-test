test('string.not', () => {
  const name = 'Dzikri Nur Akbar';

  expect(name).not.toBe('Joko'); // tidak sama dengan string joko
  expect(name).not.toEqual('Joko'); // tidak sama persis string joko
  expect(name).not.toMatch(/joko/); // tidak mengandung string joko
});

test('number.not', () => {
  const number = 2 + 2;

  expect(number).not.toBeGreaterThan(6); // number tidak lebih dari 6
  expect(number).not.toBeLessThan(3); // number tidak kurang dari 3
  expect(number).not.toBe(10); // number tidak sama dengan 10
});