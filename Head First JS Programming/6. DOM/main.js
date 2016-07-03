function init () {
	var planet = document.getElementById("greenplanet");
	console.log(planet.innerHTML);
	planet.innerHTML = "Red Alert: hit by phaser fire!";

	// set the attribute to HTML elements by the method setAttribute
	// Use setAttribute to add a new or modify an existing attribute.
	planet.setAttribute("class", "redtext");
	
	// getAttribute - invoked to retrieve the value attribute of the HTML element.
	planet.getAttribute("class");
}

window.onload = init; // The window object will call the function associated with property onload, but only after the page is fully loaded.

