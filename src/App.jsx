import Title from './components/Title'
import SearchAndSubmit from './components/SearchAndSubmit'
import CardsSection from './components/CardsSection'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className=' w-screen min-h-screen flex flex-col items-center overflow-x-clip snap-y snap-mandatory'>
      <Title />
      <div className=' flex flex-col items-center w-[90%] flex-grow mt-5'>
        <SearchAndSubmit />
        <CardsSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
