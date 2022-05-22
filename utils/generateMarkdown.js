// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case `Apache`:
      return `![GitHub all releases](https://img.shields.io/github/downloads/ArmandoUg/Homework-7/total?label=Apache&logo=Apache)`;
    case `BSD`:
      return `![License: BSD](https://img.shields.io/badge/License-Apache2.0-blue/total?logo=Apache)`;
    case `GNU`:
      return `![License : GNU](https://img.shields.io/badge/License-GNU-blue/total?logo=GNU)`;
    case `MIT`:
      return `![License : MIT](https://img.shields.io/badge/License-MIT-blue`;
      case `None`:
        return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license === `None`){
    return ``;
  } else {
    return ` [License](#License)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === `None`) {
    return ``
  } else {
    return `## License
    This Readme falls under the usage of the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} ${renderLicenseBadge(answers.license)}
## Table of Contents
- [Description](#Decription)
- [Installation](#Instructions)
- [Usage](#Usage)
- [Contributing](#Contributing)
- ${renderLicenseLink(answers.license)}
- [Tests](#Tests)
- [Deployed link](#Deployed-link)
- [Questions](#Questions)
## Description
${answers.description}
## Installation Instructions
${answers.installation}
## Usage
${answers.usage}
## Contributing
${answers.contributing}
${renderLicenseSection(answers.license)}
## Questions
Any questions? You can contact me at:
- [Github](https://github.com/${answers.Github})
- [Email](${answers.Email})
## Deployed Link
[deployed-link](${answers.deployedLink})`
    ;
}

module.exports = generateMarkdown;
