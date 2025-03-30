import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { API_URL } from "../config";
import { toast } from "react-toastify";

export function SendMoney(){
    const [params] = useSearchParams();
    const f_Name = params.get('name');
    const f_letter = f_Name.split(' ')[0][0];    
    const [amount, setAmount] = useState(0);
    return(
        <>
            <div className="h-screen bg-green-100 flex justify-center items-center">
                <div className="shadow-2xl p-10 bg-white w-100 rounded-xl">
                    <MainHeading/>
                    <SubHeading f_Name = {f_Name} f_letter = {f_letter}/>
                    <Amount />
                    <Button onchange = {(e)=>{setAmount(e.target.value)}} params = {params} amount= {amount} api={API_URL}/>
                </div>
            </div>
        </>
    )
}
function MainHeading(){
    return(
        <>
            <p className="flex justify-center items-center font-bold text-4xl">SendMoney</p>
        </>
    )
}
function SubHeading({f_Name, f_letter}){
    return(
        <>
            <div className="flex mt-15">
                <div className="h-10 w-10 bg-green-800 p-5 flex justify-center items-center font-bold text-white rounded-full">
                    {f_letter.toUpperCase()}
                </div>
                <div className="flex items-center ml-2 font-semibold text-2xl">
                    {f_Name}
                </div>
            </div>
        </>
    )
}

function Amount(){
    return(
        <>
            <div>
                <p className="font-semibold mt-5 mb-2 ml-0">
                    Amount (in Rs)
                </p>
            </div>
        </>
    )
}

function Button({onchange, params, amount, api}){
    const navigate = useNavigate();
    const transferamount = async()=>{
        const loading = toast.loading(`Your transfer of ₹${amount} is being processed`);
        try{
            if(amount == 0){
                toast.update(loading, {
                    render: 'Enter some amount',
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                })
                return;
            }
            const res = await axios.post(api+'/api/v1/account/transfer',{
                to: params.get("id"),
                amount: Number(amount)
            },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            toast.update(loading,  {
                render: res.data.message,
                type: "success",
                isLoading: false,
                autoClose: 3000,
              })
              navigate('/dashboard');
        }catch(error){
            toast.update(loading,{
                    render: error.response.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                  }
                )
        }
    }
    return(
        <>
            <input type="text" placeholder="Enter amount" name="amount" className="border-gray-400 rounded-md border-1 p-2 w-full" onChange={onchange}/>
            <button type="submit" className="text-xl font-bold bg-green-400 w-full p-2 mt-5 text-white rounded-sm" onClick={transferamount}>
            Initiate Transfer
            </button>
        </>
    )
}