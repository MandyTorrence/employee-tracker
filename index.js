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

// Load the data
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

// All the Questions...

const whatYouDoing = [{
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: ["View All Employees",
        "Sort by Department",
        "Sort by Manager",
        "Edit Employees",
        "Edit Role",
        "Edit Department",
        "Quiz"]
}];

const editEmployee = [{
    type: "list",
    name: "employeeEdit",
    message: "What change would you like to make to an Employee?",
    choices: ["Update an Employee",
        "Delete an Employee",
        "Add a New Employee"]
}];

const updateEmployeeQuestions = [{
    type: "list",
    name: "updateWhat",
    message: "Select the Employee you wish to edit?",
    choices: ["Name", "Role", "Manager"]
}];

const updateEmployeeNameQuestions = [{
    type: "list",
    name: "updateWho",
    message: "Select the Employee you wish to edit?",
    choices: employees
},
{
    type: "input",
    name: "updateFirstName",
    message: "What is the updated employee First Name?"
},
{
    type: "input",
    name: "updateLastName",
    message: "What is the updated employee Last Name?"
}];

const updateEmployeeRoleQuestions = [{
    type: "list",
    name: "updateWho",
    message: "Select the Employee you wish to edit?",
    choices: employees
},
{
    type: "list",
    name: "updateEmployeeRole",
    message: "What is the employee's new Role?",
    choices: roles
}];

const updateEmployeeManagerQuestions = [{
    type: "list",
    name: "updateWho",
    message: "Select the Employee you wish to edit?",
    choices: employees
},
{
    type: "list",
    name: "updateEmployeeManager",
    message: "Select the employee's new Manager?",
    choices: employees
}];

const addEmployeeQuestions = [
    {
        type: "input",
        name: "addFirstName",
        message: "What is the employee's First Name?"
    },
    {
        type: "input",
        name: "addLastName",
        message: "What is the employee's Last Name?"
    },
    {
        type: "input",
        name: "addEmployeeRole",
        message: "Select the employee's Role?",
        choices: roles
    },
    {
        type: "list",
        name: "addEmployeeManager",
        message: "Select the employee's Manager?",
        choices: employees
    }
];

const deleteEmployeeQuestion = [{
    type: "list",
    name: "deleteEmployee",
    message: "Select the employee you wish to delete?",
    choices: employees
}];

const editRole = [{
    type: "list",
    name: "roleEdit",
    message: "What change would you like to make to a Role?",
    choices: ["Update a Role",
        "Delete a Role",
        "Add a New Role"]
}];

const updateRoleQuestions = [{
    type: "list",
    name: "updateWhat",
    message: "Select the Role you wish to edit?",
    choices: ["Title", "Salary", "Department"]
}];

const updateRoleTitleQuestions = [{
    type: "list",
    name: "updateWhich",
    message: "Select the Role you wish to edit?",
    choices: roles
},
{
    type: "input",
    name: "updateTitle",
    message: "What is the update Role title?"
}];

const updateRoleSalaryQuestions = [{
    type: "list",
    name: "updateWhich",
    message: "Select the Role you wish to edit?",
    choices: roles
},
{
    type: "input",
    name: "updateSalary",
    message: "What is the update Role salary?"
}];

const editDepartment = [{
    type: "list",
    name: "departmentEdit",
    message: "What change would you like to make to a Department?",
    choices: ["Update a Department",
        "Delete a Department",
        "Add a New Department"]
}];

const deleteDepartmentQuestion = [{
    type: "list",
    name: "deleteDepartment",
    message: "Select the department you wish to delete?",
    choices: department
}];

// Question Logic Functions

function whatIBeDoing() {
    inquirer.prompt(whatYouDoing).then(function (answer) {
        console.log(answer.action);
        switch (answer.action) {
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
            case "Quit":
                connection.end(); break;
        }
    });
};

function editDepartmentQuestion() {
    inquirer.prompt(editDepartment).then(answer => {
        console.log(answer.departmentEdit);
        switch (answer.departmentEdit) {
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
        console.log(answer.roleEdit);
        switch (answer.roleEdit) {
            case "Update a Role":
                updateRoleQuestions(); break;
            case "Delete a Role":
                deleteRole(); break;
            case "Add a New Role":
                addNewRole(); break;
        }
    });
};

function editEmployeeQuestion() {
    inquirer.prompt(editEmployee).then(answer => {
        console.log(answer.employeeEdit);
        switch (answer.employeeEdit) {
            case "Update an Employee":
                updateEmployeeQuestions(); break;
            case "Delete an Employee":
                deleteEmployee(); break;
            case "Add a New Employee":
                addNewEmployee(); break;
        }
    });
};

function updateEmployeeQuestions() {
    inquirer.prompt(updateEmployeeQuestions).then(answer => {
        console.log(answer.updateWhat);
        switch (answer.updateWhat) {
            case "Name":
                updateEmployeeName(); break;
            case "Role":
                updateEmployeeRole(); break;
            case "Manager":
                updateEmployeeManager(); break;
        }
    });
};

function updateRoleQuestions() {
    inquirer.prompt(updateRoleQuestions).then(answer => {
        console.log(answer.updateWhat);
        switch (answer.updateWhat) {
            case "Title":
                updateRoleTitle(); break;
            case "Salary":
                updateRoleSalary(); break;
            case "Department":
                updateRoleDepartment(); break;
        }
    });
};

function updateRoleQuestions() {
    inquirer.prompt(updateRoleQuestions).then(answer => {
        console.log(answer.updateWhat);
        switch (answer.updateWhat) {
            case "Title":
                updateRoleTitle(); break;
            case "Salary":
                updateRoleSalary(); break;
            case "Department":
                updateRoleDepartment(); break;
        }
    });
};


// Action Functions
function viewAllEmployees() {

};

function viewByDepartment() {

};

function viewByManager() {

};

function updateDepartment() {

};

function deleteDepartment() {
    inquirer.prompt(addDepartmentQuestion).then(answer => {
        connection.query(
            `DELETE FROM department WHERE id =?( "${answer.deleteDepartment.id}" );`,
            err => {
                if (err) throw err;
                console.log("The department was successfully deleted!");
            }
        );
        whatIBeDoing();
    });
};

function addNewDepartment() {
    inquirer.prompt(addDepartmentQuestion).then(answer => {
        connection.query(
            `INSERT INTO department (name) VALUES( "${answer.addDepartment}" );`,
            err => {
                if (err) throw err;
                console.log("The department was successfully added!");
            }
        );
        whatIBeDoing();
    });
};

function updateRoleTitle() {

};

function updateRoleSalary() {

};

function updateRoleDepartment() {

};

function deleteRole() {

};

function addNewRole() {

};

function updateEmployeeName() {

};

function updateEmployeeRole() {

};

function updateEmployeeManager() {

};

function deleteEmployee() {

};

function addNewEmployee() {

};


function start() {
    pullDepartments();
    pullRoles();
    pullEmployees();
    whatIBeDoing();
};