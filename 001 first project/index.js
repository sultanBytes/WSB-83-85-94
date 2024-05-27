const http = require('http');


http.createServer((req,x)=>{
    console.log(req)
    x.end('hello')
}).listen(4500);

console.log('done');