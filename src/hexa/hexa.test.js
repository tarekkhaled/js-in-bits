const {hexa,isHexa} = require(".");
// unit testing for is hexa function 

test("isHexa function",()=>{
    const testingOu = isHexa(38)
    expect(testingOu).toBe(true)
})

test("isHexa function",()=>{
    const testingOu = isHexa(111)
    expect(testingOu).toBe(true)
})

test("isHexa function",()=>{
    const testingOu = isHexa('AEGFEDB')
    expect(testingOu).toBe(false)
})

test("isHexa function",()=>{
    const testingOu = isHexa('AEGFEDBKL')
    expect(testingOu).toBe(false)
})

test("isHexa function",()=>{
    const testingOu = isHexa('A69')
    expect(testingOu).toBe(true)
})

test("isHexa function",()=>{
    const testingOu = isHexa('0xAE')
    expect(testingOu).toBe(true)
})

test("isHexa function",()=>{
    const testingOu = isHexa('0X')
    expect(testingOu).toBe(false)
})


test("isHexa function",()=>{
    const testingOu = isHexa('0XGT')
    expect(testingOu).toBe(false)
})



// integartion testing for hexa function 

test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(56)
    expect(testingOu).toBe('38')
})

test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(273)
    expect(testingOu).toBe('111')
})


test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(105)
    expect(testingOu).toBe('69')
})

test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(158)
    expect(testingOu).toBe('9E')
})

test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(171)
    expect(testingOu).toBe('AB')
})


test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(100,'decimal')
    expect(testingOu).toBe('64')
})


test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(262143)
    expect(testingOu).toBe('3FFFF')
})


test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(1000,'decimal',true)
    expect(testingOu).toBe('0x3E8')
})



test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(123213123)
    expect(testingOu).toBe('7581543')
})

test("hexa FN :: convert to hexa",()=>{
    const testingOu = hexa(100,'octal')
    expect(testingOu).toBe('40')
})













