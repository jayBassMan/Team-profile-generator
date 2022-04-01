
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
        type: "list",
        name: "options",
        message: "What is your status?",
        choices: options,
      },
    ])
    .then((response) => {
      fs.writeFile(
        "yo.html",
        `
      <html>
      `,
        (err) => {
          err ? console.error(err) : console.log("html is started.");
          addAnotherEmployee();

          if (response.options === "mangager") {
            //call the manager function here
            manager
          } else if (options.engineer === "engineer") {
            //call the engineer function here
            engineer
          } else if (options.intern === "intern") {
            //call the intern function here
            intern
          }
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
        name: "addtoteam",
      },
    ])
    .then((response) => {
      if (response.addtoteam === true) {
        //move on to questions for what the employee role is
      } else {
        //end the program
        endProgram();
      }
    });
};

const endProgram = () => {
 .then(response)
}