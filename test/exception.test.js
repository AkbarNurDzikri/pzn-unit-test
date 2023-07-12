import {MyException, callMe} from '../src/exception.js';

test('exception', () => {
  expect(() => callMe('Dzikri')).toThrow(); // apapun jenis exceptionnya akan di anggap true
  expect(() => callMe('Dzikri')).toThrow(MyException); // jenis exceptionnya harus sesuai baru dianggap true
  expect(() => callMe('Dzikri')).toThrow('Ups my exception happens'); // message exceptionnya harus sama persis baru dianggap true
});