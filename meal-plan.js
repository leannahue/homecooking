var notshowing = true;

function auto() {
	if (notshowing) {
	document.getElementById("meal-mon").classList.toggle("show");
	document.getElementById("meal-tues").classList.toggle("show");
	document.getElementById("meal-wed").classList.toggle("show");
	document.getElementById("meal-thurs").classList.toggle("show");
	document.getElementById("meal-fri").classList.toggle("show");
	document.getElementById("meal-sat").classList.toggle("show");
	document.getElementById("meal-sun").classList.toggle("show");
	notshowing = false;
	}
}