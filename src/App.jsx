import Title from './components/Title'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import LikedRecipes from './pages/LikedRecipes'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase/firebase'

function App() {

  const [ isAuth, setIsAuth ] = useState(localStorage.getItem('isAuth'))
  const navigate = useNavigate()

  const logOut = async () => {
    await signOut(auth)
    localStorage.clear()
    setIsAuth(false)
    navigate('/login')
  }

  
  return (
    <div className=' w-screen min-h-screen flex flex-col items-center overflow-x-clip snap-y snap-mandatory'>
      <Title />
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} logOut={logOut} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/liked' element={<LikedRecipes isAuth={isAuth} logOut={logOut} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
