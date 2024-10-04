const express = require("express");
const app = express();

const SERVER_PORT = process.env.PORT || 5001;

const empRouter = require('./emp');
const userRouter = require('./users');

const errorHandlingMiddleware = require('./errorHandlerMiddleware');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const loggerMiddleware = (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${Date()}`);
    next();
};

// Apply middleware
app.use('/user', loggerMiddleware);

app.use('/user', userRouter);
app.use('/emp', empRouter);

// Error Middleware should be added after all endpoints


// Error endpoint
app.get('/error', (req, res) => {

    throw new Error("This is a forced error");
    res.send("Welcome to the Error Page");
})

app.use(errorHandlingMiddleware);

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port {SERVER_PORT} at http://localhost:5001`)
})
