// include express
const express=require('express');

//include mongoose
const mongoose=require('mongoose');

// express app
const app=express();

// register view engine
app.set('view engine','ejs');

// connecting to Mongodb
const dbURI='mongodb+srv://netninja:test123@nodejs.6w2lkin.mongodb.net/nodejs?retryWrites=true&w=majority';
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=>{
app.listen(3000);}
).catch((err)=>{
    console.log(err);
});

// include morgan
const morgan=require('morgan');

// Use Morgan middelware to log HTTP requests
app.use(morgan('dev'));

// create middelware
/*app.use((req,res,next)=>{
    console.log('new request made');
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);

    next();
});

app.use((req,res,next)=>{
    console.log('in the next middelware');
    next();
});*/

app.get('/',(req,res)=>{
    //res.send('<p>Home page<p>');
   // res.sendFile('./views/index.html',{root:__dirname});

   //Create an blogs array
   const blogs=[{title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur'},
   {title:"Mario finds stars", snippet:'Lorem ipsum consectetur'}, {title:'How to defeat browser',snippet:'Lorem ipsum dolor sit amet consectetur'},]; 

    res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    
   // res.send('<p>About </p>');
   //res.sendFile('./views/about.html',{root:__dirname});
   
   res.render('about',{title:'About'});
});

app.get('/blog/create',(req,res)=>{
    res.render('create', { title: 'Create a new Blog' });
});

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});

// 404 page
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.render('404',{ title: '404' });
});






