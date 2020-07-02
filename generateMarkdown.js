function generateMarkdown(data) {
    const avatar = `https://github.com/${data.username}.png?size=60`;
    const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

    return `
    # ${data.project} 
    
    ## Description
        ${data.description}

    ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Tests](#tests)
        - [Contributors](#contributors)

    ## Installation
    Packages required to run this program are: ${data.installation}
    
    ## Usage
    Examples of how to use this program: ${data.usage}

    ## License
    ${data.license}

    ## Tests
    To test, run the following command: ${data.tests}

    ## Contributors
    ${data.contributors}

    ## Contact
    \n![Badge](${gitHub}) 
    \n![Profile Image](${avatar})
    \nView the project in GitHub at: ${data.url}.`

}
module.exports = generateMarkdown;