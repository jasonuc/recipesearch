import SearchAndSubmit from '../components/SearchAndSubmit'
import CardsSection from '../components/CardsSection'
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home({ isAuth, logOut }) {
  
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  return (
    <div className=' flex flex-col items-center w-[90%] flex-grow mt-5 gap-y-2'>
      <SearchAndSubmit />
      <NavBar logOut={logOut} />
      <CardsSection />
    </div>
  )
}

export default Home