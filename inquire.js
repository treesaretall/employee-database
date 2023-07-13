const inquirer = require("inquirer");
const db = require("./server.js");



const menu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "options",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "View All Departments",
                    "View All Roles",
                    "Add Employee",
                    "Add Department",
                    "Add Role",
                    "Update Employee Role",
                ]
            }
        ])
        .then((answer) => {
            switch (answer.options) {
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                default:
                    console.log('Invalid Response, please try again');
                    menu();
                    break;
            }
        });
};

const viewEmployees = () => {
    db.query('SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
};

const viewRoles = () => {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
};

const viewDepartments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        menu();
    });
};

const addEmployee = () => {
    inquirer
          .prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: "What is the employee's first name?"
                },
                {
                    type: "input",
                    name: "last_name",
                    message: "What is the employee's last name?"
                },
                {
                    type: "input",
                    name: "role_id",
                    message: "What is the employee's role ID?"
                },
                {
                    type: "input",
                    name: "manager_id",
                    message: "What is the employee's manager ID?"
                }
            ])
          .then((answer) => {
                db.query('INSERT INTO employee SET ?', answer, (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    menu();
                });
            });
};

const addRole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the role's title?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the role's salary?"
            },
            {
                type: "input",
                name: "department_id",
                message: "What is the role's department ID?"
            }
        ])
        .then((answer) => {
            db.query('INSERT INTO role SET ? ', answer, (err, res) => {
                if (err) throw err;
                console.table(res);
                menu();
            });
        });
};

const addDepartment = () => {
    inquirer
           .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the department's name?"
                }
            ])
           .then((answer) => {
                db.query('INSERT INTO department SET? ', answer, (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    menu();
                });
            });
};

const updateEmployeeRole = () => {
    inquirer
          .prompt([
                {
                    type: "input",
                    name: "employee_id",
                    message: "What is the employee's current ID?"
                },
                {
                    type: "input",
                    name: "role_id",
                    message: "What is the employee's new role ID?"
                }
            ])
          .then((answer) => {
                db.query('UPDATE employee SET role_id =? WHERE id =?', [answer.role_id, answer.employee_id], (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    menu();
                });
            });
}

menu();