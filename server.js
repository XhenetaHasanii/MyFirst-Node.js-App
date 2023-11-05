// include HTTP module
const http=require('http');


// create a server object
const server =http.createServer((req,res)=>{
    console.log('request made');
});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
});
