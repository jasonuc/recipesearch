import { useState } from 'react'

import Title from './components/Title'
import SearchAndSubmit from './components/SearchAndSubmit'
import CardsSection from './components/CardsSection'

function App() {
  
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div className=' flex flex-col items-center overflow-x-hidden h-screen bg-alabaster'>
      <Title />
      <div className=' flex flex-col items-center w-[90%] flex-grow mt-5'>
        <SearchAndSubmit input={input} setInput={setInput} setResults={setResults} />
        <CardsSection results={results} />
      </div>
    </div>
  )
}

export default App
