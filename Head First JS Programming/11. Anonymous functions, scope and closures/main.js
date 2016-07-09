function handler() {
	alert("Yeah, that page loaded!");
}
window.onload = handler;

// anonymous function:
window.onload = function(){ 
	console.log("Yeah, that page loaded!");
};

window.onload = function() {
		var button = document.getElementById("bake");
		button.onclick = handleButton;
}

var cookies = {
	instructions: "Preheat oven to 350...",
	bake: function(time) {
		console.log("Baking the cookies.");
		setTimeout(done, time);
	}
};

function handleButton(){
	console.log("Time to bake the cookies.");
	cookies.bake(2500);
}
function done() {
	alert("Cookies are ready, take them out to cool.");
	console.log("Cooling the cookies.");
	setTimeout( function () {
		alert("Cookies are cool, time to eat!");
	}, 1000);
}


//another example of using anonymous function:
setTimeout( function() {
	alert("Time to take the cookies out of the oven");
}, 600000);


// Exercise
/**
	function vaccine(dosage) {
		if(dosage > 0){
			inject(dosage);
		}
	}
	
	administer(patient, vaccine, time);

**/
//Converting the code instead of the variable (in this case vaccine) to use an anonymous function expression.
/**
administer( patient, function(dosage){
	if(dosage > 0){
		inject(dosage);
	}
}, time);
**/


var migrating = true;
var fly = function(num) {
	var sound = "Flying";
	function wingFlapper() {
		console.log(sound);
	}
	for (var i = 0; i < num; i++) {
		wingFlapper();
	}
};
function quack(num) {
	var sound = "Quack";
	var quacker = function() {
		console.log(sound);
	};
	for (var i = 0; i < num; i++) {
		quacker();
	}
}
if (migrating) {
	quack(4);
	fly(4);
}

//Example 
var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
	function whereAreYou() {
		var justAVar = "Just an every day LOCAL";
		function inner() {
		  return justAVar;
		}
		return inner;
	}
var innerFunction = whereAreYou();
var result = innerFunction();
console.log(result);  //Just an every day LOCAL



//The use of closures to implement a counter
function makeCounter() {
	var count = 0;
	function counter() {
		count = count + 1;
		return count;
	}
	return counter;
}

var doCount = makeCounter();
console.log(doCount()); // 1
console.log(doCount()); // 2
console.log(doCount()); // 3


function setTimer(doneMessage, n) {
	setTimeout(function() {
		alert(doneMessage);   // OUCH!
	}, n);
	doneMessage = "OUCH!";
}
setTimer("Cookies are done!", 1000);




