const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

//connect to database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
// database connection event
db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});