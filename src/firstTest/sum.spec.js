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
})
