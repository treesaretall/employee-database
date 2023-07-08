INSERT INTO department (name) 
VALUES ("admin");

INSERT INTO role (title, salary, department_id)
VALUES ("ceo", 450000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matthew", "Hurst", 1, null);