// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
// allows us to use console.table
require("console.table")

// connection object that establishes port 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Swimm210!",
    database: "employee_db",
});

connection.connect(function(err) {
    if (err) throw err;
    runEmployeePrompt();
});

// prompts user with choices of actions
function runEmployeePrompt() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "Done"]

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
                default:
                    process.exit();
            }
        })
}

// when this function is called it displays the employees first and last name
function viewEmployees() {
    var query = "SELECT first_name, last_name FROM employee"
    connection.query(query, (err, data) => {
        console.table(data)
        runEmployeePrompt();
    })


}

// when this function is called it displays employees per corresponding departments
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