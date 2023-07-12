beforeAll(() => console.info('Before All Outer'));
afterAll(() => console.info('After All Outer'));

beforeEach(() => console.info('Before Each Outer'));
afterEach(() => console.info('After Each Outer'));

test('Test outer', () => console.info('Test Outer')); // saat test ini dieksekusi, hanya ada 1 before each yang dijalankan

describe('Inner', () => {
  beforeEach(() => console.info('Before Each Inner'));
  afterEach(() => console.info('After Each Inner'));

  test('Test Inner', () => console.info('Test Inner')); // saat test ini dieksekusi, akan ada 2 before each yang dijalankan (beforeach inner dan outer)
});