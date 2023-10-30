const YOUR_APP_ID = process.env.YOUR_APP_ID;
const YOUR_APP_KEY = process.env.YOUR_APP_KEY;

async function fetchRecipes(mealName) {
  const apiUrl = `https://api.edamam.com/search?q=${mealName}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      const recipes = [];
      for (let i = 0; i < data.hits.length; i++) {
        const hit = data.hits[i];
        const recipe = hit.recipe;
        const recipeObject = {
          name: recipe.label,
          ingredients: recipe.ingredients.map(ingredient => ingredient.text),
          instructions: recipe.url,
          image: recipe.image
        };
        recipes.push(recipeObject);
      }
      return recipes;
    } else {
      console.error('Error:', response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export default fetchRecipes;