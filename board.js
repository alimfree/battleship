var ship = require('./ship.js');

Board = function(){
	this.board = [
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				  ['','','','','','','','','',''],
				]

    this.placeShip = function(ship){

        if(this.shipFits(ship)){
            for(i=0; i<ship.size; i++){
                if(ship.orientation === 'horizontal'){
                    this.board[ship.x+i][ship.y] = ship;
                }
                else{
                    this.board[ship.x][ship.y+i] = ship; 
                }
            }    
        }
        else{
            ship.x = Math.floor(Math.random() * 10); 
            ship.y = Math.floor(Math.random() * 10); 
            this.placeShip(ship);
        }
    }

    this.shipFits = function(ship){
        if(ship.x+ship.size > 9 )
            return false;
        if(ship.y+ship.size > 9)
            return false;
        if(ship.orientation == 'horizontal'){
            for(i=0; i <ship.size;i++ ){
                if(this.board[ship.x+i][ship.y] !== '')
                    return false;    
                
            }            
        }
        else{
            for(i=0; i <ship.size;i++ ){
                if(this.board[ship.x][ship.y+i] !== '')
                    return false;    
                
            }   
        }
        return true;
    }
    
}	

module.exports = Board; 