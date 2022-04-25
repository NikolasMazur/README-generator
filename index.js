// Packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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
                "APACHE",
                "GPL",
                "BSD",
                "MPL",
                "CDDL",
                "EPL",
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
    // Writes README file
    .then((answers) => {
        const markdownPage = generateMarkdown(answers);
    
        fs.writeFile("./testREADME.md", markdownPage,
            function(err) {
                if (err) throw err;
                console.log("README successfully generated.")
            }
        );
      });
};

// Creates a function to initialize app
function init() {
    questions()
        .then((response) => generateMarkdown(response))
        .then((rtf) => {
            writeFile(rtf);
            console.log("README.md successfully generated.");
        });
}

// Function call to initialize app
init();
