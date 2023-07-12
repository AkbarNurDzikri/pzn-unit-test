test('array simple', () => {
  const names = ['Dzikri', 'Nur', 'Akbar'];
  expect(names).toContain('Nur'); // memastikan terdapat string 'Nur' di dalam array
  expect(names).toEqual(['Dzikri', 'Nur', 'Akbar']); // memastikan value dalam array sama persis dengan yang diharapkan
});

test('array of object', () => {
  const persons = [
    {name: 'Dzikri'},
    {name: 'Nur'},
    {name: 'Akbar'},
  ];

  expect(persons).toContainEqual({name: 'Nur'}); // memastikan terdapat object name dengan value 'Nur' didalam array of object
  expect(persons).toEqual([
    {name: 'Dzikri'},
    {name: 'Nur'},
    {name: 'Akbar'},
  ]);
});