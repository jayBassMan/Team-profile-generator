const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return  ` <div class="myteam">
            <h1>My Team</h1>
        </div>
    </header>
    <div class="container-wraper">
    <div class="container">
        <h1 class="name">
            Name<br>${this.name}
            badges
        </h1>
        <div type="text" class="email"><span>ID:</span>${this.id}</div>
        <div type="text" class="office-number"><span>Email:<span>${this.email}</span></div>
        <div type="text" class="status-account">GitHub:<span></span>${this.school}</div>
        </div>`;
    }

}

module.exports = Intern;