const {decimalToHexa,hexa2binary} = require("./utilities");



// unit testing for decimal to hexa function 


test("Should return [A-F][0-9] function",()=>{
    const testingOu = decimalToHexa(100)
    expect(testingOu).toBe('64')
})


test("Should return [A-F][0-9] function",()=>{
    const testingOu = decimalToHexa(273)
    expect(testingOu).toBe('111')
})


test("Should return [A-F][0-9] function",()=>{
    const testingOu = decimalToHexa(105)
    expect(testingOu).toBe('69')
})


test("Should return [A-F][0-9] function",()=>{
    const testingOu = decimalToHexa(171)
    expect(testingOu).toBe('AB')
})


test("Should return [A-F][0-9] function",()=>{
    const testingOu = decimalToHexa(131071)
    expect(testingOu).toBe('1FFFF')
})

test("Should return [A-F][0-9] function",()=>{
    const testingOu = decimalToHexa(123213123)
    expect(testingOu).toBe("7581543")
})


test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = hexa2binary('2A9');
    expect(testingOu).toBe('001010101001')
})






