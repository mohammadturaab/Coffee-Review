require('dotenv').config();
const express = require('express');

require('./config/database');
require('./config/passport');


const app = express();

const session = require("express-session");
const req = require('express/lib/request');
const passport = require('passport');

const routes = require('./routes/');
const productRoutes = require('./routes/products')

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'CoffeeIsLife!',
        resave: false,
        saveUninitialized: true
    })
);


app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes.googleAuth);

app.get('/', (req, res) => {
    res.send('You are not logged in')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
});