#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 6 + 1);
// You can add any random number here
console.log("Welcome to number Guessing Game");
const answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
}
else {
    console.log("you guessed the wrong number");
}
// This is the if else condition statement
