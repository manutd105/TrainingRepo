var recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ["cinnamon", "Cumin", "cocoa"]
};

console.log(recipe.title);
console.log("Servings: " + recipe.servings);
console.log("Ingredients:");

for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}