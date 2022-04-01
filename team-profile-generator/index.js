
const inquirer = require("inquirer");
const fs = require("fs");
const { profile } = require("console");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const options = ['manager', 'engineer', 'intern']

function teamGenerator() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officenumber",
        message: "What is your office number?",
      },
    ])
    .then((response) => {
      fs.appendFile(
        "teamPage.html",
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Shadows+Into+Light&family=Ubuntu+Mono:wght@700&display=swap" rel="stylesheet">
    <title>Team Profile Generator</title>
</head>

<body>
        <header>
        <div class="myteam">
            <h1>My Team</h1>
        </div>
    </header>
    <div class="container-wraper">
    <div class="container">
        <h1 class="name">
            ${response.name}</h1>
            badges
        </h1>
        <div type="text" class="id">ID:<span>${response.id}</span></div>
        <div type="text" class="email-number">Email:<span>${response.email}</span></div>
        <div type="text" class="office-numbert">GitHub:<span>${response.officenumber}</span></div>
    </div>
    </div>
    
    <script src="./script.js"></script>
</body>
</html>`,
        (err) => {
          err ? console.error(err) : console.log("html is started.");
          addAnotherEmployee();
        }
      );
    });
}

const addAnotherEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add another member to your team?",
        name: "add",
      },
    ])
    .then((response) => {
      if (response.add === true) {
        //move on to questions for what the employee role is
        teamRole()
      } else {
        //end the program
        endProgram();
      }
    });
};

const teamRole = () => {
    return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What is team member status?",
        choices: options,
      },
    ])
    .then((response) => {
  if (response.options === "engineer") {
    //call the manager function here
    engineer;
  } else if (options.engineer === "intern") {
    //call the engineer function here
    intern;
  } else {
    //ask if wants to add another employee function here
    addAnotherEmployee();
  }
    });
  };

const endProgram = () => {
     fs.appendFile('teamPage.html', ` 
          </div>
        </body>
        </html>
    `, (err) => {
        err ? console.error(err) : console.log('Your have completed your team.');
    }
    )}

    teamGenerator();
