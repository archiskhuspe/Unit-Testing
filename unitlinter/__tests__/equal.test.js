const {equalfunc, square, dbconn} =require('../equal')

describe('Equality test', () => {

    // beforeEach(()=>{
    //     dbconn()
    //     console.log("new object")
    // })
   
    test('test 1',()=>{
        expect( equalfunc(6,6) ) . toBe(true)
    })  
    test('test 2',()=>{
        expect(equalfunc(6 , "6")) . toBe(false)
    })  
    test('test 3',()=>{
        expect(square(6)).toBe(36)
    })  
    test('test 4',()=>{
        expect(()=>square("6")) . toThrow ('Not a number')
    })  
});

// afterAll(()=>{
//     console.log("all tests executed")
// })
