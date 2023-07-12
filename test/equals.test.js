test('test toBe', () => {
  let name = 'Eko';
  let hello = `Hello, ${name}`;

  expect(hello).toBe('Hello, Eko');
});

test('test to equal', () => {
  let person = {id: 'eko'};
  Object.assign(person, {name: 'Eko'});

  expect(person).toEqual({
    id: 'eko',
    name: 'Eko',
  });
});