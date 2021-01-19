// Dependencies =====================================================
var mysql = require("mysql");
var inquirer = require("inquirer");
var util = require("util");
// allows us to use console.table =
require("console.table")

// connection object that establishes port ==========================
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

// prompts user with choices of actions ============================
function runEmployeePrompt() {
    inquirer
        .prompt([{
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: ["View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "Done"
            ]

        }])
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
    var query = "SELECT * FROM employee INNER JOIN role ON employee.id = role.id;"
    connection.query(query, (err, data) => {
        console.table(data)
        runEmployeePrompt();
    })
}

// when this function is called it displays employees per corresponding departments
function viewEmployeesByDep() {
    inquirer
        .prompt([{
            name: "action",
            type: "rawlist",
            message: "Please select the departments you would like to view employess from",
            choices: ["Admin", "Marketing", "Finance", "Sales", "HR", "IT", "Operations Management"]
        }])
        .then(function(answer) {
            console.log(answer)

        })

}

function viewEmployeesByMngr() {

}

function addEmployee() {
    inquirer
        .prompt([{

                type: "input",
                name: "first_name",
                message: "Please provide the employee's first name",
            },
            {
                type: "input",
                name: "last_name",
                message: "Please provide the employee's last name",
            },
            {
                type: "input",
                name: "role_id",
                message: "Please enter a role ID",
            },
            {
                type: "input",
                name: "manager_id",
                message: "Please enter a manager ID",
            }
        ])
        .then(function(answer) {
            console.log(answer)
            connection.query("INSERT INTO employee SET ?", {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            }, function(err) {
                if (err) throw (err)
                console.log("Employee succesfully added!")
                console.log(err)
                runEmployeePrompt();
            })
        })
}

function removeEmployee() {

}

function updateEmployeeRole() {

}

function updateEmployeeMngr() {

}