const {arrayss} =require('../arrayss')

test('array testing',()=>{
    expect(arrayss([1,0,6,7,3])).toContain(0)
    expect(arrayss([1,0,6,7,3])).toEqual([1,0,36,49,9])
})