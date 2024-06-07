"use client"

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import toast from 'react-hot-toast'

const page = () => {
    const [data, setData] = useState([] as any)
    useEffect(() => {
        const getProjects = async () => {
            const res = await axios.get("/api/saveproject")
            console.log(res.data)
            setData(res.data)
        }
        getProjects()
    }, [data])
    return (
        <div className='bg-gray-900 h-full text-white'>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 p-12">
                <Button variant="outline" className='w-fit text-gray-900 mt-24 ml-20'><Link href="/dashboard/upload">Add a new Project</Link></Button>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ml-14">
                    <Table>
                        <TableHeader className='bg-white text-gray-900'>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Price
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Status
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Download Url
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item: any) => (
                                <TableRow key={item._id}>
                                    <TableCell className="font-medium">
                                        {item.name}
                                    </TableCell>
                                    <TableCell>
                                        {item.type}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        ₹{item.price}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge variant="outline" className={cn("uppercase text-white", item.paymentstatus ? "bg-green-400" : "bg-red-400")}>{item.paymentstatus ? "paid" : "not paid"}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <Badge variant="outline" className='cursor-pointer text-white hover:scale-125 transition-all' onClick={() => { navigator.clipboard.writeText(`http://localhost:3000/dashboard/download/${item._id}`); toast.success("Copied Successfully") }}>copy</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </main>
            </div>
        </div>
    )
}

export default page