/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

 import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman({value: 5})).toBe(false)
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe(5)
  // ...
});

// другая группа проверок

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-5)).toBe(false);
})