import SearchAndSubmit from '../components/SearchAndSubmit'
import CardsSection from '../components/CardsSection'

function Home() {
  return (
    <div className=' flex flex-col items-center w-[90%] flex-grow mt-5'>
        <SearchAndSubmit />
        <CardsSection />
    </div>
  )
}

export default Home