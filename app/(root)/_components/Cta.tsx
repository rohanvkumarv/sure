import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <div className="relative py-16">
            <div
                aria-hidden="true"
                className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
            </div>
            <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
                <div className="relative">
                    {/* <div className="flex items-center justify-center -space-x-2">
                        <img
                            loading="lazy"
                            width={400}
                            height={400}
                            src="./images/avatars/avatar.webp"
                            alt="member photo"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width={200}
                            height={200}
                            src="./images/avatars/avatar-2.webp"
                            alt="member photo"
                            className="h-12 w-12 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width={200}
                            height={200}
                            src="./images/avatars/avatar-3.webp"
                            alt="member photo"
                            className="z-10 h-16 w-16 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width={200}
                            height={200}
                            src="./images/avatars/avatar-4.webp"
                            alt="member photo"
                            className="relative h-12 w-12 rounded-full object-cover"
                        />
                        <img
                            loading="lazy"
                            width={200}
                            height={200}
                            src="./images/avatars/avatar-1.webp"
                            alt="member photo"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                    </div> */}
                    <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
                        <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
                        READY TO START
                        </h1>
                        <p className="text-center text-xl text-gray-300">
                        Start Your Journey Here With Safe Payments
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button variant={"outline"} className='rounded-full'>
                                <Link
                                    href="/sign-in"
                                >
                                    <span className="relative text-sm font-semibold">
                                        Get Started
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cta