"use client"

import { Button } from '@/components/ui/button'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const page = () => {
    const router = useRouter();
    const { id } = useParams()
    const [data, setData] = useState({} as any)
    const getProject = async () => {
        const response = await axios.post("/api/getpreview", { id })
        if (response) {
            console.log(response.data)
            if (response.data.paymentstatus === false) {
                router.push(`/dashboard/preview/${[id]}`)
            }
            setData(response.data)
        }
    }
    useEffect(() => {
        getProject()
    }, [])
    return (
        <div className='h-full py-24 px-36 bg-gray-900'>
            <div className='h-full flex items-center justify-center flex-col bg-violet-500 rounded-full mt-12'>
                <Image src={"/download.svg"} alt='download' width={300} height={300} />
                <Button className='mt-6 w-1/6 uppercase tracking-wider' variant={'myvariant'}>
                    <a href={data.url} download >Download</a>
                </Button>
            </div>
        </div>
    )
}

export default page