import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import RecipeCard from "../components/RecipeCard"
import { useEffect, useLayoutEffect, useState } from "react"
import { auth, likedRecipesRef } from "../firebase/firebase"
import { getDocs, query, where } from "firebase/firestore"

function LikedRecipes({ isAuth, logOut }) {

  const [likedRecipes, setLikedRecipes] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  useLayoutEffect(() => {
    if (isAuth) {
      const getMyLikedRecipes = async () => {
        try {
          const myLikedRecipes = query(likedRecipesRef, where("uid", "==", auth.currentUser.uid))
          const querySnapshot = await getDocs(myLikedRecipes)
          setLikedRecipes(querySnapshot.docs.map(recipe => ({
            ...recipe.data(),
            id: recipe.id
          })))
        } catch ({ code, message }) {
          console.error(`${code}: ${message}`)
        }
      }
      getMyLikedRecipes()
    }
  })

  return (
    <div className=' flex flex-col items-center w-[90%] flex-grow mt-5'>
      <NavBar logOut={logOut} />
      <h1 className="mt-5 text-xl md:text-2xl font-Agbalumo text-terracotta">{likedRecipes ? `Welcome back, ${auth.currentUser.displayName}! Here are your liked recipes:` : `Welcome back, ${auth.currentUser.displayName}! Go like some recipes 😊`}</h1>
      <div className="w-full flex-grow mt-3 flex flex-col justify-center items-center gap-4">
        <div className='w-full flex-grow mt-3 flex flex-col items-center justify-stretch lg:flex-row lg:flex-wrap lg:justify-between gap-y-4 mb-2'>
          {likedRecipes && likedRecipes.map((recipe) =>
            <RecipeCard key={recipe.id} id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} instructions={recipe.url} image={recipe.image} cuisineType={recipe.cuisineType} mealType={recipe.mealType} alreadyLiked={true} />
          )}
        </div>

      </div>
    </div>
  )
}

export default LikedRecipes