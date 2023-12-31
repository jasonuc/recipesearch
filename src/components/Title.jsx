/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Title() {

    const { setInput, setResults, setMore } = useContext(AppContext)

    const handleClick = () => {
        setInput("")
        setResults([])
        setMore(false)
    }

    return (
        <div className=" snap-start border-b-2 border-b-terracotta border-opacity-10 w-screen h-16 md:h-20 pt-2 pb-5 shadow-md flex items-center justify-center sticky top-0 left-0 font-Agbalumo z-20 bg-alabaster">
            <button onClick={handleClick}><h1 className=" text-3xl tracking-widest md:text-5xl font-bold text-center text-terracotta">Recipe Search</h1></button>
        </div>
    )
}

export default Title;