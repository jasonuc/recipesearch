const MY_APP_ID = import.meta.env.VITE_VERCEL_YOUR_APP_ID;
const MY_APP_KEY = import.meta.env.VITE_VERCEL_YOUR_APP_KEY;


async function fetchRecipes(mealName) {

  try {
    const response = await fetch(`https://api.edamam.com/search?q=${mealName}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`)
    const data = await response.json()
    const { hits } = data
    return hits
  } catch (error) {
    throw new Error("ERROR!")
  }

}

export default fetchRecipes;