var Ship = require('./ship.js');
var Player = require('./player.js');
var Board = require('./board.js');
var prompt = require('prompt');

Game = function(){
	this.generate = function(){

		prompt.start();
		prompt.get(['name'], function(err, result){
			console.log('username: ' + result.name );

		}); 
	

		player1 = new Player('Ali');
		player2 = new Player('Alan');
		var p1a = new Ship(5, 'Aircraft carrier', 'horizontal'); 
		var p1b = new Ship(4, 'Battleship', 'vertical'); 
		var p1c = new Ship(3, 'Cruiser', 'vertical');
		var p1d1 = new Ship(2, 'Destroyer', 'horizontal');
		var p1d2 = new Ship(2, 'Destroyer', 'horizontal');
		var p1s1 = new Ship(1, 'Submarine', 'horizontal'); 
		var p1s2 = new Ship(1, 'Submarine', 'vertical');

		var p2a = new Ship(5, 'Aircraft carrier', 'horizontal'); 
		var p2b = new Ship(4, 'Battleship', 'vertical'); 
		var p2c = new Ship(3, 'Cruiser', 'vertical');
		var p2d1 = new Ship(2, 'Destroyer', 'horizontal');
		var p2d2 = new Ship(2, 'Destroyer', 'horizontal');
		var p2s1 = new Ship(1, 'Submarine', 'horizontal'); 
		var p2s2 = new Ship(1, 'Submarine', 'vertical');

		player1.board.placeShip(p1a);
		player1.board.placeShip(p1b);
		player1.board.placeShip(p1c);
		player1.board.placeShip(p1d1);
		player1.board.placeShip(p1d2);
		player1.board.placeShip(p1s1);
		player1.board.placeShip(p1s2); 

		player2.board.placeShip(p2a);
		player2.board.placeShip(p2b);
		player2.board.placeShip(p2c);
		player2.board.placeShip(p2d1);
		player2.board.placeShip(p2d2);
		player2.board.placeShip(p2s1);
		player2.board.placeShip(p2s2); 

		this.start(player1, player2);

//		player2.offence(3,5,player1.board.board);
//		console.log(player1.board);

	}

	this.start = function(player1, player2){	
		if(!player1.wins || !player2.wins){
			prompt.get(['x', 'y'], function(err, result){
				player1.offence( result.x,result.y,player2.board.board);
				x = Math.floor(Math.random() * 10);
				y = Math.floor(Math.random() * 10); 
				player2.offence( x,y, player1.board.board);	
			});
			//this.start(player1, player2);
		}
	}
}


game = new Game(); 

game.generate();