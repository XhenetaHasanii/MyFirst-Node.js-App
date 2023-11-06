// include HTTP module
const http=require('http');
const _=require('lodash');

// create a server object
 const server =http.createServer((req,res)=>{
   
    const num= _.random(0,20);
    console.log(num);
   
    const greet=_.once(()=>
    {
        console.log("Hello World");
    });
    greet();
    greet();
    greet();
    greet();

    let path='./views/';
    switch(req.url){
case '/':
    path+='index.html';
    res.statusCode=200;
    break;
case '/about':
    path+='about.html';
    res.statusCode=200;
break;
/*
case '/about-me':
    res.statusCode=300;
    res.setHeader('Location','/about');
    res.end();*/
default:
    path+='404.html';
    res.statusCode=400;
    break;
}
//set header content-type
   res.setHeader('Content-Type','text/html');
   
//res.setHeader('Content-Type','text/plain');
//res.write('<p>hello, ninjas!</p>');
//res.write('<head<link style="stylesheet",href="#"></head>');

//include file system
   const fs=require('fs');

 // send an html file
   fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        res.write(data);
        res.end();
    }
})});  
server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
});


