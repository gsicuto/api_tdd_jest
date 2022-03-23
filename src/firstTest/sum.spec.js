const { sum } = require('./sum')

describe('First Test', () => {
  test('ensure 1 = 1', () => {
    expect(sum(1, 1)).toBe(2)
  })
  test('Ensure sum fuction parse string values', () => {
    expect(sum('1', 1)).toBe(2)
    expect(sum(1, '1')).toBe(2)
    expect(sum('1', '1')).toBe(2)
  })
  test('return an error if is not possible to make the sum', () => {
    expect(() => sum(' ', 1)).toThrow(new Error('invalid'))
  })
})
