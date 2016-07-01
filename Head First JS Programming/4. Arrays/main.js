
var flavors = ["vanila", "butterscotch", "lavender" , "chocolate", "cookie dough"];
var numFlavors = flavors.length;
document.write(numFlavors + "<br>");

var products = ["Choo Choo Chocolate", "Icy Mint" , "Cake Batter", "Bubblegum"];
var last = products.length - 1;
var recent = products[last];
document.write(recent + "<br>");



/*
function makePhrases () {
	var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
	
	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);
	
	var phrase = words1[rand1] + " " + words2[rand2] + " " +
				 words3[rand3];
	alert(phrase);
}
makePhrases();
*/



var scores = [60, 50, 60, 58, 54, 54,
			  58, 50, 52, 54, 48, 69,
			  34, 55, 51, 52, 44, 51,
			  69, 64, 66, 55, 52, 61,
			  46, 31, 57, 52, 44, 18,
			  41, 53, 55, 61, 51, 44];	  
var totalTests = scores.length;

function printAndGetHighScore(scores){
	var highScore = 0;
	var output;	
	
	for(var i = 0; i < scores.length; i++) {
		output = "Bubble solution #" + i + " score: " + scores[i] + "<br>";
		document.write(output);
			if(scores[i]> highScore){
				highScore = scores[i];
			}
	}
	return highScore;
}

var highScore = printAndGetHighScore(scores);
	document.write("Bubbles tests: " + totalTests + "<br>");
	document.write("Highest bubble score: " + highScore + "<br>");

function getBestResult(scores, highScore){
	var bestSolutions = [];
	for(var i = 0; i < scores.length; i++) {
		if(scores[i] == highScore) {
			bestSolutions.push(i);
		}
	}
	return bestSolutions;
}
	var bestSolutions = getBestResult(scores, highScore);

	document.write("Solution with the highest score: " + bestSolutions + "<br>");


	
var costs = [.25, .27, .25, .25, .25, .25,
			 .33, .31, .25, .29, .27, .22,
			 .31, .25, .25, .33, .21, .25,
			 .25, .25, .28, .25, .24, .22,
			 .20, .25, .30, .25, .24, .25,
			 .25, .25, .27, .25, .26, .29];
	
function getMostCostEffectiveSolution(scores, costs, highscore) {
	var cost = 100,
		index;
	for(var i = 0; i < scores.length; i++) {
		if(scores[i] == highScore){
			if(costs[i] < cost) {
				index = i;
				cost = cost[i];
			}
		}
	}
	return index;
}

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
document.write("Bubble Solution #" + mostCostEffective + " is the most cost effective");



/*-----------------------------------------------------------------*/

var products = ["Choo Choo Chocolate", "Icy Mint" , "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
for(var i = 0; i < hasBubbleGum.length; i++){
	if(hasBubbleGum[i]) {
		console.log(products[i] + " contains bubble gum");
	}
}



