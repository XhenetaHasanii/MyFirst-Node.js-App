// include express
const express = require('express');
const app = express();

// set up view engine
app.set('view engine', 'ejs');

//include environment variables
require('dotenv').config();



// include mongoose
const mongoose = require('mongoose');


//connecting to Mongodb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => console.log('Server Started'));

const Blog=require('./models/blog');


 






