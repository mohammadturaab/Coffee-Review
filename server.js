require('dotenv').config();
const express = require('express');
require('./config/passport');


const app = express();

const session = require("express-session");
const passport = require('passport');

app.use(
    session({
        secret: 'CoffeeIsLife!',
        resave: false,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());



app.get('/', (req, res) => {
    res.send('Hello World!')
});

const port = 3000;

app.listen(port, () => {
    console.log(`You are listening on port ${port}`);
})