import React from 'react'
import lottie from 'lottie-web';



 
const Stats = () => {
    return ( 
        <div>
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6 '>
           
            <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
                <div className="md:5/12 lg:w-1/2">
              
                < dotlottie-player 
                src="https://lottie.host/d4069ddd-04a3-4be5-84ad-75f1fc880f9d/5oNvd6Mv6u.json" 
                background="transparent" 
                speed="1" 
                style={{ width: '600px', height: '600px' }}
                loop 
                autoplay
            ></dotlottie-player>
         
                </div>
                <div className="md:7/12 lg:w-1/2">
                    <h2 className="text-3xl font-bold md:text-4xl text-white">
                    Benefits for Freelancers:
                    </h2>
                    {/* <p className="my-8 text-gray-300">
                        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                        expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
                        quam mollitia. <br /> <br /> Vitae error, quaerat officia delectus
                        voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a
                        ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                    </p> */}
                    <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                     
                        <div className="pt-4 flex gap-4 md:items-center">
                            <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6">
                                <h4 className="font-semibold text-lg text-teal-300">
                                Improved Client Interaction:
                               
                                </h4>
                                <p className="text-gray-400">
                               
                                A link to the preview and payment page simplifies sharing project progress with clients, making it a direct and professional way to involve them in the process.
                                </p>
                            </div>
                        </div>
                        <div className="pt-4 flex gap-4 md:items-center">
                            <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6">
                                <h4 className="font-semibold text-lg text-indigo-300">
                                Enhanced Trust and Professionalism:
                              
                               
                                </h4>
                                <p className="text-gray-400">
                               
                                A secure system for file sharing and payment processing boosts the freelancer's professional image and builds client trust.
                                </p>
                            </div>
                        </div>
                        <div className="pt-4 flex gap-4 md:items-center">
                            <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="w-5/6">
                                <h4 className="font-semibold text-lg text-teal-300">
                                Effortless File Sharing:
                               
                               
                                </h4>
                                <p className="text-gray-400">
                                Freelancers can easily share the preview and payment page link with clients, eliminating the need for additional platforms or complex procedures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>









        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-12 mb-12'>
       
        <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
            
            <div className="md:7/12 lg:w-1/2">
                <h2 className="text-3xl font-bold md:text-4xl text-white">
                Benefits for Clients:
                </h2>
                {/* <p className="my-8 text-gray-300">
                    Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                    expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
                    quam mollitia. <br /> <br /> Vitae error, quaerat officia delectus
                    voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a
                    ipsum quas voluptatem. Quo pariatur asperiores eum amet.
                </p> */}
                <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                    <div className="mt-8 flex gap-4 md:items-center">
                        <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6">
                            <h4 className="font-semibold text-lg text-indigo-300">
                            Secure Payment Processing:
                        
                            </h4>
                            <p className="text-gray-400">

                            A secure payment gateway protects clients' financial transactions, building trust and confidence.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 flex gap-4 md:items-center">
                        <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6">
                            <h4 className="font-semibold text-lg text-teal-300">
                            Flexible Payment Options:
                            </h4>
                            <p className="text-gray-400">
                          
Clients can review files and choose to pay without immediate download, allowing for better decision-making.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 flex gap-4 md:items-center">
                        <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="w-5/6">
                            <h4 className="font-semibold text-lg text-indigo-300">
                            Clear Project Details:

                        
                            </h4>
                            <p className="text-gray-400">
                            Comprehensive project details, including cost and optional messages, are provided upfront for transparency and clarity.
                        
                            </p>
                        </div>
                    </div>
              
                </div>
            </div>
            <div className="md:5/12 lg:w-1/2">
            <dotlottie-player
                    src="https://lottie.host/e5e57c83-05cc-441b-a8aa-fe34f48b8bb2/knL4kFGno5.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '600px', height: '600px' }}
                    loop
                    autoplay
                 ></dotlottie-player>


          
            </div>
        </div>
        </div>
</div>
    )
}

export default Stats