'use strict';

/**
 * Translates ascii to boopa-dee-bappa-dee
 * @param   {string}           string  ASCII string which should be translated.
 * @returns {Promise<string>}          String of boopa-dee-bappa-dee characters, encoded from ASCII characters.
 */
function encode (input) {

    return new Promise ((resolve, reject) => {

        var output = "";    // encoded string containing boopadee commands
        var lastAscii = 0;  // ascii code of character from last looping-round

        // loop through input string, and generate boopadee commands for each character
        for (var i = 0; i < input.length; i++) {

            var ascii = input.charCodeAt(i); // get ascii code from current char

            if (ascii > lastAscii) {
                var diff = ascii - lastAscii; // calculate difference from last characters ascii code to current characters ascii code. difference is required to calculate the boopadee commands which will be used for the current character.
                output += '+'.repeat(diff / 10) + '[>++++++++++<-]>' + '+'.repeat(diff % 10) + '.<'; // working with index 0 and 1 from data array: index 0 works as helper for managing how many times the loop should be processed and in index 1 the ascii codes are generated.
            } else if (ascii < lastAscii) {
                var diff = lastAscii - ascii; // see comments above
                output += '+'.repeat(diff / 10) + '[>----------<-]>' + '-'.repeat(diff % 10) + '.<'; // same as above but subtract difference instead of adding it to index 1
            } else if (ascii === lastAscii) {
                output += '>.<'; // ascii code already present at index 1, just move over and print it
            }

            lastAscii = ascii; // set current ascii code for next loop
        }

        resolve(output);

    });
}

module.exports = {
    encode,
};
