const Employee = require('./Employee');
const fs = require('fs');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(){
        console.log('this is an engineer')}
        return  
}

module.exports = Engineer;