
const fs = require('fs');
const http = require('http')

const port = process.env.PORT || 4000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html');
    
    if(req.url == '/'){
        
        res.statusCode = 200;
        res.end('<h1>This is Dazzler Abhi</h1> <p>This is my first node.js tutorial</p>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About Dazzler Abhi</h1>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        // res.harry();
        res.statusCode = 404;
        res.end('<h1>Error page not found</h1>');
    }
})


server.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})