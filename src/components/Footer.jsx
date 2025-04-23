import React from 'react'
import { Link, NavLink } from 'react-router'
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
                <NavLink to="/" className={({isActive}) => isActive ? "font-bold text-slate-600" : ""}>Home</NavLink>
                <NavLink to="/booking" className={({isActive}) => isActive ? "font-bold text-slate-600" : ""}>My Bookings</NavLink>
                <NavLink to="/blogs" className={({isActive}) => isActive ? "font-bold text-slate-600" : ""}>Blogs</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "font-bold text-slate-600" : ""}>Contact Us</NavLink>
            </div>
             <div className="border-t-1 border-white border-dashed w-3/4 my-6"></div>
            <div className='flex justify-center items-center gap-5'>
                <a href='https://www.fb.com/jakariya.dev' className="bg-blue-600 p-2 rounded-full"><FaFacebookF /></a>
                <a href='https://www.twitter.com/jakariya.dev' className="bg-black p-2 rounded-full"><FaXTwitter /></a>
                <a href='https://www.linkedin.com/in/jakariya' className="bg-purple-600 p-2 rounded-full"><FaLinkedin /></a>
                <a href='https://www.youtube.com/@cunningmentor' className="bg-red-600 p-2 rounded-full"><FaYoutube /></a>
            </div>
        </div>
    )
}
