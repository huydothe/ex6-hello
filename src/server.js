const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
    fs.readFile('./src/index.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(404,{"Content-Text":"text/html"});
            res.end("404 not found");
        }else {
            res.writeHead(200, "utf-8",{"Content-Text": "text/html"});
            res.write(data)
            res.end();
        }
    })
})

server.listen(8080,()=>{
   console.log(`Server running at http://localhost:8080`)
})