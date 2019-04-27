# boopa-dee-bappa-dee.js

## Commands
Word | Brainfuck Character | Meaning
--- | --- | ---
boopa | \> | increment the data pointer (to point to the next cell to the right)
bappa | \< | decrement the data pointer (to point to the next cell to the left)
pe | \+ | increment (increase by one) the byte at the data pointer
dee | \- | decrement (decrease by one) the byte at the data pointer
boo | \. | output the byte at the data pointer
boopabappa | \, | accept one byte of input, storing its value in the byte at the data pointer
boopadee | \[ | if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command
bappadee | \] | if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command
