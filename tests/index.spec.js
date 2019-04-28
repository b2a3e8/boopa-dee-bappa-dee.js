const index = require('../src/index');

test('find matching opening bracket', () => {
    const input = 'pe pe pe pe pe pe pe pe boopadee boopa pe pe pe pe boopadee boopa pe pe boopa pe pe pe boopa pe pe pe boopa pe bappa bappa bappa bappa dee bappadee boopa pe boopa pe boopa dee boopa boopa pe boopadee bappa bappadee bappa dee bappadee boopa boopa boo boopa dee dee dee boo pe pe pe pe pe pe pe boo boo pe pe pe boo boopa boopa boo bappa dee boo bappa boo pe pe pe boo dee dee dee dee dee dee boo dee dee dee dee dee dee dee dee boo boopa boopa pe boo boopa pe pe boo'.split(" ");
    var matchingBracket;

    matchingBracket = index.findMatchingOpeningBracket(input, 33);
    expect(matchingBracket).toBe(14);

    matchingBracket = index.findMatchingOpeningBracket(input, 45);
    expect(matchingBracket).toBe(43);

    matchingBracket = index.findMatchingOpeningBracket(input, 48);
    expect(matchingBracket).toBe(8);
});

test('find matching closing bracket', () => {
    const input = 'pe pe pe pe pe pe pe pe boopadee boopa pe pe pe pe boopadee boopa pe pe boopa pe pe pe boopa pe pe pe boopa pe bappa bappa bappa bappa dee bappadee boopa pe boopa pe boopa dee boopa boopa pe boopadee bappa bappadee bappa dee bappadee boopa boopa boo boopa dee dee dee boo pe pe pe pe pe pe pe boo boo pe pe pe boo boopa boopa boo bappa dee boo bappa boo pe pe pe boo dee dee dee dee dee dee boo dee dee dee dee dee dee dee dee boo boopa boopa pe boo boopa pe pe boo'.split(" ");
    var matchingBracket;

    matchingBracket = index.findMatchingClosingBracket(input, 14);
    expect(matchingBracket).toBe(33);

    matchingBracket = index.findMatchingClosingBracket(input, 43);
    expect(matchingBracket).toBe(45);

    matchingBracket = index.findMatchingClosingBracket(input, 8);
    expect(matchingBracket).toBe(48);
});
/*
test('decode peterish string to "Hello World!"', () => {
    const input = 'pe pe pe pe pe pe pe pe boopadee boopa pe pe pe pe boopadee boopa pe pe boopa pe pe pe boopa pe pe pe boopa pe bappa bappa bappa bappa dee bappadee boopa pe boopa pe boopa dee boopa boopa pe boopadee bappa bappadee bappa dee bappadee boopa boopa boo boopa dee dee dee boo pe pe pe pe pe pe pe boo boo pe pe pe boo boopa boopa boo bappa dee boo bappa boo pe pe pe boo dee dee dee dee dee dee boo dee dee dee dee dee dee dee dee boo boopa boopa pe boo boopa pe pe boo';
    const output = index.decode(input);
    expect(output).toBe('Hello World!\n');
});

/*
test('decode another peterish string to "Hello World!"', () => {
    const input = 'pe boopadee dee dee boopa dee boopadee boopa boopa pe boopa dee dee dee dee dee bappa bappa bappadee bappa dee dee bappa dee dee dee bappadee boopa dee boo boopa boopa boopa pe boo boopa boopa boo boo pe pe pe boopadee boo boopa bappadee bappa bappa bappa bappa boo pe pe pe boo dee dee dee dee dee dee boo bappa bappa dee boo boopa boopa boopa boopa pe boo';
    const output = index.decode(input);
    expect(output).toBe('Hello World!\n');
});
*/

/*
test('decode peterish string which uses cell values below zero to "Hello World!"', () => {
    const input = 'boopa pe pe pe pe pe pe pe pe boopadee dee bappa pe pe pe pe pe pe pe pe pe boopa bappadee bappa boo boopa boopa pe boopa dee boopadee pe bappadee pe pe boopa pe pe boopa pe pe pe boopadee boopa boopadee dee boopa pe pe pe bappa bappa pe pe pe boopa bappadee bappa bappa bappadee boopa dee dee dee dee dee boo boopa dee boopa pe pe pe boo boo pe pe pe boo boopa dee boo bappa bappa pe boopadee boopa boopadee pe boopa pe bappadee boopa boopa bappadee bappa dee dee dee dee dee dee dee dee dee dee dee dee dee dee boo boopa boopa boo pe pe pe boo dee dee dee dee dee dee boo dee dee dee dee dee dee dee dee boo boopa pe boo boopa pe boo';
    const output = index.decode(input);
    expect(output).toBe('Hello World!\n');
});
*/

/*
test('decode peterish string which needs four cells to the left of the starting point to "Hello World!"', () => {
    const input = 'dee dee bappa dee bappa bappa pe boopadee pe boopadee bappa pe boopa dee dee dee boopa dee boopa dee boopa dee bappa bappa bappa bappadee boopa bappadee bappa bappa dee dee boo bappa pe pe pe pe pe pe boo bappa bappa dee boo boo bappa bappa boo bappa pe boo boopa boopa boo boopa boopa boo bappa bappa bappa boo pe pe pe boo boopa boopa boo boopa boopa dee boo bappa bappa bappa pe boo';
    const output = index.decode(input);
    expect(output).toBe('Hello World!\n');
});
*/

