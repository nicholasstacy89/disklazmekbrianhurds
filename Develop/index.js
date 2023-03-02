// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: 'Please provide a table of contents for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Please provide the link to your GitHub repository.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },



];

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const readme = `# ${answers.title}
        ## Description
        ${answers.description}
        ## Table of Contents
        ${answers.tableofcontents}  
        ## Installation
        ${answers.installation}
        ## Usage
        ${answers.usage}
        ## Contribution
        ${answers.contribution}
        ## Test
        ${answers.test}
        ## Questions/Contact
        If you have any questions, please contact me at ${answers.github} or visit my GitHub page at ${answers.repository}.
        You can also reach me by email at ${answers.email}.`;
        
        fs.writeFile('README.md', readme, (err) =>

        err ? console.log(err) : console.log('Success!') 
        );
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to incitialize app
init();
