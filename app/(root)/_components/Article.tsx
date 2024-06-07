import React from 'react'

const Article = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
            <div className="mb-12 space-y-2 text-center">
                <h2 className="text-3xl font-bold md:text-4xl text-white">
                    Upcoming Services
                </h2>
                {/* <p className="lg:mx-auto lg:w-6/12 text-gray-300">
                    Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt,
                    debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
                </p> */}
            </div>

            {/* grid gap-8 md:grid-cols-2 lg:grid-cols-3 */}
            <div className="grid  gap-2 md:grid-cols-1">
                <div className="group p-6 sm:p-8 rounded-3xl border shadow-none border-gray-700 bg-gray-800 bg-opacity-50 shadow-gray-600/10 ">
                    <div className="relative overflow-hidden rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                            alt="art cover"
                            loading="lazy"
                            width={1000}
                            height={667}
                            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-6 relative">
                        <h3 className="text-2xl font-semibold text-white">
                            Cleint Management System.
                        </h3>
                        <p className="mt-6 mb-8 text-gray-300">
                            We will soon be launching a full fledged client management system that will help freelancers to ease their work.
                        </p>
                        {/* <a className="inline-block" href="#">
                            <span className="text-info text-blue-300">Read more</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article