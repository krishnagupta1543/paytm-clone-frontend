import { useState } from "react";
import { Heading, Subheading, Input, Label, Button, BottomWarning } from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { toast, Bounce } from 'react-toastify';
export function Signin(){
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const api = API_URL;
    const handlingSignin = async ()=>{
        if(userName === "" || password === ""){
            preventError()
            return
        }
        const loadingToast = toast.loading("⏳ Signing in... Please wait.");
        try{
            const res = await axios.post(api+'/api/v1/user/signin', {
                userName: userName,
                password: password
            })
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard')
            toast.update(loadingToast, {
                render: "🎉 Logged in successfully! Let's get started.",
                type: "success",
                isLoading: false,
                autoClose: 3000,
              });
        }catch(error){
            toast.update(loadingToast, {
                render: error.message,
                type: "error",
                isLoading: false,
                autoClose: 3000,
              });
        }
    }
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
                    <Button type="submit" title="Signin" onclick={handlingSignin}/>
                    <BottomWarning label={"Don't have account ?"} buttonText={"signup"} to={"/signup"}/>
                </div>
            </div>
        </>
    )
}
function preventError(){
    toast.error('enter valid details', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
}