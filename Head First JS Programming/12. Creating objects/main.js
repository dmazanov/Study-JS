var dog = {
	name: "Fido",
	breed: "Mixed",
	weight: 38
};

// using the constructors of objects:
// 1) first we create the constructor,
// 2) and then use it to create objects

//example:
// we need a constructor to create objects of dogs, specifically dogs with a given name, breed and weight. To this end, we define a function which is able to create the necessary objects
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++){
	var size = "small";
	if(dogs[i].weight > 10){
		size = "large";
	}
	console.log("Dog: " + dogs[i].name
				+ " is a " + size
				+ " " + dogs[i].breed);
}

//Exercise
function Duck(type, canFly) {
	this.type = type;
	this.canFly = canFly;
}

//Exercise
function Widget(partNo, size) {
	this.partNo = partNo;
	this.size = size;
}
function FormFactor(material, widget) {
	this.material = material;
	this.widget = widget;
}

var widgetA = new Widget(100, "large");
var widgetB = new Widget(101, "small");
var formFactorA = new FormFactor("plastic", widgetA);
var formFactorB = new FormFactor("metal", widgetB);


// In constructors you can also add methods
function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function(){
		if(this.weight > 25) {
			console.log(this.name + " says Woof!");
		} else {
			console.log(this.name + " says Yip!");
		}
	};
};

// test-drive method bark
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10 );
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++){
	dogs[i].bark();
}


// Exercise
function Coffee(roast, ounces) {
	this.roast = roast;
	this.ounces = ounces;
	this.getSize = function(){
		var size;
		if(this.ounces === 8){
			return "small";
		} else if(this.ounces === 12) {
			return "medium";
		} else if(this.ounces === 16){
			return "large";
		}
	};
	this.toString = function(){
		return ("You've ordered a " + this.getSize() + " " + this.roast + " coffee");
	};
}

// Test-drive code
var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());


// Exercise
function Car(make, model, year, color, passengers, convertible, mileage) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = passengers;
	this.convertible = convertible;
	this.mileage = mileage;
	this.started = false;
	this.start = function(){
		this.started = true;
	};
	this.stop = function(){
		this.started = false;
	};
	this.drive = function(){
		if(this.started) {
			console.log(this.make + " " + this.model + " goes zoom zoom!");
		} else {
			console.log("Start the engine first.");
		}
	};
};

// Test-drive
var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

var testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

var cars = [chevy, cadi, taxi, fiat, testCar];
for (var i = 0; i < cars.length; i++){
	cars[i].start();
	cars[i].drive();
	cars[i].drive();
	cars[i].stop();
}



// Convert arguments into an object literal:
function Car(params){
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;
	
	this.start = function() {
		this.started = true;
	};
	this.stop = function() {
		this.started = false;
	};
	this.drive = function(){
		if(this.started){
			console.log("Zoom zoom!");
		} else {
			console.log("You need to start the engine first.");
		}
	};
}

var cadiParams = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};
var cadi = new Car(cadiParams);

// Test-drive
/*
cadi.drive();
cadi.start();
cadi.drive();
cadi.stop();
cadi.drive();
*/

// The instanceof operator returns true if the object was created by the specified constructor.
if(cadi instanceof Car) {
	console.log("Congrats, it's a Car!");
}

// built-in date object
var now = new Date(); // Creates a new object representing the current date and time.

var dateString = now.toString();
var theYear = now.getFullYear(); // Returns the year from a date.
var theDayOfWeek = now.getDay(); // Returns the number of the day of the week represented by the date object, for example, 1 (Monday).

















