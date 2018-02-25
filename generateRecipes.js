ingredientstr = localStorage["ingredientstr"]
var recipe_names = [];

// function displayIngredients() {
// 	console.log("hello");
// 	console.log(ingredientstr);
// 	document.getElementById("ingredientList").innerHTML = ingredientstr;
// }
//
// displayIngredients();

var bigassarray = [];
var F2Fkey = "a424e4c0845023455bc2060bf36593a7";
// var F2Fkey = "1bb35aab149d54449a70218d016a6d28";

// console.log("Entered function!")
$.ajax({
  url: "http://food2fork.com/api/search",
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
        url: "http://food2fork.com/api/get",
        type: 'GET',
        data: {
          key: F2Fkey,
          rId: response["recipes"][i].recipe_id,
        },
        success: function(recipe) {
          console.log('Success in finding one recipe!');
          bigassarray.push(recipe);
        },
        error: function(error) {
          console.log(error);
        }
      })
    }
  },
  error: function(xhr) {
    console.log("ERROR!!!", xhr);
  }
}).done(() => {
  console.log(bigassarray);
})
// console.log(bigassarray[0]["recipe"]["title"]);
for (var i = 0; i < bigassarray.length; i++) {
  console.log("hello");
  console.log(bigassarray[i]["recipe"]["title"]);
  recipe_names = recipe_names.concat(bigassarray[i]["recipe"]["title"]);
}
