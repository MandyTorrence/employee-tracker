var mysql = require("mysql");
var inquirer = require("inquirer");
var Employee = require("./lib/Employee");
const cTable = require('console.table');

// Connection to MySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeeManagementDB"
});

connection.connect(err => {
    if (err) throw err;
    start();
});

function pullDepartments() {
    conection.query("SELECT id, name FROM department", (err, res) => {
        if (err) throw err;
        res.forEach(dept => departments.push(dept.name))
    })
};

function pullRoles() {
    conection.query("SELECT id, title, salary, department_id FROM role", (err, res) => {
        if (err) throw err;
        res.forEach(role => departments.push(role.id, role.title, role.salary, role.department_id))
    })
};

function pullEmployees() {
    conection.query("SELECT id, title, salary, department_id FROM role", (err, res) => {
        if (err) throw err;
        res.forEach(role => departments.push(role.id, role.title, role.salary, role.department_id))
    })
};

const whatYouDoing = [{
    type: "list",
    name: "task",
    message: "What do you want to do?",
    choices: ["View All Employees",
        "Sort by Department",
        "Sort by Manager",
        "Edit Employees",
        "Edit Role",
        "Edit Department"]
}];

const editEmployee = [{
    type: "list",
    name: "task",
    message: "What change would you like to make to an Employee?",
    choices: ["Update an Employee",
        "Delete an Employee",
        "Add a New Employee"]
}];

const editRole = [{
    type: "list",
    name: "task",
    message: "What change would you like to make to a Role?",
    choices: ["Update a Role",
        "Delete a Role",
        "Add a New Role"]
}];

const editDepartment = [{
    type: "list",
    name: "task",
    message: "What change would you like to make to a Department?",
    choices: ["Update a Department",
        "Delete a Department",
        "Add a New Department"]
}];

function whatIBeDoing() {
    inquirer.prompt(whatYouDoing).then(function (answer) {
        console.log(answer.task);
        switch (answer.task) {
            case "View All Employees":
                viewAllEmployees(); break;
            case "Sort by Department":
                viewByDepartment(); break;
            case "Sort by Manager":
                viewByManager(); break;
            case "Edit Employees":
                editEmployeeQuestion(); break;
            case "Edit Role":
                editRoleQuestion(); break;
            case "Edit Department":
                editDepartmentQuestion(); break;
        }
    });
};

function editDepartmentQuestion() {
    inquirer.prompt(editDepartment).then(answer => {
        console.log(answer.task);
        switch (answer.task) {
            case "Update a Department":
                updateDepartment(); break;
            case "Delete a Department":
                deleteDepartment(); break;
            case "Add a New Department":
                addNewDepartment(); break;
        }
    });
};
function editRoleQuestion() {
    inquirer.prompt(editRole).then(answer => {
        console.log(answer.task);
        switch (answer.task) {
            case "Update a Role":
                updateRole(); break;
            case "Delete a Role":
                deleteRole(); break;
            case "Add a New Role":
                addNewRole(); break;
        }
    });
};

function editEmployeeQuestion() {
    inquirer.prompt(editEmployee).then(answer => {
        console.log(answer.task);
        switch (answer.task) {
            case "Update an Employee":
                updateEmployee(); break;
            case "Delete an Employee":
                deleteEmployee(); break;
            case "Add a New Employee":
                addNewEmployee(); break;
        }
    });
};

function start() {
    pullDepartments();
    pullRoles();
    pullEmployees();
    whatIBeDoing();
};