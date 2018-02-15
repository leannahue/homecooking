
var ingredients= [];
var nameList = "";

function additemveg() {
	var mylist= document.getElementById("droplistveg").value;
	ingredients.push(mylist);
	for (var I = 0; I < ingredients.length; I++)
    {
       nameList = "<li>" + ingredients[I] + "</li>";
     
    }
    document.getElementById("ingredientlist").innerHTML += nameList;
    console.log(ingredients);
	
	console.log(mylist);
	console.log(nameList);

}

function additemmeats() {
	var mylist= document.getElementById("droplistmeats").value;
	ingredients.push(mylist);
	for (var I = 0; I < ingredients.length; I++)
    {
       nameList = "<li>" + ingredients[I] + "</li>";
     
    }
    document.getElementById("ingredientlist").innerHTML += nameList;
    console.log(ingredients);
	
	console.log(mylist);
	console.log(nameList);

}
function additemdairy() {
	var mylist= document.getElementById("droplistdairy").value;
	ingredients.push(mylist);
	for (var I = 0; I < ingredients.length; I++)
    {
       nameList = "<li>" + ingredients[I] + "</li>";
     
    }
    document.getElementById("ingredientlist").innerHTML += nameList;
    console.log(ingredients);
	
	console.log(mylist);
	console.log(nameList);

}

function additemfruits() {
	var mylist= document.getElementById("droplistfruits").value;
	ingredients.push(mylist);
	for (var I = 0; I < ingredients.length; I++)
    {
       nameList = "<li>" + ingredients[I] + "</li>";
     
    }
    document.getElementById("ingredientlist").innerHTML += nameList;
    console.log(ingredients);
	
	console.log(mylist);
	console.log(nameList);

}

function addsearchitem() {
	input = document.getElementById("ingredient-input");
	input = input.value.substr(0,1).toUpperCase() + input.value.substr(1).toLowerCase();
	input = "<li>" + input + "</li>";
	document.getElementById("ingredientlist").innerHTML += input;

}