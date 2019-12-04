const {decimal,isDecimal} = require(".");



// unit testing for is decimal function 

test("isDecimal function",()=>{
    const testingOu = isDecimal(122)
    expect(testingOu).toBe(true)
})

test("isDecimal function",()=>{
    const testingOu = isDecimal('122')
    expect(testingOu).toBe(true)
})

test("isDecimal function",()=>{
    const testingOu = isDecimal('A1222')
    expect(testingOu).toBe(false)
})

test("isDecimal function",()=>{
    const testingOu = isDecimal(10101010)
    expect(testingOu).toBe(true)
})

// Integration testing for decimal function 

test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal(35)
    expect(testingOu).toBe(53)
})


test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal('1AA')
    expect(testingOu).toBe(426)
})



test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal(12)
    expect(testingOu).toBe(18)
})



test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal('AFFFEEE28')
    expect(testingOu).toBe(47244570152)
})



test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal('4B')
    expect(testingOu).toBe(75)
})


test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal('4B')
    expect(testingOu).toBe(75)
})



test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal('100010010101011010')
    expect(testingOu).toBe(140634)
})


test("should return [0-9] == Decimal",()=>{
    const testingOu = decimal('10100011')
    expect(testingOu).toBe(163)
})



//** Just We want to Testing the flow of the decimal function binary -> hexa */
test("decimal must treat it as binary",()=>{
    const testingOu = decimal('0100','binary');
    expect(testingOu).toBe(4)
})

test("decimal must treat it as binary",()=>{
    const testingOu = decimal('0100','binary');
    expect(testingOu).toBe(4)
})

test("decimal must treat it as hexa",()=>{
    const testingOu = decimal('0100','hexa');
    expect(testingOu).toBe(256)
})













