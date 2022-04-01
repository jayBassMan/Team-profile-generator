
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
        name: options,
        message: "What is your status?",
      },
    ])
    
    // .then((response) => {
    //   fs.writeFile(
    //     "README.md"

    if(options.manager === true){
      const message = options[0]
        return message
    } 
    else if (options.engineer === true){
      const message = options[1]
      return message
    }
    else if (options.intern === true){
      const message = options[2]
      return message
    }
  
}

    //   (err) => (err ? console.error(err) : console.log("README.md file created"))
    //   );
  
    // });


    
    //     const = EmployeesStatus = () => { 
    //       return
    //       inquirer
    // .prompt([
    //   {
    //     type: "input",
    //     status: options
    //     message: "What is your status?",
    //   }
      
    // ]);
  
    // if(manager){
    //   return manager.getRole()
    // } else if 
    // (engineer){
    //   return engineer.getRole()
    // } else if 
    // (intern) {
    //   return intern.getRole(), intern.getSchool()
    // }}
    //   }

    // ])


// const employee = () => {

//   const engineer = () => {

//   }
// }

//      .then((info) => {
//       fs.writeFile("./dist/html",`# ${info.name}`, `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="../dist/style.css">
//     <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Shadows+Into+Light&family=Ubuntu+Mono:wght@700&display=swap" rel="stylesheet">
//     <title>Team Profile Generator</title>
// </head>

// <body>
//         <header>
//         <div class="myteam">
//             <h1>My Team</h1>
//         </div>
//     </header>
//     <div class="container-wraper">
//     <div class="container">
//         <h1 class="name">
//             Name<br>
//             badges
//         </h1>
//         <div type="text" class="email">ID:<span>${info.id}</span></div>
//         <div type="text" class="office-number">Email:<span>${info.email}</span></div>
//         <div type="text" class="status-account"><span>${info.EmployeesStatus()}</span></div>
//     </div>
//     </div>


//     <script src="./script.js"></script>
// </body>

// </html>`,

//         (err) => (err ? console.error(err) : console.log("README.md file created"))
//       );
//     });
// }

// teamGenerator()







// // -------------------class code ------------------------------------const choresDone = true;

// // Promise
// const teamEngineer = new Promise((resolve, reject) => {
//   // Check for a desireable outcome, if so resolve the promise
//   if ('manager') {
//     const reward = 
//     {
//       name: 'manager',
//       desired: true,
//     }
//     // Otherwise reject the promise
// } 
//   else  if ('engineer'){
//     const reward = 
//     {
//       name: 'engineer',
//       desired: true,
//     } 
// }
//     else  if ('intern'){
//           const reward = 
//     {
//       name: 'engineer',
//       desired: true,
//     } 
// }
//   else if

//     };
//     resolve(type);
//     const issue = new Error('Child did not finish chores as promised');
//     reject(issue);
//   }

//   resolve(type);
// });

// // Another promise to call only if we get the reward
// const playGames = (type) => {
//   const message = `<div type="text" class="status-account">GitHub:<span>${type.name}</span></div>`;
//   return Promise.resolve(message);
// };

// willGetSwitch
//   .then(playGames)
//   .then((resolved) => console.log(resolved))
//   .catch((err) => console.error(err));
