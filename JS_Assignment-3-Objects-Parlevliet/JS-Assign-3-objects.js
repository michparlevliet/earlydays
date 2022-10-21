// OBJECT
var cookieRecipe = {
  cupsSugar: 1,
  cupsFlour: 2,
  numEggs: 2,
  ovenTemp: 350,
  howSweet: function(sweetness) {
    cookieRecipe.cupsSugar = parseInt(sweetness);
    alert("Your recipe will need " + cookieRecipe.cupsSugar + " cups of sugar")
  }
}

// INTERACTION
// Output to console:
console.log(cookieRecipe);
// Change one property:
changeFlour = prompt("How many cups of flour in this recipe?", cookieRecipe.cupsFlour);
cookieRecipe.cupsFlour = parseInt(changeFlour);
console.log(cookieRecipe);
// Change a second property:
changeTemp = prompt("What temperature are the cookies baked at?", cookieRecipe.ovenTemp);
cookieRecipe.ovenTemp = parseInt(changeTemp);
console.log(cookieRecipe);
// Output method:
changeSugar = prompt("How many cups of sugar do you want in your cookies?", cookieRecipe.cupsSugar);
cookieRecipe.howSweet(changeSugar);
//Final Recipe output:
console.log(cookieRecipe);