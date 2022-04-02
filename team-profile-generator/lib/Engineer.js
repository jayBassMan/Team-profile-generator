const Employee = require('./Employee');
const fs = require('fs');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        console.log('this is an engineer')}
//         return  inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your name?",
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "What is your id?",
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is your email?",
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "What is your gitHub account?",
//       },
//     ])
//     .then((res) => {
//       fs.appendFile(
//         "teamPage.html",
//         `
//     <div class="container">
//         <h1 class="name">${res.name}</h1>
//             badges
//         </h1>
//         <div type="text" class="id">ID:<span>${res.id}</span></div>
//         <div type="text" class="email-number">Email:<span>${res.email}</span></div>
//         <div type="text" class="office-numbert">GitHub:<span>${res.github}</span></div>
//     </div>
//     </div>
    
//     <script src="./script.js"></script>
// </body>
// </html>`,
//         (err) => {
//           err ? console.error(err) : console.log("you added an Engineer to your html page.");
//           addToTeam();
//         }
//       );
//     });      
//     }
}

module.exports = Engineer;