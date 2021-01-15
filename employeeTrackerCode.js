// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
// const util = require("util");

// connection object that establishes port 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Swimm210!",
    database: "employee_DB;"
});

connection.connect(function(err) {
    if (err) throw err;
    runEmployeePrompt();
});

function runEmployeePrompt() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]

        })
        .then(function(answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Employees By Department":
                    viewEmployeesByDep();
                    break;

                case "View All Employees By Manager":
                    viewEmployeesByMngr();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Update Employee Manager":
                    updateEmployeeMngr();
                    break;
            }
        })
}

function viewEmployees() {

}

function viewEmployeesByDep() {

}

function viewEmployeesByMngr() {

}

function addEmployee() {

}

function removeEmployee() {

}

function updateEmployeeRole() {

}

function updateEmployeeMngr() {

}