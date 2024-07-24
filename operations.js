"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiplication = exports.subtraction = exports.sum = void 0;
function sum(num1, num2) {
    const result = num1 + num2;
    console.log(`sum of ${num1} and ${num2} = ${result}`);
}
exports.sum = sum;
function subtraction(num1, num2) {
    const result = num1 - num2;
    console.log(`subtraction of ${num1} and ${num2} = ${result}`);
}
exports.subtraction = subtraction;
function multiplication(num1, num2) {
    const result = num1 * num2;
    console.log(`multiplication of ${num1} and ${num2} = ${result}`);
}
exports.multiplication = multiplication;
function division(num1, num2) {
    const result = num1 / num2;
    console.log(`division of ${num1} and ${num2} = ${result}`);
}
exports.division = division;
