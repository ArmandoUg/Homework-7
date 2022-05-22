// TODO: Include packages needed for this application
const inq = require(`inquirer`);
const fs = require(`fs`);
const genMarkdown = require(`./utils/generateMarkdown`);
// TODO: Create an array of questions for user input
const questions = [
    {
    type : `input`,
    name : `title`,
    message: `What is the title of your project?`,
},
{
    type : `input`,
    name : `description`,
    message : `What would be your description of your project?`,
},
{
    type : `input`,
    name : `installation`,
    message : `How would you install your project for user usage?`,
},
{
    type : `input`,
    name : `usage`,
    message : `How does a user operate your project?`,
},
{
    type : `list`,
    name : `license`,
    message : `Which licenses were used and should be included?`,
    choices : [`Apache`,`BSD`,`GNU`, `MIT`, `Mozilla Public License`]
},
{
   type : `input`,
   name : `Github`,
   message : `What is your github link for user to contact you?`, 
},
{
    type : `input`,
    name : `Email`,
    message : `What is an email for the user to contact you?`,
},
{
    type : `input`,
    name : `deployed link`,
    message : `What is the url for your project?`,
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(`./README.md`, genMarkdown(data))
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
