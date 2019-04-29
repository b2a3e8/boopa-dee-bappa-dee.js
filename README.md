# boopa-dee-bappa-dee.js

A brainfuck derivative based on the vocabulary of [Peter Griffin's interpretation of the italian language](https://youtu.be/aS38wY1Fm34).
This js library is intended for use on websites to encode and decode ASCII into Boopa-Dee Bappa-Dee and therefore does not support boopabappa command (read from stdin).

## Commands
Command | Brainfuck | Meaning
--- | --- | ---
boopa | \> | increment the data pointer
bappa | \< | decrement the data pointer
pe | \+ | increment the byte at the data pointer
dee | \- | decrement the byte at the data pointer
boo | \. | output the byte at the data pointer
boopabappa* | \, | accept one byte of input, storing its value in the byte at the data pointer
boopadee | \[ | if pointer is zero, jump to matching ]
bappadee | \] | if pointer is nonzero, jump to matching [

**\*ATTENTION**
The boopabappa command is not supported by this library at the moment! Please check out this [Boopa-Dee Bappa-Dee Interpreter written in C](https://github.com/MrMonk3y/Boopa-Dee-Bappa-Dee) if you need the boopabappa command.

## Example
Source code for "Hello World!":
```
pe pe pe pe pe pe pe pe boopadee boopa pe pe pe pe boopadee boopa pe pe boopa pe pe pe boopa pe pe pe boopa pe bappa bappa bappa bappa dee bappadee boopa pe boopa pe boopa dee boopa boopa pe boopadee bappa bappadee bappa dee bappadee boopa boopa boo boopa dee dee dee boo pe pe pe pe pe pe pe boo boo pe pe pe boo boopa boopa boo bappa dee boo bappa boo pe pe pe boo dee dee dee dee dee dee boo dee dee dee dee dee dee dee dee boo boopa boopa pe boo boopa pe pe boo
```
