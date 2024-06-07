"use client"
import "./page.css";
import { AudioPlayer } from 'react-audio-play';

import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import Razorpay from "razorpay"
import { redirectToDownload } from "@/lib/redirectFn"
import { Item } from "@radix-ui/react-dropdown-menu"

const page = () => {
    const { user } = useUser()
    const { id } = useParams()
    const [data, setData] = useState({} as any)
    const [orderId, setOrderId] = useState("")
    const [amount, setAmount] = useState(0)
    useEffect(() => {
        const getPreview = async () => {
            const response = await axios.post("/api/getpreview", { id })
            if (response) {
                console.log(response.data)
                setData(response.data)
                const res = await axios.post("/api/payment", { amount: response.data.price })
                if (res) {
                    console.log(res)
                    setOrderId(res.data.id)
                    setAmount(res.data.amount)
                    console.log("After everything server : " + res.data.amount)
                    console.log("After everything : " + amount)
                }
            }
        }
        getPreview()
    }, [])
    const options = {
        "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        "amount": amount,
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId,
        // "callback_url": `http://localhost:3000/dashboard/download/${id}`,
        "handler": async function () {
            console.log("Id is : " + id)
            const res = await axios.post("/api/updatepayment", { id })
            if (res) {
                console.log(res)
                toast.success("Payment Successful")
            }
            redirectToDownload(res.data._id)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const processPayment = () => {
        //@ts-ignore
        const razor = new window.Razorpay(options)
        razor.open()
        console.log("Razor : " + razor)
        razor.on('payment.success', function () {
            toast.success("Payment Successful")
            console.log("Payment Successful")
        })
    }
    return (
        <div className="bg-gray-900 h-screen">
            <div className=" flex items-center justify-center h-full" onContextMenu={(e) => e.preventDefault()}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-900 mb-4 flex items-center justify-center">
                                {data.type === "image" ? (
                                    <img src={data.url} alt="img" className='w-full h-full object-cover rounded-lg shadow-lg' />
                                ) : (
                                    <AudioPlayer 
                                        className="custom-style"
                                        src={data.url}
                                        />
                                )}
                            </div>
                        </div>
                        <div className="md:flex-1 px-4 text-white bg-gray-800 h-fit p-6 rounded-3xl">
                            <h2 className="text-2xl font-bold mb-2">
                                {data.name}
                            </h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold">
                                        Price:
                                    </span>
                                    <span className="text-gray-300"> ₹{data.price}</span>
                                </div>
                                <div>
                                    <span className="font-bold">
                                        Type:
                                    </span>
                                    <span className="text-gray-300  capitalize"> {data.type}</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold">
                                    Message :
                                </span>
                                <p className="text-gray-300 text-sm mt-2 text-muted">
                                    {data.message}
                                </p>
                            </div>
                            <div className="w-full mx-auto px-2 mt-12 flex items-center justify-between text-gray-900 font-bold">
                                <button className="w-2/3 bg-white/90  py-2 px-4 rounded-full" onClick={processPayment}>
                                    Pay to Download
                                </button>
                                <Button variant="outline" className='w-1/4 cursor-pointer rounded-full font-mono' onClick={() => { navigator.clipboard.writeText(`http://localhost:3000/dashboard/preview/${id}`); toast.success("Copied Successfully") }}>COPY URL</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page