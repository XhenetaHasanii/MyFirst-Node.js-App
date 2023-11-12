// include express
const express=require('express');

//include mongoose
const mongoose=require('mongoose');

const Blog=require('./models/blog');
const blog = require('./models/blog');

// express app
const app=express();

// register view engine
app.set('view engine','ejs');

// connecting to Mongodb
const dbURI='mongodb+srv://netninja:test123@nodejs.6w2lkin.mongodb.net/nodejs?retryWrites=true&w=majority';

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).
then((result)=>{
app.listen(3000);}
).catch((err)=>{
    console.log(err);
});

const morgan=require('morgan');

// Use Morgan middelware to log HTTP requests
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));

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

/*app.get('/',(req,res)=>{
    //res.send('<p>Home page<p>');
   // res.sendFile('./views/index.html',{root:__dirname});

   //Create an blogs array
   const blogs=[{title:'Yoshi finds eggs',snippet:'Lorem ipsum dolor sit amet consectetur'},
   {title:"Mario finds stars", snippet:'Lorem ipsum consectetur'}, {title:'How to defeat browser',snippet:'Lorem ipsum dolor sit amet consectetur'},]; 

    res.render('index',{title:'Home',blogs});
});*/

//routes
app.get('/',(req,res)=>{
    res.redirect('blogs');
})
app.get('/about',(req,res)=>{
    
   // res.send('<p>About </p>');
   //res.sendFile('./views/about.html',{root:__dirname});
   
   res.render('about',{title:'About'});
});

//blog routes
app.get('/blogs',(req,res)=>{
    Blog.find().then((result)=>{
        res.render('index',{title:'All blogs',blogs:result});

    })

})
app.get('/blogs/create',(req,res)=>{
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
//retrieve all the blogs from the collection
app.get('/all-blogs', (req,res)=>{
 
    blog.find().
    then((result)=>{
        
        res.render('index')
    })
    .catch((err)=>{
            console.log(err);
        });
    });

 // retrieve the blog by id 
    app.get('/single-blog',(req,res)=>{
        Blog.findById('654fc08a350b7d0c46335642')
        .then((result)=>
        {
            res.send(result);

        })
        .catch((err)=>{
            console.log(err);
        })
    });
    /// mnogoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:"new blog",
        snippet:"about my new blog",
        body: "more about my new blog"
    });
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.post('/',(req,res)=>
{
const blog=new Blog(req,body)});
blog.save
.then((result)=>
{
res.redirect('/').catch((er)=>{
    console.log(err);
})
});

