/*
 *Names: Yuri Van Steenburg
 		 Christopher Dancarlo Danan
 *Created: March 18, 2015
 *Modified: March 18, 2015
 *Purpose: It's Rock, Paper, Scissors, Lizard, Spock!!!
 *References:
  Dennis Valbuena
  Sarah Lee
  Mario Andrade
  samkass.com/theories/RPSSL.html
 */

var http = require("http"),
	server;

function randomChoice(){
	var choices = ["rock", "paper", "scissors", "lizard", "spock"],
		random = Math.floor(Math.random() * 5);

	return choices[random];
}

function getPost(req, res){
	//res.write('{"test" : "hello_world!"}');
	console.log(req.url);
	if(req.url === "/play/rock"){
		console.log("Client chose rock");
		res.write('{"choice" : "rock"}');
		result("rock");
	} else if(req.url === "/play/paper"){
		console.log("Client chose paper");
		res.write('{"choice" : "paper"}');
		result("paper");
	} else if(req.url === "/play/scissors"){
		console.log("Client chose scissors");
		res.write('{"choice" : "scissors"}');
		result("scissors");
	} else if(req.url === "/play/lizard"){
		console.log("Client chose lizard");
		res.write('{"choice" : "lizard"}');
		result("lizard");
	} else if(req.url === "/play/spock"){
		console.log("Client chose Spock");
		res.write('{"choice" : "spock"}');
		result("spock");
	} else{
		res.write('{"error" : "please put correct url"}');
		console.log("Client chose invalid url");
	}
}

function result(playerChoice){
	var serverChoice = randomChoice();
	console.log("PLAYER CHOICE: " + playerChoice);
	console.log("SERVER CHOICE: " + serverChoice);
	if(playerChoice === "rock"){
		//Player LOSE
		if(serverChoice === "spock" || serverChoice === "paper"){

		//Player WIN
		} else if(serverChoice === "lizard" || serverChoice === "scissors"){

		//TIE
		} else if(serverChoice === "rock"){

		}
	}
}

server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "application/json"});
	getPost(req, res);
	res.end();
});

server.listen(3000);
console.log("Server listening on port 3000");
