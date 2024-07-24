#! /usr/bin/env node
//import inquirer from "inquirer";
import("inquirer");
import inquirer from "inquirer";
import { sum, subtraction, multiplication, division } from "./operations.js";

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
  sum(questions.num1, questions.num2);
} else if (questions.operator == "-") {
  console.log("This is subtraction");
  subtraction(questions.num1, questions.num2);
} else if (questions.operator == "*") {
  console.log("This is multiplication");
  multiplication(questions.num1, questions.num2);
} else questions.operators == "/";
console.log("This is Division");
division(questions.num1, questions.num2);
