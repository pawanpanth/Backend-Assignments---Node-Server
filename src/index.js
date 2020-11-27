var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {
    
    // console.log(res);
    if(req.url.startswith("/welcome") && req.method == "GET"){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write('Welcome to Dominos!');
        res.end();
    }

    else if(req.url.startswith("/contact") && req.method == "GET"){
        res.writeHead(200,{'content-Type':'application/json'});
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            }));
        res.end();
    }
    else{
        res.writeHead(404)
        // res.write('Page was not found');
        res.end();
    }
}

module.exports = httpServer;
