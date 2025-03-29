import { useNavigate } from "react-router-dom"

export function Mainpage(){
    const navigate = useNavigate();
    return (
        <>
            
           <div className="bg-gradient-to-b from-green-100 to-green-400 h-screen w-full flex justify-center items-center">
                <div>
                    <h1 className="text-7xl font-bold text-amber-50 flex justify-center items-center" style={{ textShadow: '2px 2px rgba(0, 0, 0, 0.5)' }}>Welcome To Paytm Clone</h1>
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-green-800 pt-3 pb-3 px-5 m-2 rounded-2xl font-bold text-white" onClick={()=>{navigate('/signin')}}>Sign In</button>
                        <button className="bg-blue-50 text-black pt-3 pb-3 px-5 m-2 rounded-2xl font-bold hover:bg-green-800 border-1 border-green-800 hover:text-white" onClick={()=>{navigate('/signup')}}>Sign Up</button>
                    </div>
                </div> 
           </div>
        </>
    )
}
