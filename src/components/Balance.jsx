/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { toast } from "react-toastify";

export function Balance() {
    const [balance, setBalance] = useState(0);
    const api = API_URL
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const res = await axios.get(api+'/api/v1/account/balance', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                setBalance(res.data.balance);
            } catch (error) {
                toast.error(error?.response?.data?.message  || "Something went wrong");
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="px-6 shadow flex w-full h-16">
            <p className="text-xl flex justify-center items-center font-medium">
                Your balance Rs {Math.round(balance).toLocaleString()}
            </p>
        </div>
    );
}
