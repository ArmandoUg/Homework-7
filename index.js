// TODO: Include packages needed for this application
const inq = require(`inquirer`);
const fs = require(`fs`);
const genMarkdown = require(`./utils/generateMarkdown`);
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./README.md`, `# ${fileName.title}`)
}

// TODO: Create a function to initialize app
function init() {
    inq
    .prompt(questions)
    .then((data) => {
        writeToFile(data);
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
