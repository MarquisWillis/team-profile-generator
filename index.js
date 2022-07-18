// 1.) Include libraries to use in program
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
const nextArray = ['Engineer', 'Intern', 'Neither'];
const roleQuestionArray = [{type: 'list', message: 'Would you like to add an engineer, and intern, or neither?', choices: nextArray, name: "roleName"}];

const managerQuestions = [
    {type: "input", message: "What is the name?", name: "managerName"}, 
    {type: "input", message: "What is the id?", name: "managerId"},
    {type: "input", message: "What is the email?", name: "managerEmail"},
    {type: "input", message: "What is the office number?", name: "managerNumber"}
];

const engineerQuestions = [
    {type: "input", message: "What is the name?", name: "engineerName"}, 
    {type: "input", message: "What is the id?", name: "engineerId"},
    {type: "input", message: "What is the email?", name: "engineerEmail"},
    {type: "input", message: "What is the office number?", name: "engineerNumber"}
];

const internQuestions = [
    {type: "input", message: "What is the name?", name: "internName"}, 
    {type: "input", message: "What is the id?", name: "internId"},
    {type: "input", message: "What is the email?", name: "internEmail"},
    {type: "input", message: "What is the office number?", name: "internNumber"}
];

// 3.) link src helper files to generate team profile