import { useState } from 'react'

function Footer() {

    const [ message, setMessage ] = useState("Created with ❤️ by Jason")

    const handleMouseEnter = () => {
      setMessage("Return to top ⬆️")
    }

    const handleMouseLeave = () => {
      setMessage("Created with ❤️ by Jason")
    }

  return (
    <div className='w-[100%] font-Agbalumo text-sm border-t-2 flex justify-center items-center opacity-60 hover:opacity-95 text-terracotta mt-4 border-opacity-10 border-terracotta h-[2.5rem]'>
        <a href="#top" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{message}</a>
    </div>
  )
}

export default Footer