//variables//

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("markdown-utils");
const api = require("github-api");


//Questions//

function askQuestions() {
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
        },
        {
            type: "input",
            message: "What is the name of your project?",
            name: "project"
        },
        {
            type: "input",
            message: "Provide URL link for your project.",
            name: "url"
        },
        {
            type: "input",
            message: "Description of your project",
            name: "description"
        },
        {
            type: "input",
            message: "What packages need to be installed in order for your project to run?",
            name: "installation"
        },
        {
            type: "input",
            message: "For what purpose can someone use your project?",
            name: "usage"
        },
        {
            type: "checkbox",
            message: "What kind of license would you like to use?",
            name: "license",
            choices: [
                "MIT", 
                "APACHE", 
                "GPL", 
                "BSD"]
        },
        {
            type: "input",
            message: "Aside from yourself, are there any other contributors?",
            name: "contributors"
        },
        {
            type: "input",
            message: "To run a test, what command is needed?",
            name: "test"
        }
    ]);
};

//This function will generage the answers for the README file//
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
        if (err) {
            throw err;
        }
        console.log("You just made a README file!");
    });
};

async function init() {
    try {
        const answers = await askQuestions();
        generateMarkdown(answers);
        writetoFile("README.md", generateMarkdown(answers));

        
    } catch (err) {
        console.log(err);
    }
};

init();