import { FcGoogle } from "react-icons/fc"
import { auth, googleProvider } from "../firebase/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

function Login({ setIsAuth }) {

  const navigate = useNavigate()

  const userLogIn = async () => {
    const result = await signInWithPopup(auth, googleProvider)
    if (result) {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    }
  }

  return (
    <div className=" w-[90%] md:w-[50%] my-5 h-[10rem] flex flex-col items-center justify-center rounded-md shadow-lg">
      <h1 className="font-bold font-Agbalumo text-terracotta text-base md:text-2xl ">Sign In Using Exsisting Accounts</h1>
      <button onClick={userLogIn} className="flex text-terracotta h-12 w-[18rem] items-center justify-center border-2 rounded-md shadow-md active:shadow-sm active:scale-95 transition-all duration-300 ease-in-out mt-4 gap-x-3 font-bold font-sometypeMono">
        <FcGoogle size={25} />
        Sign In With Google
      </button>
    </div>
  )
}

export default Login