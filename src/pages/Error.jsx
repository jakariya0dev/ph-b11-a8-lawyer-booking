import React from 'react'
import Navbar from '../components/Navbar'

export default function Error() {
    return (
        <div className='bg-white w-10/12 mx-auto'>

            <Navbar/>

            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-2xl text-gray-800 mb-6">Page Not Found</p>
                <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
