const octal = require(".");

// integration testing for octal FN

test('Octal FN :: conver to octal', () => {
    const testingOu = octal(112,'decimal');
    expect(testingOu).toBe(160)
})

test('Octal FN :: conver to octal', () => {
    const testingOu = octal(100);
    expect(testingOu).toBe(144);
})

test('Octal FN :: conver to octal', () => {
    const testingOu = octal('23FE','hexa');
    expect(testingOu).toBe(21776);
})

test('Octal FN :: conver to octal', () => {
    const testingOu = octal('082012FE');
    expect(testingOu).toBe(1010011376);
})

test('Octal FN :: conver to octal', () => {
    const testingOu = octal('082012FE');
    expect(testingOu).toBe(1010011376);
})

test('Octal FN :: conver to octal', () => {
    const testingOu = octal('110101010001','binary');
    expect(testingOu).toBe(6521);
})

test('Octal FN :: conver to octal', () => {
    const testingOu = octal('25.625','decimal');
    expect(testingOu).toBe(31.5);
})








