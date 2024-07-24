#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import inquirer from "inquirer";
import("inquirer");
const operations_1 = require("./operations");
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operator",
        message: "Select your operator",
        choices: ["+", "-", "*", "/"],
    },
]);
console.log(questions);
if (questions.operator == "+") {
    console.log("This is sum");
    (0, operations_1.sum)(questions.num1, questions.num2);
}
else if (questions.operator == "-") {
    console.log("This is subtraction");
    (0, operations_1.subtraction)(questions.num1, questions.num2);
}
else if (questions.operator == "*") {
    console.log("This is multiplication");
    (0, operations_1.multiplication)(questions.num1, questions.num2);
}
else
    questions.operators == "/";
console.log("This is Division");
(0, operations_1.division)(questions.num1, questions.num2);
