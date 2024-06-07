"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import Link from 'next/link';
import { UploadDropzone } from '@/lib/uploadthing';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from "axios"
import { redirectFn } from "@/lib/redirectFn";
import toast from "react-hot-toast";
import { Textarea } from '@/components/ui/textarea';

const page = () => {
    const [disabled, setDisabled] = useState(true)
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")
    useEffect(() => {
        if (name && price) setDisabled(false)
        else setDisabled(true)
    }, [name, price])
    const handleSave = async () => {
        setDisabled(true)
        if (!name || !price || !message) return alert("Please fill all the fields")
        if (Number(price) <= 0) return alert("Price should be greater than 0")
        const res = await axios.post("/api/saveproject", { name, price, url, type, message })
        if (res) {
            console.log(res.data._id)
            setOpen(false)
            toast.success("Redirecting to preview page")
            redirectFn(res.data._id)
        }
    }
    return (
        <main className='p-24 min-h-screen bg-gray-900'>
            <Link href="/dashboard" ><Button variant="outline">Back to Dashboard</Button></Link>
            <div className="flex flex-col items-center justify-between">
                <UploadDropzone
                    className='w-full h-96 border-2 border-dashed border-gray-300 rounded-lg mt-12'
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        console.log("File: ", res);
                        setUrl(res[0].url)
                        setType(res[0].type.split("/")[0])
                        setOpen(true);
                    }}
                    onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Please fill the missing fields</DialogTitle>
                        <DialogDescription>
                            Below fields are required to complete the upload process.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Title
                            </Label>
                            <Input value={name} onChange={e => setName(e.target.value)} className="col-span-3 mt-1" />
                        </div>
                        <div className="items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Price
                            </Label>
                            <Input type='number' value={price} onChange={e => setPrice(e.target.value)} className="col-span-3 mt-1" />
                        </div>
                        <div className="items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                                Message
                            </Label>
                            <Textarea value={message} onChange={e => setMessage(e.target.value)} className="col-span-3 mt-1" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button disabled={disabled} type="submit" onClick={handleSave}>Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>
    )
}

export default page