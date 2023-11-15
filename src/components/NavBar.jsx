import { Link } from "react-router-dom"

function NavBar({ logOut }) {

  return (
    <nav className="pt-2 w-full flex gap-x-5 justify-center items-center font-bold">
        <Link className=" bg-terracotta min-w-[7rem] px-4 py-1 flex justify-center items-center rounded-md text-white shadow-lg active:shadow-sm transition-all duration-300 ease-in-out " to="/">Home</Link>
        <Link className=" bg-terracotta min-w-[7rem] px-4 py-1 flex justify-center items-center rounded-md text-white shadow-lg active:shadow-sm transition-all duration-300 ease-in-out " to="/liked">❤️ Recipes</Link>
        <button onClick={logOut} className="bg-terracotta min-w-[7rem] px-4 py-1 flex justify-center items-center rounded-md text-white shadow-lg active:shadow-sm transition-all duration-300 ease-in-out ">Log out</button>
    </nav>
  )
}

export default NavBar