require('dotenv').config();
const express = require('express');

const app = express();

const session = require("express-session");
const { append } = require("express/lib/response");

app.use(
    session({
        secret: 'CoffeeIsLife!',
        resave: false,
        saveUninitialized: true
    })
);

const port = 3000;

app.listen(port, () => {
    console.log(`You are listening on port ${port}`);
})