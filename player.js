var Board = require('./board.js');


function Player(name){
	this.name = name;
	
	this.board = new Board();

	this.loses = false;
	this.wins = false; 

	this.offenceBoard = new Board();

	this.hasNoShips = function(enemyBoard){

		for(i=0;i<10; i++){
			for(j=0; j<10; j++){
				ship = enemyBoard[i][j];	
				if(ship.hasOwnProperty("name")){
					return false; 
				}
			}
		}
		this.wins = true; 
		return true; 
	}

	this.offence = function(x,y,enemyBoard){
    	ship = enemyBoard[x][y];
    	
    	if(ship.hasOwnProperty("name"))
    	{
    		ship.hit();
    		enemyBoard[x][y] = 'hit'; 
    		this.offenceBoard.board[x][y] = 'hit';
    	}
    	else
    	{
    		enemyBoard[x][y] = 'miss';
    		this.offenceBoard.board[x][y] = 'miss';
    	}
    	this.hasNoShips(enemyBoard); 
    }

}

module.exports = Player; 


