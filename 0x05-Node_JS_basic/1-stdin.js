/**
 * This module prompts the user to enter their name and displays it.
 * It uses the process.stdin and process.stdout streams to read
 * and write data.
 *
 * @module stdin
 */
const welcomeMessage = 'Welcome to Holberton School, what is your name?';
const goodbyeMessage = 'This important software is now closing';

console.log(welcomeMessage);

process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  if (userName !== null) {
    process.stdout.write(`Your name is: ${userName}`);
  }
});

process.stdin.on('close', () => {
  console.log(goodbyeMessage);
});
