var http = require("http");

const httpServer = http.createServer(handleServer).listen(8081);


function handleServer(req, res) {
    if(req.url=='/welcome'){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write('welcome to Dominos!');
        res.end();
    }

    else if(req.url=='/contact'){
        res.writeHead(200,{'content-Type':'application/json'});
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
            }));
        res.end();
    }
    else{
        res.writeHead(404,{'content-Type':'text/plain'})
        res.write('Page was not found');
        res.end();
    }
}

module.exports = httpServer;