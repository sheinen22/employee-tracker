const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


const departments = ["Corporate", "Sales", "Management", "Field"]

const jobTitles = ["President", 'Vice President', 'Operations Manager', 'Sales Rep', 'Sales Manager', 'Logistics Coordinator', 'Field Foreman', 'EHS', 'Fleet Manager', "Technician", 'Trainer']

const employees = ['Wade', 'Matt', 'Sam', 'Al', 'Niki', 'Danny', 'John', 'Jason', 'Juan', 'Stephen', 'Lalo', 'Adrian']

//everything needs a separate definition.  literally everything

const options = [
    {
      type: 'list',
      message: "What would you like to do?",
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
      name: 'options',
   },
]; 

const addDeptName = [
    {
        message: "What is the new department name?",
        name: "addDeptName"
    },
];

const addJobTitle = [
    {
      message: 'What is the name of the role?',
      name: 'addJobTitle',
    },
    {
        message: 'What is the salary of the role?',
        name: 'newSalary',
    },
    {
        type: 'list',
        message: "What department does the role belong to?",
        choices: departments,
        name: 'roleDepartment',
     },
    
]; 

const addEmployee = [
    {
      message: 'What is the employees first name?',
      name: 'empFirstName',
    },
    {
      message: 'What is the employees last name?',
      name: 'empLastName',
    },
    {
      type: 'list',
      message: "What is the employees job title?",
      choices: jobTitles,
      name: 'empJobTitle',
     },
     {
        type: 'list',
        message: "Who is the employees manager?",
        choices: employees,
        name: 'empManager'
     }
]

const updateEmployee = [
    {
        type: 'list',
        message: 'Which employee would you like to update?',
        choices: employees,
        name: "updateEmployee"
    }
    {
        type: 'list',
        message: 'What is the new title of this employee?',
        choices: jobTitles,
        name: "updateEmployeeTitle"
    }
]