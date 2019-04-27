'use strict';

/**
 * translate ascii to peterish
 * @param {string} string ASCII string which should be translated.
 * @returns //TODO Promise
 */
function encode (string) {

    // TODO input validation (is ascii?)

}



/**
 * translate peterish to ascii
 * @param {string} string Peterish commands which should be translated.
 * @returns //TODO Promise
 */
function decode (string) {

    // TODO remove frequently used bullshit like newlines

    validate(string); // input validation (is peterish?)

    const input = string.split(" ");  // build an array of commands from string
    var cursor = 0;                   // points to position in input array (to current command)
    var data = [];                    // data store
    var pointer = 0;                  // points to position in data store
    var output = "";                  // decoded string
    var stack = [];                   // array of cursor where boopadee ([) and bappadee (]) are found

    function interpret () {

        const command = input[cursor];

        switch (command) {
            case 'boopa':       // equals brainfuck command >
                pointer++;
                break;
            case 'bappa':       // equals brainfuck command <
                if (pointer > 0) { pointer--; }
                break;
            case 'pe':          // equals brainfuck command +
                data[pointer] = data[pointer] || 0;
                data[pointer]++;
                break;
            case 'dee':         // equals brainfuck command -
                data[pointer] = data[pointer] || 0;
                data[pointer]--;
                break;
            case 'boo':         // equals brainfuck command .
                output += String.fromCharCode(data[pointer]);
                break;
            case 'boopadee':    // equals brainfuck command [

                var latestStackElement = stack[stack.length-1];

                if (latestStackElement !== cursor) { // add element to stack if latest element point elsewhere
                    stack.push(cursor);
                } else if (latestStackElement.type !== 'number') { // add element to stack if it's not available
                    stack.push(cursor);
                }


                if (!data[pointer]) {
                    // loop until a matching ']' is found
                    var open = 1;
                    var type = { '[' : 1, ']' : -1 };
                    var c;

                    // break if open becomes 0
                    for ( ; !(type[c = input[cursor++]] && !(open += type[c])) ; );
                }

                break;
            case 'bappadee':    // equals brainfuck command ]

                var latestStackElement = stack[stack.length-1];

                if ('number' !== typeof (latestStackElement)) {
                    this._error = new Error('No preceeding "]"'); // bad syntax
                } else {
                    if (data[pointer]) { cursor  = latestStackElement; } // first char after loop
                    else { stack.pop(); }  // pop the stack and continue
                }


                break;
        }

        // check if there are more commands in input array to interpret
        if (cursor < input.length) {
            cursor++; // move cursor to next command
            return interpret(); // interpret next command
        }
        else {
            // TODO resolve promise
        }
    }

    interpret();

    return output;
}

/**
 * validates a peterish string
 * @param {string} string Source code to execute.
 * @returns {boolean} boolean Boolean indicating whether source code is valid or not.
 */
function validate(string) {
    var regex = /^(boopa|bappa|pe|boo|dee|boopadee|bappadee| )+$/;

    if (string.match(regex)) {
        return true; // source code is valid
    } else {

        // source code is invalid
        regex = /boopabappa/;
        if (string.match(regex)) {
            throw "source code is not valid! this translator does not support boopabappa command (accept one byte of input from stdin, storing its value in the byte at the data pointer), because the translators usage is intended for websites and you cant read from stdin there";
        } else {
            throw "source code is not valid!";
        }
    }
}

module.exports = {
    decode,
    encode,
    validate,
};
