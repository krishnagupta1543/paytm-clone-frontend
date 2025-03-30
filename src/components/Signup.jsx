import { useState } from "react";
import { Input, Label, Button, BottomWarning, Heading, Subheading } from "./Input";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { API_URL } from "../config";
import { toast, Bounce } from 'react-toastify';
export function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const api = API_URL;
    const handlingSignup = async()=>{
        if(firstName == "" || lastName == "" || email == "" || password == ""){
            preventError()
            return
        }
       const loadingToast = toast.loading("⏳ Creating your account...");
       try{
        const res = await axios.post(api+'/api/v1/user/signup',{
            userName: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        })
        toast.update(loadingToast,  {
            render: "🎉 Account created successfully! ",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          })
        localStorage.setItem("token", res.data.token)
        navigate('/dashboard')
       }catch(error){
        toast.update(loadingToast,  {
            render: error.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
       }
    }
    return(
        <>
            <div className="bg-green-100 h-screen flex justify-center items-center ">
                <div className="bg-white p-5 col-span-1 rounded-2xl">
                    <Heading title={"Sign Up"} />
                    <Subheading title={"Enter your information to create an account"}/>
                        <Label htmlFor={"name"} title={"First Name"}/> 
                        <Input type={"text"} placeholder={"Robert"} name={"name"}  onchange={(e)=>{
                            setFirstName(e.target.value)
                        }}/> 
                        <Label htmlFor={"lastname"} title={"Last Name"} /> 
                        <Input type={"text"} placeholder={"Doe"} name={"lastname"}  onchange={(e)=>{
                            setLastName(e.target.value)
                        }} /> 
                        <Label htmlFor={"email"} title={"Email"}/> 
                        <Input type={"text"} placeholder={"robertdoe@example.com"} name={"email"}  onchange={(e)=>{
                            setEmail(e.target.value)
                        }} /> 
                        <Label htmlFor={"password"} title={"Password"}/> 
                        <Input type={"password"} placeholder={"Password"} name={"password"}  onchange={(e)=>{
                            setPassword(e.target.value)
                        }} /> 
                        <Button type={"submit"} title={"sigup"}
                            onclick={handlingSignup}
                        />
                        <BottomWarning label={"Already have an account? "} buttonText={"signin"} to={"/signin"}/>
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