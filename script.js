
var ingredients= [];
var nameList = "";
var ingredientstr = "";

function additemveg() {
	var alreadyIn = "false";
	var mylist= document.getElementById("droplistveg").value;

	for (var I = 0; I < (ingredients.length + 1); I++) {
		nameList = "<li>" + mylist + "</li>";
		if (mylist == ingredients[I]) {
			alreadyIn = "true";
		}
	}
	if (alreadyIn == "false") {
		document.getElementById("ingredientlist").innerHTML += nameList;
		ingredients.push(mylist);
	}
  console.log("Ingredients: " + ingredients);
	document.getElementById("droplistveg").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);

}

function additemmeats() {
	var alreadyIn = "false";
	var mylist= document.getElementById("droplistmeats").value;

	for (var I = 0; I < (ingredients.length + 1); I++) {
		nameList = "<li>" + mylist + "</li>";
		if (mylist == ingredients[I]) {
			alreadyIn = "true";
		}
	}
	if (alreadyIn == "false") {
		document.getElementById("ingredientlist").innerHTML += nameList;
		ingredients.push(mylist);
	}
  console.log("Ingredients: " + ingredients);
	document.getElementById("droplistmeats").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);

}
function additemdairy() {
	var alreadyIn = "false";
	var mylist= document.getElementById("droplistdairy").value;

	for (var I = 0; I < (ingredients.length + 1); I++) {
		nameList = "<li>" + mylist + "</li>";
		if (mylist == ingredients[I]) {
			alreadyIn = "true";
		}
	}
	if (alreadyIn == "false") {
		document.getElementById("ingredientlist").innerHTML += nameList;
		ingredients.push(mylist);
	}
  console.log("Ingredients: " + ingredients);
	document.getElementById("droplistdairy").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);

}

function additemfruits() {
	var alreadyIn = "false";
	var mylist= document.getElementById("droplistfruits").value;

	for (var I = 0; I < (ingredients.length + 1); I++) {
		nameList = "<li>" + mylist + "</li>";
		if (mylist == ingredients[I]) {
			alreadyIn = "true";
		}
	}
	if (alreadyIn == "false") {
		document.getElementById("ingredientlist").innerHTML += nameList;
		ingredients.push(mylist);
	}
  console.log("Ingredients: " + ingredients);
	document.getElementById("droplistfruits").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);

}

function enterReturn(event) {
	// console.log(event);
	var enterKey = 13;
	if (event.keyCode == enterKey) {
		addsearchitem();
	}
}

function addsearchitem() {
	input = document.getElementById("ingredient-input");
	input = input.value.substr(0,1).toUpperCase() + input.value.substr(1).toLowerCase();
	input = "<li>" + input + "</li>";
	document.getElementById("ingredientlist").innerHTML += input;
	document.getElementById("ingredient-input").value = "";
}

function nextPage() {
	for (var i = 0; i < ingredients.length; i++) {
		if (i == ingredients.length - 1) {
			ingredientstr = ingredientstr + ingredients[i];
		} else {
			ingredientstr = ingredientstr + ingredients[i] + ", ";
		}
	}
	console.log(ingredientstr);
	localStorage["ingredientstr"] = ingredientstr;
}
