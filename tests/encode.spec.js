const encode = require('../src/encode');

test('encode test', () => {
    var encoded = encode.encode('test');
    expect(encoded).resolves.toBe('boopa boopa boopa boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopa boopa boopa boopa boopa boopa boo bappa baa bappadee boopa boopa boopa boopa boopa boopa dee boo boopa boopadee bappadee bappa bappa bappa bappa bappa bappa bappa bappa bappa bappa boo bappa baa bappadee bappa bappa bappa bappa bappa dee boo boopa boopadee bappadee boopa boopa boopa boopa boopa boopa boopa boopa boopa boopa boo bappa baa bappadee boopa boopa boopa boopa dee boo boopadee bappadee boopa boopa boopa boopa boopa boopa boopa boopa boopa boopa boo bappa baa bappadee boopa dee boo');
});
