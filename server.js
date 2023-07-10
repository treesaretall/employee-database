const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'treesaretall',
    database: 'employee_database'
});

db.connect((err) => { if (err) throw err });


// // view all departments 
// db.query('SELECT * FROM department', (err, res) => {
//     console.log(err, res);
// });
// // view all roles
// db.query('SELECT * FROM role', (err, res) => {
//     console.log(err, res);
// });


const getemployeenames = (callback) => {
  db.query('SELECT * FROM employee', (err, res) => {
      if (err) {
        throw err;
    } else {
      const employeeNames = res.map(employee => employee.first_name);
          return(employeeNames);
    }
  });
};


// // add a department
// db.query('INSERT INTO department (name) VALUES (?)', ['IT'], (err, res));
// // add a role
// db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', ['Software Engineer', 100000, 1]);
// // add an employee
// db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', ['John', 'Doe', 1, 1]);
// // update an employee role
// db.query('UPDATE employee SET role_id =? WHERE id =?', [2, 1]);

app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});




module.exports = { getemployeenames };