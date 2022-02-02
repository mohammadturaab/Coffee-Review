require('dotenv').config();
const express = require('express');

// require('./config/database');
require('./config/passport');


const app = express();
app.set('view engine', 'ejs');

const session = require("express-session");
const passport = require('passport');

const routes = require('./routes/');
const productRoutes = require('./routes/products');

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


app.use('/', routes.googleAuth);
app.use('/products', productRoutes);

app.use('/', routes.googleAuth);
app.get('/', (req, res) => {
    res.render('index');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
});