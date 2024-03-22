#! /usr/bin/env node 
import inquirer from "inquirer";
const result = await inquirer.prompt([{
        name: "userChoice",
        type: "number",
        message: "Enter a number to be guess in between 1 to 100",
    }]);
const randomNumber = Math.floor(Math.random() * 100 + 1);
if (result.userChoice === randomNumber) {
    console.log("congratulations !! you have made a perfect guess..!!");
}
else {
    console.log("bad luck!.. try again :)");
    console.log("the computer generated number is ", `${randomNumber}`);
}
