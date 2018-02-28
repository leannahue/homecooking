var notshowing = true;

function auto() {
	if (notshowing) {
	document.getElementById("meal-mon-break").classList.toggle("show");
	document.getElementById("meal-tues-break").classList.toggle("show");
	document.getElementById("meal-wed-break").classList.toggle("show");
	document.getElementById("meal-thurs-break").classList.toggle("show");
	document.getElementById("meal-fri-break").classList.toggle("show");
	document.getElementById("meal-sat-break").classList.toggle("show");
	document.getElementById("meal-sun-break").classList.toggle("show");
	document.getElementById("meal-mon").classList.toggle("show");
	document.getElementById("meal-tues").classList.toggle("show");
	document.getElementById("meal-wed").classList.toggle("show");
	document.getElementById("meal-thurs").classList.toggle("show");
	document.getElementById("meal-fri").classList.toggle("show");
	document.getElementById("meal-sat").classList.toggle("show");
	document.getElementById("meal-sun").classList.toggle("show");
	document.getElementById("meal-mon-din").classList.toggle("show");
	document.getElementById("meal-tues-din").classList.toggle("show");
	document.getElementById("meal-wed-din").classList.toggle("show");
	document.getElementById("meal-thurs-din").classList.toggle("show");
	document.getElementById("meal-fri-din").classList.toggle("show");
	document.getElementById("meal-sat-din").classList.toggle("show");
	document.getElementById("meal-sun-din").classList.toggle("show");
	notshowing = false;
	}
}