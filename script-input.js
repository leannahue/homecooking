
var ingredients= [];
var nameList = "";
var ingredientstr = "";

function add_close() {
	var myNodelist = document.getElementsByTagName("li");
	var i;

	for (i = 0; i < myNodelist.length; i++) {
		var check_exist = document.getElementById('x_close' + i)
		if(!myNodelist[i].contains(check_exist)) {
			var span = document.createElement("SPAN");
			span.setAttribute('id', 'x_close' + i);
			var txt = document.createTextNode("\u00D7");
			span.className = "close";
			span.appendChild(txt);
			myNodelist[i].appendChild(span);
		}
	}

	// Click on a close button to hide the current list item
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		var string = div.textContent.slice(0, -1);
		var remove_index = ingredients.indexOf(string);
		ingredients.splice(remove_index, 1);
		div.style.display = "none";
	}
	}
}


function additemveg(mylist) {
	var alreadyIn = "false";
	// var mylist= document.getElementById("droplistveg").value;
	// var mylist = document.getElementById("veg").innerHTML;
	// var mylist = document.getElementsByClassName("veg").value;

	console.log(mylist);
	// var mylist = $('.droplistveg:checked').val();
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
	// document.getElementById("droplistveg").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);
	add_close()
}

function additemmeats(mylist) {
	var alreadyIn = "false";
	// var mylist= document.getElementById("droplistmeats").value;
	// var mylist = document.getElementById("meat").innerHTML;

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
	// document.getElementById("droplistmeats").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);
	add_close()
}
function additemdairy(mylist) {
	var alreadyIn = "false";
	// var mylist= document.getElementById("droplistdairy").value;
	// var mylist = document.getElementById("dairy").innerHTML;

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
	// document.getElementById("droplistdairy").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);
	add_close()
}

function additemfruits(mylist) {
	var alreadyIn = "false";
	// var mylist= document.getElementById("droplistfruits").value;
	// var mylist = document.getElementById("fruit").innerHTML;

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
	// document.getElementById("droplistfruits").value = "Select";
	console.log("mylist: " + mylist);
	console.log("nameList: " + nameList);
	add_close()
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
	add_close()
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

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// for (var i = 0; i < ingredientstr.length; i++) {
// 	ingredientstr[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

function showVeg() {
    document.getElementById("dropdown-veg").classList.toggle("show");
}

function showMeats() {
    document.getElementById("dropdown-meats").classList.toggle("show");
}

function showDairy() {
    document.getElementById("dropdown-dairy").classList.toggle("show");
}

function showFruits() {
    document.getElementById("dropdown-fruits").classList.toggle("show");
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



document.getElementById("defaultOpen").click();
