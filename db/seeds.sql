INSERT INTO department (name) 
VALUES 
    ('admin'),
    ('sales'),
    ('software'),
    ('support');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('ceo', 450000, 1),
    ('coo', 400000, 1),
    ('cfo', 400000, 1),
    ('secretary', 55000,1),
    ('human resources', 55000, 1),
    ('sales manager', 120000, 2),
    ('salesman', 60000, 2),
    ('sr software engineer', 140000, 3),
    ('software engineer', 110000, 3),
    ('jr software engineer', 70000, 3),
    ('support manager', 100000, 4),
    ('technical support', 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Matthew', 'Hurst', 1, null),
    ('Elizabeth', 'Rush', 2, 1),
    ('John', 'Doe', 3, 1),
    ('Susan', 'Wells', 4, 1),
    ('Mark', 'Johns', 5, 2),
    ('Jeff', 'Lerry', 6, 3),
    ('Brad', 'Howells', 7, 6),
    ('William', 'Spears', 8, 2),
    ('Albert', 'Morris', 9, 8),
    ('Steve', 'Smith', 10, 8),
    ('Pamela', 'Gordon', 11, 2),
    ('Joseph', 'Miller', 12, 11);