const { condition } = require('../conditional')

test('conditions testing', () => {
    expect(condition(7)).toEqual(10)
    expect(condition(17)).toEqual(20)
    // expect(condition(47)).toEqual(30)
    expect(condition(47)).toBeGreaterThan(20)
})