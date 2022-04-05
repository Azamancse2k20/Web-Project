const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'


const myServer = http.createServer((req, res)=>{
    res.end("Hello. I am your first server");
});

myServer.listen(port, hostname, ()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
});
