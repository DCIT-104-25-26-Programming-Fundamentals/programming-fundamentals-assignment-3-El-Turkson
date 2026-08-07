// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

function readMatrix(rows, cols, name) {
    const matrix = [];
    console.log(`\nEnter ${name} matrix:`);
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowInput.trim().split(' ').map(Number);
        while (row.length !== cols) {
            console.log(`Error: Please enter exactly ${cols} numbers.`);
            const newInput = readlineSync.question(`Enter row ${i + 1}: `);
            row = newInput.trim().split(' ').map(Number);
        }
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix, name) {
    console.log(`\n${name}:`);
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = '';
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += matrix[i][j].toString().padStart(5);
        }
        console.log(rowStr);
    }
}

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
    for (let j = 0; j < cols; j++) {
        transposed[j] = [];
        for (let i = 0; i < rows; i++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function main() {
    console.log('=== PART A: Transpose Matrix ===');
    const rowsA = parseInt(readlineSync.question('Enter number of rows: '));
    const colsA = parseInt(readlineSync.question('Enter number of columns: '));
    const matrixA = readMatrix(rowsA, colsA, '');
    printMatrix(matrixA, 'Original Matrix');
    const transposed = transposeMatrix(matrixA);
    printMatrix(transposed, 'Transposed Matrix');

    console.log('\n=== PART B: Add Two Matrices ===');
    const rowsB = parseInt(readlineSync.question('Enter number of rows: '));
    const colsB = parseInt(readlineSync.question('Enter number of columns: '));
    const matrixB = readMatrix(rowsB, colsB, 'first');
    const matrixC = readMatrix(rowsB, colsB, 'second');
    printMatrix(matrixB, 'First Matrix');
    printMatrix(matrixC, 'Second Matrix');
    const sumMatrix = addMatrices(matrixB, matrixC);
    printMatrix(sumMatrix, 'Sum Matrix');

    console.log('\n=== PART C: Multiply Two Matrices ===');
    const rowsM = parseInt(readlineSync.question('Enter rows for matrix A: '));
    const colsM = parseInt(readlineSync.question('Enter columns for matrix A: '));
    const rowsN = parseInt(readlineSync.question('Enter rows for matrix B: '));
    const colsN = parseInt(readlineSync.question('Enter columns for matrix B: '));
    if (colsM !== rowsN) {
        console.log('Error: Number of columns in A must equal number of rows in B');
        return;
    }
    const matrixM = readMatrix(rowsM, colsM, 'first');
    const matrixN = readMatrix(rowsN, colsN, 'second');
    printMatrix(matrixM, 'Matrix A');
    printMatrix(matrixN, 'Matrix B');
    const productMatrix = multiplyMatrices(matrixM, matrixN);
    printMatrix(productMatrix, 'Product Matrix');
}

main();