var http = require("http"),
	server;

server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello");
});

server.listen(3000);
console.log("Server listening on port 3000");