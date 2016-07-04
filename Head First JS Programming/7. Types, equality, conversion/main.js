// typeof - diagnostic tool for analysis of variables
var subject = "Just a string";
var probe = typeof subject;
console.log(probe);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
var test10 = null;
var test11 = NaN;

console.log(typeof test1); // string
console.log(typeof test2); // number
console.log(typeof test3); // boolean
console.log(typeof test4); // object
console.log(typeof test5); // object
console.log(typeof test6); // undefined
console.log(typeof test7); // object
console.log(typeof test8); // object
console.log(typeof test9); // function
console.log(typeof test10); // object
console.log(typeof test11); // Number

/* ----- How to use null ------- */
// - if you want to ensure that you get the full object
var header = document.getElementById("header");
if (header == null) {
	// There is no header — some serious problem!
}

//With null you can check that object exists or not.

var weather = document.getElementById("weatherDiv");
if(weather != null) {
	// Create content for the weather widget
}


/*-------------  NaN --------------*/
// NaN - Not a Number

//check numbers for NaN.
var myNum = "Test";
if(isNaN(myNum)) {
	myNum = 0;
}

// Exercise
if (99 == "99") {
console.log("A number equals a string!");
} else {
console.log("No way a number equals a string");
}

/*---- How is the transformation of the operands ---*/
/* 1) Compare number with string
 Example:
 99 == "vanilla" 
         /
 99 == NaN
     |
   false
*/

// 2) Comparing Boolean values with any other type
/* 
- with number (true => 1, false => 0):
 1 == true
       /
 1 == 1
    |
  true
*/

/*
- with string:
 "1" == true
         /
 "1" == 1 
  |
  1 == 1
     |
	true
*/


// 3) Compare null with undefined
/*
 undefined == null
            |
		   true
*/

// 4) 
/*
 1 == ""
      /
 1 == 0
    |
   false
*/


//more examples of type conversion
var addi = 3 + "4";  // "34"
var plusi = "4" + 3; // "43"
var multi = 3 * "4"; // 12
var divi = 80 / "10"; // 8
var mini = "10" - 5; //5
var order = 1 + 2 + " pizzas"; // "3 pizzas" 

var num = 3 + Number("4"); // convert the string to a number and put it with another number


// Exercise
function findCarInLot(car) {
	for (var i = 0; i < lot.length; i++) {
		if (car === lot[i]) {
			return i;
		}
	}
	return -1;
}

var chevy = {
	make: "Chevy",
	model: "Bel Air"
};
var taxi = {
	make: "Webville Motors",
	model: "Taxi"
};
var fiat1 = {
	make: "Fiat",
	model: "500"
};
var fiat2 = {
	make: "Fiat",
	model: "500"
};

var lot = [chevy, taxi, fiat1, fiat2];

var loc1 = findCarInLot(fiat2); //3
var loc2 = findCarInLot(taxi);  //1
var loc3 = findCarInLot(chevy); //0
var loc4 = findCarInLot(fiat1); //2

















