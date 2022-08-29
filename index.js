const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


const departments = ["Corporate", "Sales", "Management", "Field"]

const jobTitles = ["President", 'Vice President', 'Operations Manager', 'Sales Rep', 'Sales Manager', 'Logistics Coordinator', 'Field Foreman', 'EHS', 'Fleet Manager', "Technician", 'Trainer']

const employees = ['Wade', 'Matt', 'Sam', 'Al', 'Niki', 'Danny', 'John', 'Jason', 'Juan', 'Stephen', 'Lalo', 'Adrian']

