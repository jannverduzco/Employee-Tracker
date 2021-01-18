
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 100000.00, 1 ), ("Sales Person", 100000.00, 2);

INSERT INTO department (department_name)
VALUES ("HR"), ("IT"), ("Sales"), ("Engineering");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Bryant", 2, 1), ("Nancy", "Olive", 3, 2);