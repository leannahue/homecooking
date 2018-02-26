// chosen_recipe = localStorage["ingredientstr"];
// image_url = localStorage["image_url"];
// var chosen_recipe = localStorage.getItem('chosen_recipe');

// console.log(chosen_recipe);
// console.log(image_url);

// $location.search()

// console.log(location.search);
var queryString = decodeURIComponent(window.location.search);
// console.log(queryString);
queryString = queryString.substring(1);
var queries = queryString.split("&");
chosen_recipe = queries[0].split("=")[1];
image_url = queries[1].split("=")[1];
// console.log(chosen_recipe);

document.getElementById("recipe-name").innerHTML = chosen_recipe;
$('#food-picture').attr('src',image_url);
