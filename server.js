require('dotenv').config();
const express = require('express');

require('./config/database');
require('./config/passport');


const app = express();
app.set('view engine', 'ejs');

const session = require("express-session");
const passport = require('passport');

const homeRoutes = require('./routes/home')
const productRoutes = require('./routes/products');
const googleAuth = require('./routes/auth');

app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));


app.use(
    session({
        secret: 'CoffeeIsLife!',
        resave: false,
        saveUninitialized: true
    })
);


app.use(passport.initialize());
app.use(passport.session());

app.use('/', googleAuth);
app.use('/', homeRoutes);
app.use('/products', productRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
});