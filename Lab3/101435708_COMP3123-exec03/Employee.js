//TODO - Create Employee Module here and export to use in index.js

let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000 }
];

// Function to get all employee details
function getAllDetails() {
    return new Promise((resolve) => {
        resolve(employees);
    });
}

// Function to get employee full names in ascending order
function getEmployeeNames() {
    return new Promise((resolve) => {
        const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
        resolve(names);
    });
}

// Function to get the total salary of all employees
function getTotalSalary() {
    return new Promise((resolve) => {
        const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);
        resolve(totalSalary);
    });
}

// Exporting the functions to be used in index.js
module.exports = {
    getAllDetails,
    getEmployeeNames,
    getTotalSalary
};
