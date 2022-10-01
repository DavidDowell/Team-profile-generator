const { CustomConsole } = require('@jest/console');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const generateHTML = require('./dist/generateHTML');

// const outputPath = path.join(OUTPUT_DIR, "index.html");

//Empty array to hold team information
const teamInfo = [];

inquirer
    .prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'What position does this employee hold? (If no more employees, select DONE)',
            choices: ['Manager', 'Engineer', 'Intern', 'DONE']
        }
    ])
    .then((choice) => { 
        switch (choice.employee) {
            case "Manager":
                createManager();
                break;
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            case "DONE":
                finishHTML();
        }
    });

    const createManager = () => {
        console.clear()
        console.log('<<<<<<<< Manager >>>>>>>>>')

        inquirer   
            .prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the manager's employee ID?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email address?"
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is the manager's office number?"
            }
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerID,
                answers.managerEmail,
                answers.managerOffice
            );
            teamInfo.push(manager);
            //go back to beginning prompt
        })
    }

    const createEngineer = () => {
        console.clear()
        console.log("<<<<<<< Engineer >>>>>>>>>")

        inquirer
            .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is this engineer's name?"
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is this engineer's ID number?"
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is this engineer's email address?"
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is this engineer's GitHub username?"
            }
        ])
        .then((answers) => {
            const engineer = new Enineer(
                answers.engineerName,
                answers.engineerID,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamInfo.push(engineer);
            //return to beginning prompt
        })
    }

    const createIntern = () => {
        console.clear()
        console.log("<<<<<<<<< Intern >>>>>>>>>>>")

        inquirer
            .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is this intern's name?"
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is this intern's ID number?"
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is this intern's email address?"
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Where did this intern go to school?"
            }
        ])
        .then((answers) => {
            const intern = new Intern(
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool
            );
            teamInfo.push(intern);
            //return to beginning prompt
        })

    }

    //DONE is selected and no more employees are entered
    const finishHTML = () => {
        fs.writeFileSync(outputHTML, generateHTML(teamInfo), "utf-8")
    }