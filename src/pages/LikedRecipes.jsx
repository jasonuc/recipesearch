import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect } from "react"
import { auth } from "../firebase/firebase"

function LikedRecipes({ isAuth, logOut }) {
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  return (
    <div className=' flex flex-col items-center w-[90%] flex-grow mt-5'>
      <NavBar logOut={logOut} />
      <h1>{auth.currentUser.displayName}</h1>
    </div>
  )
}

export default LikedRecipes