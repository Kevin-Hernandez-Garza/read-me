// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // const getBadge = `![Badge](https://img.shields.io/badge/license-${license}-blueviolet/)`;

  // if (license == 'No License') {
  //   return "No License";
  // } else {
  //   return getBadge;
  // }

  let getBadge;

  if (license == 'MIT') {
    badgeChosen = "![badge](https://img.shields.io/badge/license-MIT-blueviolet/)";
  }
  if (license == 'Apache') {
    badgeChosen = "![badge](https://img.shields.io/badge/license-Apache-blueviolet/)";
  }
  if (license == 'Mozilla') {
    badgeChosen = "![badge](https://img.shields.io/badge/license-Mozilla-blueviolet/)";
  }
  if (license == 'GNU') {
    badgeChosen = "![badge](https://img.shields.io/badge/license-GNU-blueviolet/)";
  }
  if (license == 'No License') {
    badgeChosen = "No Badges 🥲 ";
  }
  return badgeChosen;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseChosen;

  if (license == 'MIT') {
    licenseChosen = "[License: MIT](https://choosealicense.com/licenses/mit/)";
  }
  if (license == 'Apache') {
    licenseChosen = "[License: Apache](https://choosealicense.com/licenses/apache-2.0/)";
  }
  if (license == 'Mozilla') {
    licenseChosen = "[License: Mozilla](https://choosealicense.com/licenses/mpl-2.0/)";
  }
  if (license == 'GNU') {
    licenseChosen = "[License: GNU](https://choosealicense.com/licenses/gpl-3.0/)";
  }
  if (license == 'No License') {
    licenseChosen = "No License 🚓 ";
  }
  return licenseChosen;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License 
  
  #### License Link 🎫 
  - ${renderLicenseLink(data.license)}
  
  #### Badge 🏆
  <br/>
  ${renderLicenseBadge(data.license)}
  
  ## Description 📖
  - ${data.description}

  ## Table of Contents 

  - [Installation 🛠](#installation)
  - [Usage 🎮](#usage)
  - [Contribution 👾](#contribution) 
  - [Contact 📟](#contact-me/questions)
        
  ## Installation
  - ${data.installation}
  ## Usage
  - ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Contact Me/Questions
  
  - GitHub: [${data.github}](https://github.com/${data.github})

  - Email: [${data.email}](${data.email})


  ### © Created with 💜 by ${data.name}!
`;
}

module.exports = generateMarkdown;
