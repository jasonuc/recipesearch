const MY_APP_ID = import.meta.env.VITE_VERCEL_YOUR_APP_ID;
const MY_APP_KEY = import.meta.env.VITE_VERCEL_YOUR_APP_KEY;

async function getRecipesArray(mealName) {
  const response = await fetch(`https://api.edamam.com/search?q=${mealName}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`)
  const data = await response.json()
  return data

}

async function fetchRecipes(mealName) {
  const results = await getRecipesArray(mealName)
  const { hits } = results
  return hits
}

export default fetchRecipes;