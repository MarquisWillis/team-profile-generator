// 1.) Include libraries to use in program
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateManager = require('./src/generateManager');
const generateEngineer = require('./src/generateEngineer');
const generateIntern = require('./src/generateIntern');

const generateHTML = require('./src/generateHTML');

const inquirer = require('inquirer');
const fs = require('fs');

// 2.) create prompt array for inquirer for each role
/* PSUEDO CODE (for inquirer)
    1. ask for role
    2. ask for name
    3. ask for id
    4. ask for email
    5. ask for fourth prompt (depending on role):
        - if Manager (1st prompt automatically), ask for officeNumber
        - if Engineer, ask for Github
        - if Intern, ask for School
    6. ask if you desire to add more team members or stop
        - if yes, loop thru instructions above all over again and add as many team members as you want
        - otherwise, generate html and css output in the dist folder
*/
const employeeArray = [];

const managerQuestions = [
    { type: "input", message: "What is the name?", name: "managerName" },
    { type: "input", message: "What is the id?", name: "managerId" },
    { type: "input", message: "What is the email?", name: "managerEmail" },
    { type: "input", message: "What is the office number?", name: "managerNumber" }
];

const engineerQuestions = [
    { type: "input", message: "What is the name?", name: "engineerName" },
    { type: "input", message: "What is the id?", name: "engineerId" },
    { type: "input", message: "What is the email?", name: "engineerEmail" },
    { type: "input", message: "What is the github?", name: "engineerGithub" }
];

const internQuestions = [
    { type: "input", message: "What is the name?", name: "internName" },
    { type: "input", message: "What is the id?", name: "internId" },
    { type: "input", message: "What is the email?", name: "internEmail" },
    { type: "input", message: "What is the school?", name: "internSchool" }
];

// 3.) link src helper files to generate team profile

function init() {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager
                (response.managerName,
                    response.managerId,
                    response.managerEmail,
                    response.managerNumber);

            employeeArray.push(manager);
            confirmNext();
        })
};

function confirmNext() {
    inquirer
        .prompt([{
            type: 'confirm',
            message: 'Do you want to continue to add employees to your team?',
            name: 'addMore'
        }])
        .then(response => {
            if (response.addMore === true) {
                addEmployee();
            } else {
                createHTML();
            }
        })
};

function addEmployee() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Do you wish to add an engineer or an intern?',
            choices: ["Engineer", "Intern"],
            name: 'addType'
        }])
        .then((response) => {
            if (response.addType === 'Engineer') {
                inquirer
                    .prompt(engineerQuestions)
                    .then(response => {
                        const engineer = new Engineer
                        (response.engineerName,
                            response.engineerId,
                            response.engineerEmail,
                            response.engineerNumber);
    
                    employeeArray.push(engineer);
                    confirmNext();
                })
                
            } else if (response.addType === 'Intern'){
                inquirer
                    .prompt(internQuestions)
                    .then(response => {
                        const intern = new Intern
                        (response.internName,
                            response.internId,
                            response.internEmail,
                            response.internNumber);
    
                    employeeArray.push(intern);
                    confirmNext();
                })
        }
    })
}

function createHTML() {
    console.log(employeeArray)

    let cards = ""

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            cards = cards + generateManager(employeeArray[i]);
        }
        else if (employeeArray[i].getRole() === "Engineer") {
            //same as manager card but for Enineer card
            cards = cards + generateEngineer(employeeArray[i]);
        } else {
            //same as manager card but for  intern card
            cards = cards + generateIntern(employeeArray[i]);
        }
    }
    fs.writeFileSync("./dist/team.html", generateHTML(cards));
}

init();