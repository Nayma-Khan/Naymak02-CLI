#!usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
// You can add any random number here

console.log("Welcome to number Guessing Game");


const answers = await inquirer.prompt(
    [
        {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
    }

]
 );

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number")
} else {
    console.log("you guessed the wrong number");
}
// This is the if else condition statement