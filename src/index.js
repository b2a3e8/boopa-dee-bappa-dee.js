'use strict';

/**
 * translate ascii to peterish
 * @param {string} string ASCII string which should be translated.
 * @returns //TODO Promise
 */
function encode (string) {

    // TODO input validation (is ascii?)

}

function findMatchingOpeningBracket (array, closePos) {

    // TODO function assumes that parentheses are balanced, so no array bounds checking is done. A real implementation would check that you don't run off the end of the array, and throw an exception (or return an error code) that indicates that parentheses are unbalanced in the input text if you do.

    var openPos = closePos;
    var counter = 1;

    while (counter > 0) {
        var command = array[--openPos];
        if (command === 'boopadee') { // equals brainfuck command [
            counter--;
        }
        if (command === 'bappadee') { // equals brainfuck command ]
            counter++;
        }
    }
    return openPos;
}

function findMatchingClosingBracket (array, openPos) {

    // TODO function assumes that parentheses are balanced, so no array bounds checking is done. A real implementation would check that you don't run off the end of the array, and throw an exception (or return an error code) that indicates that parentheses are unbalanced in the input text if you do.

    var closePos = openPos;
    var counter = 1;

    while (counter > 0) {
        var command = array[++closePos];
        if (command === 'boopadee') { // equals brainfuck command [
            counter++;
        }
        if (command === 'bappadee') { // equals brainfuck command ]
            counter--;
        }
    }
    return closePos;
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
    var bracketStack = [];            // array of cursor where boopadee ([) and bappadee (]) are found

    function interpret () {

        console.log("input.length: " + input.length);

        // loop through input untill cursor points to the end
        while (cursor < input.length) {

            console.log("cursor: " + cursor);

            const command = input[cursor];

            console.log("command: "+ command);

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
                    data[pointer] = data[pointer] || 0;
                    if (data[pointer] === 0) { // if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the matching bappadee (]) command
                        var closingBracket = findMatchingClosingBracket(input, pointer);
                        cursor = closingBracket;
                        console.log("jump to closing bracket: " + closingBracket);
                    }
                    break;
                case 'bappadee':    // equals brainfuck command ]
                    data[pointer] = data[pointer] || 0;
                    if (data[pointer] !== 0) { // if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the matching boopadee ([) command
                        var openingBracket = findMatchingOpeningBracket(input, pointer);
                        cursor = openingBracket;
                        console.log("jump to opening bracket: " + openingBracket);
                    }
                    break;
                default:
                    throw ("bad syntax! " + command + " is not a valid command");
            }
            cursor++;
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

    // TODO check if brackets are balanced

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
    findMatchingOpeningBracket,
    findMatchingClosingBracket,
};
