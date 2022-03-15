require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');

require('./config/database');
require('./config/passport');


const app = express();
app.set('view engine', 'ejs');

const session = require("express-session");
const passport = require('passport');

const homeRoutes = require('./routes/home')
const productRoutes = require('./routes/products');
const reviewRoutes = require('./routes/reviews');
const googleAuth = require('./routes/auth');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/public', express.static('public'));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);


app.use(passport.initialize());
app.use(passport.session());

app.use('/', googleAuth);
app.use('/', homeRoutes);
app.use('/products', productRoutes);
app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`You are listening on port ${PORT}`);
});