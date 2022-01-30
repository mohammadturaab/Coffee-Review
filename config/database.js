const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

//connect to database
mongoose
	.connect(dbUrl)
	.then(() => 
		console.log(`MongoDB successfully connected at ${db.host}:${db.port}! 
		How dope!`))
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));