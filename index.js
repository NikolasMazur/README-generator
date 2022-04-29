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
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter application description.",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for project to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please describe the installation process.",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter steps for installation to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe instructions and examples for use.",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please describe using this application to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "Please enter tests that a user can try to test the application with.",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter potential user tests to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "credits",
            message: "Please list project collaborators.",
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter credits for project to continue');
                    return false;
                }
            }
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
            name: "year",
            message: "Please enter year",
            validate: yearInput => {
                if (yearInput) {
                    return true;
                } else {
                    console.log('Please enter current year to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "Please enter your name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter GitHub username.",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username to continue');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter an email for users to reach you at.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address to continue');
                    return false;
                }
            }
        }
    ])
    
    // Writes README file
    .then((answers) => {
        const markdownPage = generateMarkdown(answers);
        fs.writeFile("./testREADME.md", markdownPage, (err) =>
            err ? console.log(err) : console.log("Successfully created index.html!")
        );
      });
};

// Creates a function to initialize app
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
