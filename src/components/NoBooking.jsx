import React from 'react'
import { Link } from 'react-router'

export default function NoBooking() {
    return (
        <div className='bg-red-100 py-15 w-10/12 mx-auto'>
            <h2 className='text-red-500 text-3xl font-bold text-center mb-10'>No Appointment Booked!</h2>
            <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center block w-1/4 mx-auto">
                    Back to Home
            </Link>
        </div>
    )
}
