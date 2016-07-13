// Inheritance via prototype
function Robot(name, year, owner){
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = function(){
	
};
Robot.prototype.speak = function(){
	
};
Robot.prototype.makeCoffee = function(){
	
};
Robot.prototype.blinkLights = function(){
	
};

var robby = new Robot("Robby", 1956, "Dr.Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = function(){
	
};
robby.makeCoffee = function(){
	
};

rosie.cleanHouse = function(){

};


robby.makeCoffee();
robby.blinkLights();

rosie.cleanHouse();








