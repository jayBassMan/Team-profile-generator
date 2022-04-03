
const inquirer = require('inquirer')
const fs = require("fs");
const { profile } = require("console");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const options = ['engineer', 'intern']

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
    .then((res) => {
      const manager = new Manager(res.name, res.id, res.email, res.officenumber)

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
    <div class="container-wrapper">
    <div class="container">
        <h1 class="name">${manager.name}</h1>
            badges
        </h1>
        <div type="text" class="id">ID:<span>${res.id}</span></div>
        <div type="text" class="email">Email:<span><a href="${manager.email}">${manager.email}</a></span></div>
        <div type="text" class="office-number">Office Number:<span>${manager.officeNumber}</span></div>officenumber}</span></div>
    </div>`,
        (err) => {
          err
            ? console.error(err)
            : console.log("your html page has been started.");
          addToTeam();
        }
      );
    });
}

const addToTeam = () => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add another member to your team?",
        name: "add",
      },
    ])
    .then((response) => {
      if (response.add) {
        inquirer
          .prompt([
            //move on to questions for what the employee role is
            {
              type: "list",
              message: "would you like to add an engineer or an intern",
              name: "pick",
              choices: ["engineer", "intern"],
            },
          ])
          .then((res_2) => {
            if (res_2.pick === 'engineer') {
              teamRoleEngineer();
            } else if (res_2.pick === 'intern') {
              teamRoleIntern();
            } else {
              endProgram();
            }
          }); 
      }
    });
  }

const teamRoleEngineer = () => {
  //call engineer class
  // employee(engineer.getRole());
 
  return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is Engineers name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is Engineers id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is Engineers email?",
            },
            {
              type: "input",
              name: "github",
              message: "What is Engineers github account?",
            },
          ])
          .then((res) => {
             var eng = new Engineer(res.name, res.id, res.email, res.github);
            fs.appendFile(
              "teamPage.html",
              `
    <div class="container">
        <h1 class="name">${eng.name}</h1>
            badges
        </h1>
        <div type="text" class="id">ID:<span>${eng.id}</span></div>
        <div type="text" class="email">Email:<span><a href="${eng.email}">${eng.email}</a></span></div>
        <div type="text" class="office-number">GitHub:<span><a href="${eng.github}">${eng.github}</a></span></div>
    </div>
    </div>
    
    <script src="./script.js"></script>
</body>
</html>`,
              (err) => {
                err
                  ? console.error(err)
                  : console.log("you added an Engineer to your html page.");
                addToTeam();
              }
            );
   });
};

const teamRoleIntern = () => {
  //Call Intern class
  // employee(intern.getRole());
  return inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is Interns name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is Interns id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is Interns email?",
            },
            {
              type: "input",
              name: "school",
              message: "What school did Intern attend?",
            },
          ])
          .then((res) => {
            const intern = new Intern(res.name, res.id, res.email, res.school)
            fs.appendFile(
              "teamPage.html",
              `
    <div class="container">
        <h1 class="name">${intern.name}</h1>
            badges
        </h1>
        <div type="text" class="id">ID:<span>${intern.id}</span></div>
        <div type="text" class="email">Email:<span><a href="${intern.email}">${intern.email}</a></span></div>
        <div type="text" class="office-number">School:<span>${intern.school}</span></div>
    </div>
    </div>
    
    <script src="./script.js"></script>
</body>
</html>`,
              (err) => {
                err
                  ? console.error(err)
                  : console.log("you added an Intern to your html page.");
                addToTeam();
              }
            );
   });
};
  

const endProgram = () => {
     fs.appendFile('teamPage.html', ` 
          </div>
        </body>
        </html>
    `, (err) => {
        err ? console.error(err) : console.log('Html ended Your have completed your team.');
    }
    )}

    teamGenerator();
