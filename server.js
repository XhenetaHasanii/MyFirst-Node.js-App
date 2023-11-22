require('dotenv').config();

// include express
const express = require('express');

// create server 
const app = express();
app.use(express.json());
// include Mongoose
const mongoose = require('mongoose');

//connecting to Mongodb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const blogRoutes = require('./routes/blogRoutes');
app.use(blogRoutes);

app.listen(3000, () => console.log('Server Started'));


app.set('view engine', 'ejs');












