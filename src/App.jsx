import Title from './components/Title'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import LikedRecipes from './pages/LikedRecipes'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div className=' w-screen min-h-screen flex flex-col items-center overflow-x-clip snap-y snap-mandatory'>
      <Title />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/liked' element={<LikedRecipes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
