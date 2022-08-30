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
    },
    {
        type: 'list',
        message: 'What is the new title of this employee?',
        choices: jobTitles,
        name: "updateEmployeeTitle"
    }
]

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '@lesanA22',
      database: 'allEmps_db'
    },
  );

function initQuestions() {
    inquirer.prompt(options)
    .then((data) => {
        if (data.options === "View All Employees") {
            db.query('SELECT employeeInfo.id, employeeInfo.first_name, employeeInfo.last_name, employeeTitle.title, department.dept_name, employeeTitle.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employeeInfo JOIN employeeTitle ON employeeInfo.title_id = employeeTitle.id JOIN department ON employeeTitle.department_id = department.id LEFT JOIN employeeInfo manager ON manager.id = employeeInfo.manager_id;', function (err, results) {
                console.table(results);
                initQuestions();
              });
        } else if (data.options === "Add Employee") {
            initAddEmployee()

        } else if (data.options === "Update Employee Role") {
            updateEmployee()
           
        } else if (data.options === "View All Roles") {
            db.query('SELECT employeeTitle.id, employeeTitle.title, employeeTitle.salary, department.dept_name FROM employeeTitle JOIN department ON employeeTitle.department_id = department.id', function (err, results) {
                console.log(err)
                console.table(results);
                initQuestions();
              });
        } else if (data.options === "Add Role") {
            //function for adding job title
            
        } else if (data.options === "View All Departments") {
            db.query('SELECT * FROM department', function (err, results) {
                console.table(results);
                initQuestions();
              });
        } else if (data.options === "Add Department") {
            initAddDeptName();

        } else if (data.options === "Quit") {
            console.log("Bye.");
        }
    })
};

function initAddEmployee() {
    inquirer.prompt(addEmployee)
    .then((data) => {
     
        const newFirst = JSON.stringify(data.empFirstName).split('"').join('');
        const newLast = JSON.stringify(data.empLastName).split('"').join('');
        const newEmpTitle = JSON.stringify(data.empJobTitle).split('"').join('');
        const newEmpManager = JSON.stringify(data.empManager).split('"').join('');

        employees.push(newFirst)

        db.query('INSERT INTO employeeInfo (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [newFirst, newLast, titleId, newEmpManager], 
    )
        initQuestions();
          }
    )}
    


initQuestions()