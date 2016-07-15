// Inheritance via prototype
function Robot(name, year, owner){
	this.name = name;
	this.year = year;
	this.owner = owner;
}

Robot.prototype.maker = "ObjectRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function(){
	console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function(){
	this.errorMessage = "I appear to have a short circuit";
}
Robot.prototype.speak = function(){
	alert("warning warning!!!");
};
Robot.prototype.makeCoffee = function(){
	alert("Making coffee");
};
Robot.prototype.blinkLights = function(){
	alert("Blink blink!");
};


var robby = new Robot("Robby", 1956, "Dr.Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function(){
	alert("Fetching a coffee from Starbucks.");
};

rosie.cleanHouse = function(){
	alert("Cleaning! Spic and Span soon...");
};


rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();
console.log(robby.hasOwnProperty("errorMessage")); // true
console.log(rosie.hasOwnProperty("errorMessage")); //  false


robby.makeCoffee();
robby.blinkLights();

rosie.cleanHouse();

// override the toString method and write an implementation that creates a line specifically for objects Robot
Robot.prototype.toString = function(){
	return this.name + " Robot belonging to " + this.owner;
};

var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString());


//Exercise
function SpaceRobot(name, year, owner, homePlanet) {
	this.name = name;
	this.year = year;
	this.owner = owner;
	this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function() {
	alert(this.name + " says Sir, If I may venture an option...");
}

SpaceRobot.prototype.pilot = function() {
	alert(this.name + " says Thrusters? Are they important?");
}

var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);

var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();


// The properties of the Object that override is NOT RECOMMENDED:
// constructor
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable