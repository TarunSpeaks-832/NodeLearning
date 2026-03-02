const http = require('http');

const server = http.createServer( (req,res)  => {
    const url = req.url;
    if(url == '/') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Home Page');
    }
    else if(url == '/projects'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Projects Page');
    }
    else{
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Page not found!!");
    }
});

const port = 1000;

server.listen(port, () => {
    console.log(`Server is now listening to port ${port}`);
});