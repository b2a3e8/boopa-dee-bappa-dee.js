const decode = require('../src/decode');

test('find matching opening bracket', () => {
    const input = 'boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopadee bappadee boopa boopa bappadee boopa boopa boopa bappadee boopa boopa boopa bappadee boopa boo boo boo boo bappa baa bappadee boopa bappadee boopa bappadee bappa bappadee bappadee boopa boopadee boo baa boo bappa baa bappadee bappadee dee bappadee bappa bappa bappa dee boopa boopa boopa boopa boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappadee dee boo bappa dee boo dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee boopa dee bappadee boopa boopa dee'.split(" ");
    expect(decode.findMatchingOpeningBracket(input, 33)).toBe(14);
    expect(decode.findMatchingOpeningBracket(input, 45)).toBe(43);
    expect(decode.findMatchingOpeningBracket(input, 48)).toBe(8);
});

test('find matching closing bracket', () => {
    const input = 'boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopadee bappadee boopa boopa bappadee boopa boopa boopa bappadee boopa boopa boopa bappadee boopa boo boo boo boo bappa baa bappadee boopa bappadee boopa bappadee bappa bappadee bappadee boopa boopadee boo baa boo bappa baa bappadee bappadee dee bappadee bappa bappa bappa dee boopa boopa boopa boopa boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappadee dee boo bappa dee boo dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee boopa dee bappadee boopa boopa dee'.split(" ");
    expect(decode.findMatchingClosingBracket(input, 14)).toBe(33);
    expect(decode.findMatchingClosingBracket(input, 43)).toBe(45);
    expect(decode.findMatchingClosingBracket(input, 8)).toBe(48);
});

test('decode boopa-dee-bappa-dee string to "Hello World!"', () => {
    const input = 'boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopadee bappadee boopa boopa bappadee boopa boopa boopa bappadee boopa boopa boopa bappadee boopa boo boo boo boo bappa baa bappadee boopa bappadee boopa bappadee bappa bappadee bappadee boopa boopadee boo baa boo bappa baa bappadee bappadee dee bappadee bappa bappa bappa dee boopa boopa boopa boopa boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappadee dee boo bappa dee boo dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee boopa dee bappadee boopa boopa dee';
    expect(decode.decode(input)).resolves.toBe('Hello World!\n');
});

test('decode boopa-dee-bappa-dee string which uses cell values below zero to "Hello World!"', () => {
    const input = 'bappadee boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappa boo boopa boopa boopa boopa boopa boopa boopa boopa boopa bappadee baa boo dee bappadee bappadee boopa bappadee bappa boopadee boopa baa boopa boopa bappadee boopa boopa bappadee boopa boopa boopa boopadee bappadee boopadee bappa bappadee boopa boopa boopa boo boo boopa boopa boopa bappadee baa boo boo baa bappadee bappa bappa bappa bappa bappa dee bappadee bappa bappadee boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappa dee boo boo boopa boopadee bappadee boopadee boopa bappadee boopa baa bappadee bappadee baa boo bappa bappa bappa bappa bappa bappa bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee boopa dee bappadee boopa dee';
    expect(decode.decode(input)).resolves.toBe('Hello World!\n');
});

test('boopadee string gets rejected because of unbalanced brackets', () => {
    var input = "";

    input = 'boopa boopa boopa boopa boopadee boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopadee bappadee boopa boopa bappadee boopa boopa boopa bappadee boopa boopa boopa bappadee boopa boo boo boo boo bappa baa bappadee boopa bappadee boopa bappadee bappa bappadee bappadee boopa boopadee boo baa boo bappa baa bappadee bappadee dee bappadee bappa bappa bappa dee boopa boopa boopa boopa boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappadee dee boo bappa dee boo dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee boopa dee bappadee boopa boopa dee';
    expect(() => { decode.validate(input); }).toThrowError(/unbalanced/);

    input = 'boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopadee bappadee boopa boopa bappadee boopa boopa boopa baa bappadee boopa boopa boopa bappadee boopa boo boo boo boo bappa baa bappadee boopa bappadee boopa bappadee bappa bappadee bappadee boopa boopadee boo baa boo bappa baa bappadee bappadee dee bappadee bappa bappa bappa dee boopa boopa boopa boopa boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappadee dee boo bappa dee boo dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee boopa dee bappadee boopa boopa dee';
    expect(() => { decode.validate(input); }).toThrowError(/unbalanced/);
});

/*
test('decode another boopa-dee-bappa-dee string to "Hello World!"', () => {
    const input = 'pe boopadee dee dee boopa dee boopadee boopa boopa pe boopa dee dee dee dee dee bappa bappa bappadee bappa dee dee bappa dee dee dee bappadee boopa dee boo boopa boopa boopa pe boo boopa boopa boo boo pe pe pe boopadee boo boopa bappadee bappa bappa bappa bappa boo pe pe pe boo dee dee dee dee dee dee boo bappa bappa dee boo boopa boopa boopa boopa pe boo';
    expect(decode.decode(input)).resolves.toBe('Hello World!\n');
});
*/

/*
test('decode boopa-dee-bappa-dee string which needs four cells to the left of the starting point to "Hello World!"', () => {
    const input = 'dee dee bappa dee bappa bappa pe boopadee pe boopadee bappa pe boopa dee dee dee boopa dee boopa dee boopa dee bappa bappa bappa bappadee boopa bappadee bappa bappa dee dee boo bappa pe pe pe pe pe pe boo bappa bappa dee boo boo bappa bappa boo bappa pe boo boopa boopa boo boopa boopa boo bappa bappa bappa boo pe pe pe boo boopa boopa boo boopa boopa dee boo bappa bappa bappa pe boo';
    expect(decode.decode(input)).resolves.toBe('Hello World!\n');
});
*/
