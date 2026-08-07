// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
//
// Write a JavaScript program that checks whether a given number is prime.
//
// A prime number is a whole number greater than 1 that has no divisors
// other than 1 and itself (e.g., 2, 3, 5, 7, 11, 13 ...).
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_01_prime_checker.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter a number: 7
//   7 is a prime number.
//
//   Enter a number: 10
//   10 is NOT a prime number.
//
//   Enter a number: 1
//   1 is NOT a prime number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement the logic inside a function (see scaffold below).
// - Numbers less than 2 are NOT prime — handle this inside the function.
// - The main() function must call isPrime() and print the result.
// - Use readlineSync.questionInt() to read integer input from the user.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================





const readlineSync = require('readline-sync');

/**
 * Checks if a given number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if prime, false otherwise.
 */
function isPrime(num) {
    // Numbers less than 2 are NOT prime
    if (num < 2) {
        return false;
    }
    
    // Check divisibility from 2 up to the square root of num
    // We only need to check up to sqrt(num) because if a number has a divisor
    // greater than sqrt(num), it must also have a divisor less than sqrt(num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so not prime
        }
    }
    
    return true; // No divisors found, so it's prime
}

/**
 * Main function to run the prime number checker program.
 * Gets user input, checks if it's prime, and displays the result.
 */
function main() {
    // Prompt the user for a number
    const number = readlineSync.questionInt('Enter a number: ');
    
    // Check if the number is prime
    const primeResult = isPrime(number);
    
    // Display the result
    if (primeResult) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

// Run the program
main();

