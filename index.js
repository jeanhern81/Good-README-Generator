/*variables*/

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

/*Questions*/

function askQuestions () {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        }
    ])
}
