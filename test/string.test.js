test('string', () => {
  const name = 'Dzikri Nur Akbar';

  expect(name).toBe('Dzikri Nur Akbar');
  expect(name).toMatch(/kri/);
});