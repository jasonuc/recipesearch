const MY_APP_ID = import.meta.env.VITE_VERCEL_YOUR_APP_ID;
const MY_APP_KEY = import.meta.env.VITE_VERCEL_YOUR_APP_KEY;


async function fetchRecipes(mealName, setMore, setCount, setTo) {

  try {
    const response = await fetch(`https://api.edamam.com/search?q=${mealName}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`)
    const data = await response.json()
    const { hits, count, more} = data
    setMore(more)
    setTo(prev => prev + 11)
    setCount(count)
    return hits
  } catch (error) {
    throw new Error("ERROR!")
  }

}

export async function fetchRecipesMore(mealName, to, setMore, setCount) {

  try {
    const response = await fetch(`https://api.edamam.com/search?q=${mealName}&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}&to=${to}`)
    const data = await response.json()
    const { hits, count, more} = data
    console.log(hits, count, more)
    setMore(more)
    setCount(count)
    return hits
  } catch (error) {
    throw new Error("ERROR!")
  }

}

export default fetchRecipes;