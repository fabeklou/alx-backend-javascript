/**
 * Displays a message to the standard output.
 *
 * @param {string} strArg - The message to be displayed.
 */
const displayMessage = (strArg) => {
  process.stdout.write(`${strArg}\n`);
};

module.exports = displayMessage;
