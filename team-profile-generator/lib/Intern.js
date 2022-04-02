const Employee = require('./Employee');
const fs = require('fs');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){ console.log('This is an intern')}
//         return inquirer
//           .prompt([
//             {
//               type: "input",
//               name: "name",
//               message: "What is your name?",
//             },
//             {
//               type: "input",
//               name: "id",
//               message: "What is your id?",
//             },
//             {
//               type: "input",
//               name: "email",
//               message: "What is your email?",
//             },
//             {
//               type: "input",
//               name: "school",
//               message: "What school did you attend?",
//             },
//           ])
//           .then((res) => {
//             fs.appendFile(
//               "teamPage.html",
//               `
//     <div class="container">
//         <h1 class="name">${res.name}</h1>
//             badges
//         </h1>
//         <div type="text" class="id">ID:<span>${res.id}</span></div>
//         <div type="text" class="email-number">Email:<span>${res.email}</span></div>
//         <div type="text" class="office-numbert">GitHub:<span>${res.school}</span></div>
//     </div>
//     </div>
    
//     <script src="./script.js"></script>
// </body>
// </html>`,
//               (err) => {
//                 err
//                   ? console.error(err)
//                   : console.log("you added an Intern to your html page.");
//                 addToTeam();
//               }
//             );
//           });
//     }

}

module.exports = Intern;