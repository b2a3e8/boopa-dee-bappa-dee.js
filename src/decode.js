'use strict';

/**
 * Finds the matching boopadee for a baa.
 * @param   {Array<string>}  array     Array of boopa-dee-bappa-dee commands to search in.
 * @param   {Integer}        closePos  Pointer to baa command in command's array.
 * @returns {Integer}                  Pointer to baa's matching boopadee command in command's array.
 */
function findMatchingOpeningBracket (array, closePos) {

    var openPos = closePos;
    var counter = 1;

    while (counter > 0) {
        var command = array[--openPos];
        if (command === 'boopadee') { // equals brainfuck command [
            counter--;
        }
        if (command === 'baa') { // equals brainfuck command ]
            counter++;
        }
    }
    return openPos;
}

/**
 * Finds the matching baa for a boopadee.
 * @param   {Array<string>}  array    Array of boopa-dee-bappa-dee commands to search in.
 * @param   {Integer}        openPos  Pointer to boopadee command in command's array.
 * @returns {Integer}                 Pointer to boopadee's matching baa command in command's array.
 */
function findMatchingClosingBracket (array, openPos) {

    var closePos = openPos;
    var counter = 1;

    while (counter > 0) {
        var command = array[++closePos];
        if (command === 'boopadee') { // equals brainfuck command [
            counter++;
        }
        if (command === 'baa') { // equals brainfuck command ]
            counter--;
        }
    }
    return closePos;
}


/**
 * Translates boopa-dee-bappa-dee to ascii
 * @param   {string}           string      Boopa-dee-bappa-dee commands which should be translated.
 * @returns {Promise<string>}              String of ASCII characters, decoded from boopa-dee-bappa-dee commands.
 */
function decode (string) {

    return new Promise ((resolve, reject) => {

        // input validation (is boopa-dee-bappa-dee?)
        try {
            validate(string);
        } catch (error) {
            reject(error);
        }


        const input = string.split(" ");  // build an array of commands from string
        var cursor = 0;                   // points to position in input array (to current command)
        var data = [];                    // data store
        var pointer = 0;                  // points to position in data store
        var output = "";                  // decoded string

        // loop through input untill cursor points to the end
        while (cursor < input.length) {

            const command = input[cursor];

            switch (command) {
                case 'bappadee':    // equals brainfuck command >
                    pointer++;
                    break;
                case 'boo':         // equals brainfuck command <
                    if (pointer > 0) { pointer--; }
                    break;
                case 'boopa':       // equals brainfuck command +
                    data[pointer] = data[pointer] || 0;
                    data[pointer]++;
                    break;
                case 'bappa':       // equals brainfuck command -
                    data[pointer] = data[pointer] || 0;
                    data[pointer]--;
                    break;
                case 'dee':         // equals brainfuck command .
                    output += String.fromCharCode(data[pointer]);
                    break;
                case 'boopadee':    // equals brainfuck command [
                    data[pointer] = data[pointer] || 0;
                    if (data[pointer] === 0) { // if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the matching baa (]) command
                        var closingBracket = findMatchingClosingBracket(input, cursor);
                        cursor = closingBracket;
                    }
                    break;
                case 'baa':         // equals brainfuck command ]
                    data[pointer] = data[pointer] || 0;
                    if (data[pointer] !== 0) { // if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the matching boopadee ([) command
                        var openingBracket = findMatchingOpeningBracket(input, cursor);
                        cursor = openingBracket;
                    }
                    break;
                default:
                    throw ("bad syntax! " + command + " is not a valid command");
            }
            cursor++;
        }

        resolve(output);

    });
}

/**
 * Validates a boopa-dee-bappa-dee string.
 * @param   {string}   string  Source code to validate.
 * @returns {boolean}          Indicating whether source code is valid or not.
 */
function validate(string) {

    console.log(string);

    // check if brackets are balanced
    if (string.match(/(boopadee)/g).length !== string.match(/(baa)/g).length) {
        throw new Error('source code is not valid: brackes (boopadee and baa) are unbalanced!');
    }

    // check if string only contains valid commands
    if (string.match(/^(bappadee|boo|boopa|bappa|dee|boopadee|baa| )+$/)) {
        return true; // source code is valid
    } else {

        // check if string contains beepee command, to throw an more detailed error message
        if (string.match(/boopabappa/)) {
            throw new Error('source code is not valid: this translator does not support beepee command');
        } else {
            throw new Error('source code is not valid!');
        }
    }
}

module.exports = {
    decode,
    validate,
    findMatchingOpeningBracket,
    findMatchingClosingBracket,
};
