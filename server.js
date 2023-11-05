// include HTTP module
const http=require('http');

// create a server object
const server =http.createServer((req,res)=>{
    console.log(req.url , req.method);
    // set header content type 
    res.setHeader('Content-Type','text/html');
    res.write('<head><link rel="stylesheet" href="#"</head>')
    res.write('<p>hello, ninjas</p>');
    res.end();

});  
server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
});
