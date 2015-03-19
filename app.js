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
	server,
	wins = 0,
	losses = 0,
	ties = 0;

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
			console.log("Lose");
		//Player WIN
		} else if(serverChoice === "lizard" || serverChoice === "scissors"){
			console.log("Win");
		//TIE
		} else if(serverChoice === "rock"){
			console.log("Tie");
		}
	} else if(playerChoice === "paper"){
		//Player LOSE
		if(serverChoice === "scissors" || serverChoice ==="lizard"){
			console.log("Lose");
		//Player WIN
		} else if(serverChoice === "spock" || serverChoice ==="rock"){
			console.log("Win");
		//TIE
		} else if(serverChoice === "paper"){
			console.log("Tie");
		}
	} else if(playerChoice === "scissors"){
		if(serverChoice === "rock" || serverChoice ==="spock"){
			console.log("Lose");
		} else if(serverChoice === "paper" || serverChoice === "lizard"){
			console.log("Win");
		} else if(serverChoice === "scissors"){
			console.log("Tie");
		}
	} else if(playerChoice === "lizard"){
		if(serverChoice === "rock" || serverChoice === "scissors"){
			console.log("Lose");
		} else if(serverChoice === "paper" || serverChoice === "spock"){
			console.log("Win");
		} else if(serverChoice === "lizard"){
			console.log("Tie");
		}
	} else if(playerChoice === "spock"){
		if(serverChoice === "lizard" || serverChoice === "paper"){
			console.log("Lose");
		} else if(serverChoice === "rock" || serverChoice === "scissors"){
			console.log("Win");
		} else if(serverChoice === "spock"){
			console.log("Tie");
		}
	} else{
		console.log("Something went wrong");
		res.write('{"error": "playerChoice is invalid"}');
	}
}

server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type" : "application/json"});
	getPost(req, res);
	res.end();
});

server.listen(3000);
console.log("Server listening on port 3000");
