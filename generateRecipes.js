ingredientstr = localStorage["ingredientstr"]
var recipe_names = [];
var recipe_images = [];
var recipe_array = [];
var out = 0;

var F2Fkey_array = ["a424e4c0845023455bc2060bf36593a7","1bb35aab149d54449a70218d016a6d28","5c18504d00454741e843775329deee5d","6ba48d1ca050733e132d8cf997226f16","3a59d17ae007657cb656b23a25992dd4"];
var i = 1;
var F2Fkey = F2Fkey_array[i];
// function displayIngredients() {
// 	console.log("hello");
// 	console.log(ingredientstr);
//   console.log(typeof(ingredientstr))
// 	document.getElementById("ingredientList").innerHTML = ingredientstr;
// }
//
// displayIngredients();

function switchAPIkey() {
  console.log("Switching API keys...");
  if (i < F2Fkey_array.length) {
    i = i + 1;
    F2Fkey = F2Fkey_array[i];
  }
}

function generateList(str, names, images, F2Fkey) {

  // var recipe_array = [];
  var array = [];
  // var F2Fkey = "a424e4c0845023455bc2060bf36593a7";
  // var F2Fkey = "1bb35aab149d54449a70218d016a6d28";
  // var F2Fkey = "5c18504d00454741e843775329deee5d";
  // var F2Fkey = "6ba48d1ca050733e132d8cf997226f16";
  // var F2Fkey = "3a59d17ae007657cb656b23a25992dd4";

  $.ajax({
    url: "https://food2fork.com/api/search",
    type: "GET",
    data: {
      key: F2Fkey,
      q: ingredientstr,
      sort: "sort=r",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      },
      page: 1
    },
    contentType: 'application/json',
    success: function(response) {
      response = JSON.parse(response);
      // console.log("About to get each recipe...");
      // response["recipes"].forEach((dish) => {
      for(i = 0; i < response["recipes"].length; i++) {
        $.ajax({
          url: "https://food2fork.com/api/get",
          type: 'GET',
          data: {
            key: F2Fkey,
            rId: response["recipes"][i].recipe_id,
          },
          success: function(recipe_item) {
            // console.log('Success in finding one recipe!');
            // console.log(typeof recipe); string;
            recipe_item = JSON.parse(recipe_item);
            array.push(recipe_item.recipe);
            // console.log(recipe_item);
            names.push(recipe_item.recipe.title);
            // console.log(recipe_item.recipe.title);
            // console.log(names);
            images.push(recipe_item.recipe.image_url);
            // console.log(recipe_array);
            // recipe_array = recipe_array.concat(recipe);
          },
          error: function(error) {
            console.log("Guess we ran out of requests.");
            console.log(error);
            // switchAPIkey();
          }
        })
      }
      // integrateRecipes();
    },
    error: function(xhr) {
      console.log("ERROR!!!", xhr);
    }
  }).done(() => {

    // $('.recipes').html(finish_page);
  })
  return [array, names, images];
}

function integrateRecipes(names, images, biglist) {
  // console.log(names.length);
  if (names.length != 0) {
    text = '<div class="row">';
    for(var i = 0; i < names.length; i++){
      // console.log('recipe key:', i);
      console.log("Creating div for " + names[i] + " at index " + i);
      if (i % 3 == 0 && i != 0) { // rows have 3 things each
        text = text + '</div><div class="row">'; // start a new row
      }
      text = text + '<div class="col-sm-4"><img onclick="choseRecipe(recipe_names[' + i + '],recipe_images[' + i + '])" class="recommended-recipes-image" src=' + recipe_images[i] + '><span id="r1" class="recommended-recipes-name">' + recipe_names[i] + '</span><span class="recommended-recipes-cooktime"> ' + (Math.floor(Math.random() * 30) + 15) + ' minutes </span></div>';

    }
    text = text + '</div>';
  }
  document.getElementById("recipes").innerHTML = text;
}

[recipe_array, recipe_names, recipe_images] = generateList(ingredientstr, recipe_names, recipe_images, F2Fkey);
setTimeout(function(){
  console.log("////////////////////")
  console.log(recipe_array);
  console.log(recipe_names);
  console.log(recipe_images);
  if (recipe_names != []) {
    integrateRecipes(recipe_names, recipe_images,recipe_array);
  }
}, 7000);

// integrateRecipes(recipe_names, recipe_images);
// recipe_names = ["Beef-Pesto Panini"]
// recipe_images = ["https://images-gmi-pmc.edge-generalmills.com/f1a87202-9df0-40eb-a627-71d10c1c5bd8.jpg"]
// integrateRecipes();



function choseRecipe(chosen_recipe, image_url, index, biglist) {
  // console.log(recipe_names);
  // console.log(index);
  // var chosen_recipe = recipe_names[index];
  // var image_url = recipe_images[index];
  // localStorage.setItem('chosen_recipe', chosen_recipe);
  // localStorage["chosen_recipe"] = chosen_recipe;
  // localStorage["image_url"] = image_url;
  // var ingredients = biglist[index].recipe.ingredients;
  console.log("choseRecipe function was called");
  var chosen_recipe = chosen_recipe;
  var image_url = image_url;
  var queryString = "?para1=" + chosen_recipe + "^para2=" + image_url;
  window.location.href = "recipe.html" + queryString;
  // console.log(window.location);
  // localStorage["ingredientstr"] = chosen_recipe;
}

function loadingBar() {
  var elem = document.getElementById("progressBar");
  (document.getElementsByClassName("container")[1]).style.opacity = 0;
  var width = 1;
  var id = setInterval(frame, 70);
  var done = 0;
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      done = 1;
      console.log("Done loading!");
    } else {
      width++;
      elem.style.width = width + '%';
    }
    if (done == 1) {
      switchContainer();
      console.log("Changing to switchContainer");
    }
  }
}

loadingBar();

function switchContainer() {
  var firstContainer = document.getElementById("over-container");
  var secondContainer = document.getElementById("under-container");
  var changeOne = setTimeout(first, 500);

  function first() {
  	firstContainer.style.opacity = 0;
  	firstContainer.style.animationName = "fadeInOut";
  	firstContainer.style.animationDelay = "8.5s";
  	firstContainer.style.animationDuration = "9s";
  	var changeTwo = setTimeout(second, 100);
  }

  function second() {
    (document.getElementsByClassName("container")[1]).style.opacity = 1;
    secondContainer.style.opacity = 1;
    // console.log("Under opacity " + secondContainer.style.opacity);
  	secondContainer.style.animationName = "fadeIn";
  	secondContainer.style.animationDelay = "8.5s";
  	secondContainer.style.animationDuration = "9s";
  	$('#over-container').css({display: 'none'})
    $('#under-container').css({display: 'inline'})

    // var fadeSecond = setInterval(fadeTwo, 2000);
  }

  // function fadeTwo() {
  //   secondContainer.style.opacity = 0;
  // 	secondContainer.style.animationName = "fadeInOut";
  // 	secondContainer.style.animationDelay = "8.5s";
  // 	secondContainer.style.animationDuration = "5s";
  //   var nextPage = setInterval(Page2, 500);
  // }
}
