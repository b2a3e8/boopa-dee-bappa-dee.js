# boopa-dee-bappa-dee.js

A brainfuck derivative based on the vocabulary of [Peter Griffin's interpretation of the italian language](https://youtu.be/aS38wY1Fm34).
This js library is intended for use on websites to encode and decode ASCII into Boopa-Dee Bappa-Dee and therefore does not support beepee command (read from stdin).

## Commands
Command | Brainfuck | Meaning
--- | --- | ---
bappadee | \> | increment the data pointer
boo | \< | decrement the data pointer
boopa | \+ | increment the byte at the data pointer
bappa | \- | decrement the byte at the data pointer
dee | \. | output the byte at the data pointer
beepee | \, | accept one byte of input, storing its value in the byte at the data pointer - **not supported by this library**
boopadee | \[ | if pointer is zero, jump to matching ]
baa | \] | if pointer is nonzero, jump to matching [

## Example
Source code for "Hello World!":
```
boopa boopa boopa boopa boopa boopa boopa boopa boopadee bappadee boopa boopa boopa boopa boopadee bappadee boopa boopa bappadee boopa boopa boopa bappadee boopa boopa boopa bappadee boopa boo boo boo boo bappa baa bappadee boopa bappadee boopa bappadee bappa bappadee bappadee boopa boopadee boo baa boo bappa baa bappadee bappadee dee bappadee bappa bappa bappa dee boopa boopa boopa boopa boopa boopa boopa dee dee boopa boopa boopa dee bappadee bappadee dee boo bappa dee boo dee boopa boopa boopa dee bappa bappa bappa bappa bappa bappa dee bappa bappa bappa bappa bappa bappa bappa bappa dee bappadee bappadee boopa dee bappadee boopa boopa dee
```

## Evolution
Alt | Neu | Brainfuck | Meaning
--- | --- | --- | ---
boopa|bappadee | \> | increment the data pointer
bappa|boo | \< | decrement the data pointer
pe|boopa | \+ | increment the byte at the data pointer
dee|bappa | \- | decrement the byte at the data pointer
boo|dee | \. | output the byte at the data pointer
boopabappa|beepee* | \, | accept one byte of input, storing its value in the byte at the data pointer
boopadee|boopadee | \[ | if pointer is zero, jump to matching ]
bappadee|baa | \] | if pointer is nonzero, jump to matching [
