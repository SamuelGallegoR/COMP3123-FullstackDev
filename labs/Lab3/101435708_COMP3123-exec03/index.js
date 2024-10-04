var http = require("http");
var employeeModule = require("./Employee.js");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer(async (req, res) => {
    if (req.method !== 'GET') {
        res.writeHead(405, {'Content-Type': 'application/json'});
        res.end(`{"error": "Method Not Allowed"}`);
        return;
    }
    
    try {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return;        
        }

        if (req.url === '/employee') {
            const employees = await employeeModule.getAllDetails();
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(employees));
            return;
        }

        if (req.url === '/employee/names') {
            const names = await employeeModule.getEmployeeNames();
            names.sort(); // Sort names in ascending order
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(names));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            const totalSalary = await employeeModule.getTotalSalary();
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ "total_salary": totalSalary }));
            return;
        }

        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(`{"error": "Not Found"}`);
    } catch (error) {
        if (!res.headersSent) { // Ensure no headers were already sent
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(`{"error": "${error.message}"}`);
        }
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
