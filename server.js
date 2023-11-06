// include HTTP module
const http=require('http');

// create a server object
 const server =http.createServer((req,res)=>{
    console.log(req.url , req.method);

    let path='./views/';
    switch(req.url){
case '/':
    path+='index.html';
    break;
case '/about':
    path+='about.html';
break;
case '/404':
    path+='404.html';
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

