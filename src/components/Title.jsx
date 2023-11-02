/* eslint-disable react/prop-types */

function Title({ setInput, setResults }) {

    const handleClick = () => {
        setInput("")
        setResults([])
    }

    return (
        <div className=" w-screen h-24 pt-2 pb-5 shadow-md flex items-center justify-center sticky top-0 left-0 font-Agbalumo z-20 bg-alabaster">
            <button onClick={handleClick}><h1 className=" text-3xl tracking-widest md:text-5xl font-bold text-center text-terracotta">Recipe Search</h1></button>
        </div>
    )
}

export default Title;