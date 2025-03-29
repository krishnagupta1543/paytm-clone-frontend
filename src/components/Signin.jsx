import { useState } from "react";
import { Heading, Subheading, Input, Label, Button, BottomWarning } from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export function Signin(){
    // const API_URL = import.meta.env.VITE_API_URL;
    // const api = API_URL;
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const api = API_URL;
    return(
        <>
            <div className="bg-green-100 h-screen flex justify-center items-center">
                <div className="bg-amber-50 p-5 col-span-1 rounded-2xl">
                    <Heading title={"Sign In"} />
                    <Subheading title={"Enter your credentials to access your account"}/>
                    <Label htmlFor={"email"} title={"Username"}/>
                    <Input type={"email"} placeholder={"robertdoe@example.com"} name={"email"} onchange = {(e)=>{
                        setuserName(e.target.value)
                    }}/>
                    <Label htmlFor={"password"} title={"Password"}/>
                    <Input type={"password"} placeholder={"robertdoe@123"} name={"password"} onchange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Button type="submit" title="Signin" onclick={async()=>{
                        if(userName == "" || password == ""){
                            {preventError()}
                            return
                        }
                        const res = await axios.post(api+'/api/v1/user/signin', {
                            userName: userName,
                            password: password
                        })
                        localStorage.setItem("token", res.data.token);
                        // {console.log(res.data)}
                        navigate('/dashboard')
                    }}/>
                    <BottomWarning label={"Don't have account ?"} buttonText={"signup"} to={"/signup"}/>
                </div>
            </div>
         
        </>
    )
}
function preventError(){
    alert("enter valid details")
}