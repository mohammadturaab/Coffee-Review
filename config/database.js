const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

//connect to database
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});

