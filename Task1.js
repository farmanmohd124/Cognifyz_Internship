const readline = require('readline');

// Define the range for the random number
const MIN = 1;
const MAX = 10;

// Generate a random number between MIN and MAX
const numberToGuess = MIN + Math.floor(Math.random() * (MAX - MIN + 1));

// Set the number of attempts
const ATTEMPTS = 3;
let attemptsLeft = ATTEMPTS;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to the Guessing Game!');
console.log(`Try to guess the number between ${MIN} and ${MAX}. You have ${ATTEMPTS} attempts.`);

function makeGuess() {
    rl.question('Enter your guess number: ', (input) => {
        const guess = parseInt(input, 10);

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            makeGuess();
            return;
        }

        if (guess === numberToGuess) {
            console.log("Congratulations! You guessed the number correctly!");
            rl.close();
            return;
        } else if (guess < numberToGuess) {
            console.log("Too low. Try again!");
        } else {
            console.log("Too high. Try again!");
        }

        attemptsLeft--;
        if (attemptsLeft > 0) {
            console.log(`You have ${attemptsLeft} attempts left.`);
            makeGuess();
        } else {
            console.log(`Sorry, you've used all your attempts. The correct number was ${numberToGuess}.`);
            rl.close();
        }
    });
}

makeGuess();
