// TODO: Include packages needed for this application
const inq = require(`inquirer`);
const fs = require(`fs`);
const genMarkdown = require(`./utils/generateMarkdown`);
// TODO: Create an array of questions for user input
const questions = [
    {
    type : `input`,
    name : `title`,
    message: `What is the title of your project`,
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./README.md`, `
    # ${fileName.title}
    ## Description
    ${data.description}
    ## Installation Instructions
    ${data.installation}
    ## Deployed Link`)
}

// TODO: Create a function to initialize app
function init() {
    inq
    .prompt(questions)
    .then((data) => {
        writeToFile(data.title);
        console.log(`Successfully created README.md`)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error(`Prompts were not able to be rendered in current environment!`)
        }else {
            console.error(`Something went wrong!`,error)
        }
    })
}

// Function call to initialize app
init();
