// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

function displayMenu() {
    console.log('\n============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}

function getNumbers() {
    const num1 = parseFloat(readlineSync.question('Enter first number: '));
    const num2 = parseFloat(readlineSync.question('Enter second number: '));
    return { num1, num2 };
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return null;
    }
    return num1 / num2;
}

function modulus(num1, num2) {
    if (num2 === 0) {
        return null;
    }
    return num1 % num2;
}

function exponentiate(num1, num2) {
    return Math.pow(num1, num2);
}

function main() {
    let running = true;
    
    while (running) {
        displayMenu();
        const choice = readlineSync.question('Select an operation (1-7): ');
        
        switch (choice) {
            case '1':
                const { num1: a1, num2: a2 } = getNumbers();
                const sum = add(a1, a2);
                console.log(`Result: ${a1} + ${a2} = ${sum.toFixed(2)}`);
                break;
                
            case '2':
                const { num1: s1, num2: s2 } = getNumbers();
                const diff = subtract(s1, s2);
                console.log(`Result: ${s1} - ${s2} = ${diff.toFixed(2)}`);
                break;
                
            case '3':
                const { num1: m1, num2: m2 } = getNumbers();
                const product = multiply(m1, m2);
                console.log(`Result: ${m1} * ${m2} = ${product.toFixed(2)}`);
                break;
                
            case '4':
                const { num1: d1, num2: d2 } = getNumbers();
                const quotient = divide(d1, d2);
                if (quotient === null) {
                    console.log('Error: Cannot divide by zero.');
                } else {
                    console.log(`Result: ${d1} / ${d2} = ${quotient.toFixed(2)}`);
                }
                break;
                
            case '5':
                const { num1: mod1, num2: mod2 } = getNumbers();
                const remainder = modulus(mod1, mod2);
                if (remainder === null) {
                    console.log('Error: Cannot calculate modulus with zero.');
                } else {
                    console.log(`Result: ${mod1} % ${mod2} = ${remainder.toFixed(2)}`);
                }
                break;
                
            case '6':
                const { num1: e1, num2: e2 } = getNumbers();
                const power = exponentiate(e1, e2);
                console.log(`Result: ${e1} ** ${e2} = ${power.toFixed(2)}`);
                break;
                
            case '7':
                console.log('Goodbye!');
                running = false;
                break;
                
            default:
                console.log('Error: Invalid choice. Please select a number between 1 and 7.');
        }
    }
}

main();