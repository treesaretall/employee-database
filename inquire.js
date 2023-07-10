const inquirer = require("inquirer");
const fs = require("fs");
const { getemployeenames } = require("./server.js");

const employeeNames = getemployeenames()

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
              "Update Employee Role",
          ]
      },
      {
          type: "input",
          name: "adddept",
          message: "What would you like to name the department?",
          when: (answers) => answers.options === "Add Department"
      },
      {
          type: "input",
          name: "addrolename",
          message: "What would you like to name the role?",
          when: (answers) => answers.options === "Add Role"
      },
      {
          type: "input",
          name: "addrolesalary",
          message: "What is the salary for this role?",
          when: (answers) => answers.options === "Add Role" && answers.addrolename !== ""
      },
      {
          type: "input",
          name: "addroledept",
          message: "Which department does this role belong to?",
          when: (answers) => answers.options === "Add Role" && answers.addrolesalary !== ""
      },
      {
          type: "input",
          name: "addemployeefirst",
          message: "What is the employee's first name?",
          when: (answers) => answers.options === "Add Employee"
      },
      {
          type: "input",
          name: "addemployeelast",
          message: "What is the employee's last name?",
          when: (answers) => answers.options === "Add Employee" && answers.addemployeefirst !== ""
      },
      {
          type: "input",
          name: "addemployeerole",
          message: "What is the employee's role?",
          when: (answers) => answers.options === "Add Employee" && answers.addemployeelast !== ""
      },
      {
          type: "input",
          name: "addemployeemanager",
          message: "Who is the employee's manager?",
          when: (answers) => answers.options === "Add Employee" && answers.addemployeerole !== ""
      },
      {
          type: "list",
          name: "updateemployeerole",
          message: "Choose an employee to update their role",
          choices: [employeeNames],
          when: (answers) => answers.options === "Update Employee Role"
      }
      
      
      
      
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });