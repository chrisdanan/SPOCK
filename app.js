var http = require("http"),
	server;

server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "application/json"});
	res.write('{"test" : "working"}');
	res.end();
});

server.listen(3000);
console.log("Server listening on port 3000");
