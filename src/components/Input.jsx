import { Link } from "react-router-dom"

export function Heading({title}){
    return(
        <h1 className="text-3xl font-bold flex justify-center">{title}</h1>
    )
}
export function Subheading({title}){
    return(
        <p className="p-2 text-gray-600 flex justify-center">{title}</p>
    )
}
export function Input({type, placeholder, name, onchange}){
    return(
        <input type={type} placeholder= {placeholder} name={name} onChange={onchange} className="border-1 border-gray-400 w-full mb-2 p-2 rounded-sm"/>
    )
}
export function Label({htmlFor, title}){
    return(
        <label htmlFor={htmlFor} className="block mb-2 font-medium">{title}</label> 
    )
}
export function Button({type, title, onclick}){
    return(
        <button type={type} onClick={onclick} className="bg-green-800 w-full p-2 rounded-sm mt-1 font-medium text-xl text-amber-50">{title}</button>
    )
}

export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}