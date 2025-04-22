import React from 'react'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center bg-black text-white py-10 md:py-20'>
            <div className='flex items-center mb-5 gap-3 font-bold text-2xl'>
                <img src="/img/logo-footer.png" className="logo" alt="logo" />Law.BD
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <Link to="/" className="">Home</Link>
                <Link to="/" className="">My Bookings</Link>
                <Link to="/" className="">Blogs</Link>
                <Link to="/" className="">Contact Us</Link>
            </div>
             <div className="border-t-1 border-white border-dashed w-3/4 my-6"></div>
            <div className='flex justify-center items-center gap-5'>
                <Link to="/" className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></Link>
                <Link to="/" className="bg-black p-2 rounded-full"><FaXTwitter /></Link>
                <Link to="/" className="bg-purple-600 p-2 rounded-full"><FaLinkedin /></Link>
                <Link to="/" className="bg-red-600 p-2 rounded-full"><FaYoutube /></Link>
            </div>
        </div>
    )
}
