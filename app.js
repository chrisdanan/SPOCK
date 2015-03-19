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
  Calvin 
  samkass.com/theories/RPSSL.html
 */

var http = require("http"),
	server,
	wins = 0,
	losses = 0,
	ties = 0;

//Purpose: Make the server choose a random choice.
function randomChoice(){
	var choices = ["rock", "paper", "scissors", "lizard", "spock"],
		random = Math.floor(Math.random() * 5);

	return choices[random];
}

//Purpose: Determine what choice player chose through the request's URL.
function getPost(req, res){
	//res.write('{"test" : "hello_world!"}');
	console.log(req.url);
	if(req.url === "/play/rock"){
		//console.log("Client chose rock");
		//res.write('{"choice" : "rock"}');
		result("rock", req, res);
	} else if(req.url === "/play/paper"){
		//console.log("Client chose paper");
		//res.write('{"choice" : "paper"}');
		result("paper", req, res);
	} else if(req.url === "/play/scissors"){
		//console.log("Client chose scissors");
		//res.write('{"choice" : "scissors"}');
		result("scissors", req, res);
	} else if(req.url === "/play/lizard"){
		//console.log("Client chose lizard");
		//res.write('{"choice" : "lizard"}');
		result("lizard", req, res);
	} else if(req.url === "/play/spock"){
		//console.log("Client chose Spock");
		//res.write('{"choice" : "spock"}');
		result("spock", req, res);
	} else{
		res.write('{"error" : "please put correct url"}');
		console.log("Client chose invalid url");
	}
}

//Purpose: Calculate the results of the game.
function result(playerChoice, req, res){
	var serverChoice = randomChoice();
	console.log("PLAYER CHOICE: " + playerChoice);
	console.log("SERVER CHOICE: " + serverChoice);
	if(playerChoice === "rock"){
		//Player LOSE
		if(serverChoice === "spock" || serverChoice === "paper"){
			losses++;
			console.log("******************************");
			console.log("Lose");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "loss", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		//Player WIN
		} else if(serverChoice === "lizard" || serverChoice === "scissors"){
			wins++;
			console.log("******************************");
			console.log("Win");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "win", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		//TIE
		} else if(serverChoice === "rock"){
			ties++;
			console.log("******************************");
			console.log("Tie");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "tie", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		}
	} else if(playerChoice === "paper"){
		//Player LOSE
		if(serverChoice === "scissors" || serverChoice ==="lizard"){
			losses++;
			console.log("******************************");
			console.log("Lose");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "loss", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		//Player WIN
		} else if(serverChoice === "spock" || serverChoice ==="rock"){
			wins++;
			console.log("******************************");
			console.log("Win");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "win", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		//TIE
		} else if(serverChoice === "paper"){
			ties++;
			console.log("******************************");
			console.log("Tie");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "tie", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		}
	} else if(playerChoice === "scissors"){
		if(serverChoice === "rock" || serverChoice ==="spock"){
			losses++;
			console.log("******************************");
			console.log("Lose");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "loss", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		} else if(serverChoice === "paper" || serverChoice === "lizard"){
			wins++;
			console.log("******************************");
			console.log("Win");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "win", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		} else if(serverChoice === "scissors"){
			ties++;
			console.log("******************************");
			console.log("Tie");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "tie", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		}
	} else if(playerChoice === "lizard"){
		if(serverChoice === "rock" || serverChoice === "scissors"){
			losses++;
			console.log("******************************");
			console.log("Lose");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "loss", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		} else if(serverChoice === "paper" || serverChoice === "spock"){
			wins++;
			console.log("******************************");
			console.log("Win");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "win", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		} else if(serverChoice === "lizard"){
			ties++;
			console.log("******************************");
			console.log("Tie");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "tie", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		}
	} else if(playerChoice === "spock"){
		if(serverChoice === "lizard" || serverChoice === "paper"){
			losses++;
			console.log("******************************");
			console.log("Lose");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "loss", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		} else if(serverChoice === "rock" || serverChoice === "scissors"){
			wins++;
			console.log("******************************");
			console.log("Win");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "win", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
		} else if(serverChoice === "spock"){
			ties++;
			console.log("******************************");
			console.log("Tie");
			console.log("Number of losses: " + losses);
			console.log("Number of wins: " + wins);
			console.log("Number of ties: " + ties);
			console.log("******************************");
			res.write('{"outcome": "tie", "wins": "' + wins + '", "losses": "' + losses + '", "ties": "' + ties + '"}');
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
