
function Ship(size, name, orientation){

	this.size = size; 
	this.name = name;
	this.hits = size; 
	this.orientation = orientation; 

	this.x = Math.floor(Math.random() * 11); 
	this.y = Math.floor(Math.random() * 11); 	
	this.hit = function(){
		this.hits--; 
	}

	this.destroyed = function(){
		if(hits == 0) 
			return true;
		else
			return false;   
	}
}

module.exports = Ship;