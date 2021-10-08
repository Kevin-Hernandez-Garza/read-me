// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
            type:'input',
            name: 'github',
            message: 'What is you GitHub username?'
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
            choices: ['MIT', 'Apache', 'Mozilla', 'GNU', 'None']
        },


        {
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Was this project created solely by you or with help of outside sources?',
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
        },

        {
            type: 'input',
            name: 'badges',
            message: 'Please provide any badges you would be to enter:'
        }, 
])};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data => {

    });
}

// TODO: Create a function to initialize app
function init() {
 questions();
}


// Function call to initialize app
init();

// calling questions function
// questions()
