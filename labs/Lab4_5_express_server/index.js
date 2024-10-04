const express = require('express')
const app = express()
const SERVER_PORT = 3000

app.get('/', (req, res)=>{
    res.status(200)
        .send('<h1> Hello world :) </h1>')
    //No need for 'end'
})

app.get('/contact', (req, res)=>{
    res.status(200)
    .send('<h2> Contact us: +888 888 888 </h2>')
})

app.get('/about', (req, res)=>{
    res.status(200)
    .send('<h1> About us </h1>')
})

app.post('/hello', (req, res) => { //POST -> for record/resource insertion/creation
    res.status(200)
    .send('<h1>POST-Hello</h1>')
})

app.put('/hello', (req, res) => { //PUT -> for updating a record/resource
    res.status(200)
    .send('<h1>PUT-Hello</h1>')
})

app.delete('/hello', (req, res) => {
    res.send('<h1>DELETE-Hello</h1>')
})


app.get('/student', (req, res)=>{
    res.status(200)
    const stud = {
        name: 'John Doe',
        age: 25
    }
    res.json(stud)
})


// Query String Parameters
//http://localhost:3000/employee?fnm=pritesh&lnm=patel
app.get('/employee', (req, res) => {
    console.log(req.query)
    // res.send(req.query);
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});


// Path Parameters
//http://localhost:3000/employee/pritesh/patel/toronto
app.get('/employee/:fnm/:lnm/:city', (req, res) => {
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);
});





//.listen
app.listen(SERVER_PORT, () =>{
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})