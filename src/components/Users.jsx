import { useEffect, useState } from "react"
import { Input } from "./Input"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { API_URL } from "../config"


export function Users(){
    const api = API_URL;
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")
    useEffect(()=>{
        const findUsers = async()=>{
            const res = await axios.get(api+'/api/v1/user/bulk',{
                params: {
                    filter: filter,
                    token: localStorage.getItem('token')
                }
            })
            setUsers(res.data.user);
        }
        findUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return(
        <>
            <div className="p-6">
                <p className="font-semibold block pb-2">Users</p>
                <Input type={"text"} placeholder={"Search users..."} name={"user"} onchange = {(e)=>{setFilter(e.target.value)}}/>
                {users.map((user)=>(
                    <li key={user._id} className="list-none"><User user={user}/></li>
                ))}
            </div>
        </>
    )
}
function User({user}){
    return(
        <>
            <div className="flex justify-between me-5 mt-5">
                <div className="flex gap-x-5">
                    <p className="bg-green-800 p-2 font-bold text-white rounded-full h-10 w-10 flex items-center justify-center">{user.firstName[0]}</p>
                    <p className=" flex items-center">{user.firstName +" "+ user.lastName}</p>
                </div>
                <div className="flex">
                    <Button user = {user}/>
                </div>
            </div>
        </>
    )
}
function Button({user}){
    const navigate  = useNavigate();
    return(
        <>
            <button type="submit" className="flex items-center bg-green-800 p-2 rounded-xl text-white font-semibold" onClick={()=>navigate("/send?id=" + user._id + "&name=" + user.firstName + " " + user.lastName)}>
                Send Money
            </button>
        </>
    )
}