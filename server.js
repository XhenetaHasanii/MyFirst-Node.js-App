// include HTTP module
const http=require('http')

// create a server object
const server =http.createServer((req,res)=>{
    console.log(req.url , req.method);
    // set header content type 
   res.setHeader('Content-Type','text/html');
   res.write('<p>hello, ninjas!</p>')
   res.write('<head<link style="stylesheet",href="#"></head>')

  //read from index.html file
   const fs=require('fs');
   fs.readFile('./views/index.html',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        res.write(data);
    }
})});  
server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
});

