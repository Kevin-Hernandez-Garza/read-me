// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title for your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title?');
                    return false;
                }
            }
        },

        {
            type: 'input', 
            name: 'name',
            message: 'What is your name?'
        },

        {
            type:'input',
            name: 'github',
            message: 'What is you GitHub username? (Required)',
            validate: userName => {
                if(userName) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message:'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'description',
            message: 'Provide detailed description of your project? (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please provide some description!');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to provide information about installation?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide directions on the installation process:',
            when: ({ confirmInstallation}) => {
                if(confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 

        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use: (Required)',
            validate: usageIns => {
                if(usageIns) {
                    return true;
                } else {
                    console.log('Please provide usage instructions!');
                    return false;
                }
            }
        }, 

        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for you project? (Required)',
            choices: ['MIT', 'Apache', 'Mozilla', 'GNU', 'No License']
        },


        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Was this project created solely by you?',
            default: true

        }, 

        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide those sources here:',
            when: ({confirmContribution}) => {
                if(confirmContribution) {
                    return false;
                } else {
                    return true;
                }
            }
        }
])      
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     init();
// }

// TODO: Create a function to initialize app
function init() {
    // calling questions function
    questions()


    // creating  to create README file 
    .then(data => {
        fs.writeFile('README.md', generateMarkdown(data), err => {
            if(err) throw err;

            console.log('File was created successfully!');
        })
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();

// calling questions function
// questions()


