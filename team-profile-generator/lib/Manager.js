const Employee = require('./Employee')

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return ` <div class="myteam">
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
        <div type="text" class="status-account">GitHub:<span></span>${this.officeNumber}</div>`;
    }
}

module.exports = Manager;
