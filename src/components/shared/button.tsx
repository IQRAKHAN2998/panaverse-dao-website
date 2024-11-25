import { FC } from "react"

const Button :FC<{text:string}> = ({text}) => {
   
  return (
    <button className="bg-[#00616c] shadow-lg text-lg
     text-white px-8 py-3
     hover:scale-105 hover:shadow-lg duration-700 rounded-full 
     font-semibold ">{text}   </button>
  )
}

export default Button