DROP DATABASE IF EXISTS employee_DB;

CREATE database employee_DB;

USE DATABASE employee_DB;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY 
) 

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY 
)

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR (30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    PRIMARY KEY
)

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;