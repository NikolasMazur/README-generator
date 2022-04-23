// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter application description."
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe instructions and examples for use.",
        },
        {
            type: "input",
            name: "test",
            message: "Please enter tests that a user can try to test the application with.",
        },
        {
            type: "input",
            name: "credits",
            message: "Please list project collaborators.",
        },
        {
            type: "checkbox",
            name: "license",
            choices: [
                "MIT",
                "APACHE (2.0)",
                "GPL (3.0)",
                "BSD (3)",
                "MPL (2.0)",
                "CDDL (1.0)",
                "EPL (2.0)",
                "None"
            ],
            message: "Please select a license.",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter GitHub username.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an email for users to reach you at.",
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((response) => generateMarkdown(response))
        .then((rtf) => {
            writeToFile(rtf);
            console.log("README.md successfully generated.");
        });
}

// Function call to initialize app
init();
