import React from 'react'

const subscribe = () => {
  return (
    <div data-aos="zoom-in" className="mb-20 flex justify-center bg-slate-700 dark:bg-gray-800 text-white" >
        <div className="container backdrop-blur-sm py-10">
            <div className="space-y-6 mx-w-xl mx-auto ">
                <h1 className="text-2xl text-center flex justify-center sm:text-left sm:text-4xl font:semibold">
                    Get Notified about New Products
                </h1>
                <input type="email" data-aos="fade-up" placeholder="enter your email"
                className="w-full p-3   text-black bg-white"  />
            </div>
        </div>
    </div>
  )
}

export default subscribe
