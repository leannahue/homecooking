ingredientstr = localStorage["ingredientstr"]
var recipe_names = [];
var recipe_images = [];

// function displayIngredients() {
// 	console.log("hello");
// 	console.log(ingredientstr);
// 	document.getElementById("ingredientList").innerHTML = ingredientstr;
// }
//
// displayIngredients();

var recipe_array = [];
// var F2Fkey = "a424e4c0845023455bc2060bf36593a7";
var F2Fkey = "1bb35aab149d54449a70218d016a6d28";

// $.ajax({
//   url: "http://food2fork.com/api/search",
//   type: "GET",
//   data: {
//     key: F2Fkey,
//     q: ingredientstr,
//     sort: "sort=r",
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
//     },
//     page: 1
//   },
//   contentType: 'application/json',
//   success: function(response) {
//     response = JSON.parse(response);
//     // console.log("About to get each recipe...");
//     // response["recipes"].forEach((dish) => {
//     for(i = 0; i < response["recipes"].length; i++) {
//       $.ajax({
//         url: "http://food2fork.com/api/get",
//         type: 'GET',
//         data: {
//           key: F2Fkey,
//           rId: response["recipes"][i].recipe_id,
//         },
//         success: function(recipe_item) {
//           // console.log('Success in finding one recipe!');
//           // console.log(typeof recipe); string;
//           recipe_item = JSON.parse(recipe_item);
//           recipe_array.push(recipe_item);
//           // console.log(recipe_item);
//           recipe_names.push(recipe_item.recipe.title);
//           recipe_images.push(recipe_item.recipe.image_url);
//           // console.log(recipe_array);
//           // recipe_array = recipe_array.concat(recipe);
//         },
//         error: function(error) {
//           console.log(error);
//         }
//       })
//     }
//   },
//   error: function(xhr) {
//     console.log("ERROR!!!", xhr);
//   }
// }).done(() => {
//   console.log(recipe_array);
//   // console.log(recipe_array.length); // undefined
//   // console.log(typeof recipe_array); // object
//   // for (var i = 0; i < recipe_names.length; i++) {
//   //   // recipe_names[i] = recipe_names[i].replace(/&amp;/g,"&");
//   // }
//   console.log(recipe_names);
//   integrateRecipes();
//   // $('.recipes').html(finish_page);
// })

recipe_names = ["Beef-Pesto Panini"]
recipe_images = ["https://images-gmi-pmc.edge-generalmills.com/f1a87202-9df0-40eb-a627-71d10c1c5bd8.jpg"]
integrateRecipes();

function integrateRecipes() {
  // console.log("At least we entered the function...");
  // console.log(recipe_names);
  // console.log(recipe_names.length);
  text = '<div class="row">';
  for (var i = 0; i < recipe_names.length; i++) {
    console.log("Creating div for " + recipe_names[i] + " at index " + i);
    if (i % 3 == 0 && i != 0) { // rows have 3 things each
      text = text + '</div><div class="row">'; // start a new row
    }
    text = text + '<div class="col-sm-4"><img onclick="choseRecipe(' + i + ')" class="recommended-recipes-image" src=' + recipe_images[i] + '><span id="r1" class="recommended-recipes-name">' + recipe_names[i] + '</span><span class="recommended-recipes-cooktime"> ' + (Math.floor(Math.random() * 30) + 15) + ' minutes </span></div>';
  }
  document.getElementById("recipes").innerHTML = text;
}

function choseRecipe(index) {
  console.log(recipe_names);
  console.log(index);
  var chosen_recipe = recipe_names[index];
  var image_url = recipe_images[index];
  // localStorage.setItem('chosen_recipe', chosen_recipe);
  // localStorage["chosen_recipe"] = chosen_recipe;
  // localStorage["image_url"] = image_url;
  var chosen_recipe = chosen_recipe;
  var image_url = image_url;
  var queryString = "?para1=" + chosen_recipe + "&para2=" + image_url;
  window.location.href = "recipe.html" + queryString;
  console.log(window.location);
  // localStorage["ingredientstr"] = chosen_recipe;
}
