
INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 100000.00, 1 ), ("Sales Person", 800000.00, 2), ("Accountant", 900000.00, 3), ("HR Rep", 600000.00, 4);

INSERT INTO department (department_name)
VALUES ("Management"), ("Sales"), ("Accounting") ("HR");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, 1), ("Jim", "Haplert", 2, 1), ("Pam", "Beesly", 3, 1), ("Dwight", "Schrute", 2, 1), ("Andy", "Bernard", 2, 1), ("Angela", "Martin", 3, 1), ("Oscar", "Martines", 3, 1), ("Toby", "Flenderson", 4, 1);