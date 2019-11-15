const {binary,isBinary} = require(".");

// unit testing for is binary function 

test("isBinary function",()=>{
    const testingOu = isBinary(101010)
    expect(testingOu).toBe(true)
})


test("isBinary function",()=>{
    const testingOu = isBinary("111010111")
    expect(testingOu).toBe(true)
})


test("isBinary function",()=>{
    const testingOu = isBinary("1200001")
    expect(testingOu).toBe(false)
})


test("isBinary function",()=>{
    const testingOu = isBinary("10A21011")
    expect(testingOu).toBe(false)
})




// Integartion testing for binary 

test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary(112,'decimal');
    expect(testingOu).toBe('1110000')
})

test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary(25673,'decimal',true);
    expect(testingOu).toBe('1100_1000_1001_001')
})


test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary(555,'decimal');
    expect(testingOu).toBe('1000101011')
})

test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary(12999,'decimal');
    expect(testingOu).toBe("11001011000111")
})


test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary('91','hexa');
    expect(testingOu).toBe('10010001')
})

test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary('AAAA','hexa');
    expect(testingOu).toBe('1010101010101010')
})



test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary('2A9','hexa');
    expect(testingOu).toBe('001010101001')
})


test("should return [0,1] only with underscore if it's wanted !",()=>{
    const testingOu = binary('67','hexa');
    expect(testingOu).toBe('01100111')
})





/** Just We want to Testing the flow of the binary function  */
test("binary function must treat it as decimal",()=>{
    const testingOu = binary('112');
    expect(testingOu).toBe('1110000')
})

test("binary function must treat it as hexa",()=>{
    const testingOu = binary('2A9');
    expect(testingOu).toBe('001010101001')
})

test("binary function must treat it as hexa",()=>{
    const testingOu = binary('122','hexa');
    expect(testingOu).toBe('000100100010')
})












