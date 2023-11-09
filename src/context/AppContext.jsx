import { createContext, useState } from "react";

export const AppContext = createContext(null)

export function AppContextProvider({ children }) {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [to, setTo] = useState(0)
  const [more, setMore] = useState(false)
  const [count, setCount] = useState()

  let values = {
    input,
    setInput,
    results,
    setResults,
    to,
    setTo,
    more,
    setMore,
    count,
    setCount
  }


  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )

}