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
        

}

module.exports = Intern;