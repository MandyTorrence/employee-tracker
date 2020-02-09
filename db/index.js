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
