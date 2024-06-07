import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative bg-gray-900" id="home">
            <div
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
            </div>


            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                        Say hello to {" "}
                            <span className="text-white">Xsure</span>
                        </h1>
                        <p className="mt-8 text-gray-300">
                        We Ensure: Freelancers Get Paid and ,Clients Receive Satisfactory Work
                        </p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <SignedOut>
                                <Button variant={"outline"} className='rounded-full'>
                                    <Link
                                        href="/sign-in"
                                    >
                                        <span className="relative text-sm font-semibold">
                                            Get Started
                                        </span>
                                    </Link>
                                </Button>
                            </SignedOut>
                            <SignedIn>
                                <Button variant={"outline"} className='rounded-full'>
                                    <Link
                                        href="/dashboard/upload"
                                    >
                                        <span className="relative text-sm font-semibold">
                                            Upload New Project
                                        </span>
                                    </Link>
                                </Button>
                            </SignedIn>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-white">
                                    Safe
                                </h6>
                                {/* <p className="mt-2 text-gray-500">Some text here</p> */}
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-white">
                                    Secure
                                </h6>
                                {/* <p className="mt-2 text-gray-500">Some text here</p> */}
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-white">
                                    Reliable
                                </h6>
                                {/* <p className="mt-2 text-gray-500">Some text here</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img
                                src="./images/clients/microsoft.svg"
                                className="h-12 w-auto mx-auto"
                                loading="lazy"
                                alt="client logo"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img
                                src="./images/clients/airbnb.svg"
                                className="h-12 w-auto mx-auto"
                                loading="lazy"
                                alt="client logo"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                            <img
                                src="./images/clients/google.svg"
                                className="h-9 w-auto m-auto"
                                loading="lazy"
                                alt="client logo"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img
                                src="./images/clients/ge.svg"
                                className="h-12 w-auto mx-auto"
                                loading="lazy"
                                alt="client logo"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                            <img
                                src="./images/clients/netflix.svg"
                                className="h-8 w-auto m-auto"
                                loading="lazy"
                                alt="client logo"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img
                                src="./images/clients/google-cloud.svg"
                                className="h-12 w-auto mx-auto"
                                loading="lazy"
                                alt="client logo"
                                width=""
                                height=""
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default Hero