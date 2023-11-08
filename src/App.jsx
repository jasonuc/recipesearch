import { useState } from 'react'

import Title from './components/Title'
import SearchAndSubmit from './components/SearchAndSubmit'
import CardsSection from './components/CardsSection'

function App() {
  
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [to, setTo] = useState(0)
  const [more, setMore] = useState(false)
  const [count, setCount] = useState()

  return (
    <div className=' flex flex-col items-center overflow-x-hidden h-screen bg-alabaster snap-y snap-mandatory scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-red-300'>
      <Title setInput={setInput} setResults={setResults} />
      <div className=' flex flex-col items-center w-[90%] flex-grow mt-5'>
        <SearchAndSubmit input={input} setInput={setInput} setResults={setResults} setTo={setTo} setMore={setMore} count={count} setCount={setCount} />
        <CardsSection results={results} setResults={setResults} more={more} setMore={setMore} input={input} to={to} setTo={setTo} count={count} setCount={setCount} />
      </div>
    </div>
  )
}

export default App
