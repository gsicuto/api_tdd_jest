const { sum } = require('./sum')

describe('First Test', () => {
  test('ensure 1 = 1', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
