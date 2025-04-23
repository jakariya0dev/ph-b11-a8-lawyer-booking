import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {

    const links = (
                    <>
                        <NavLink to="/" className={({isActive}) => isActive ? "border-b-2 border-red-600" : ""}>Home</NavLink>
                        <NavLink to="/booking" className={({isActive}) => isActive ? "border-b-2 border-red-600" : ""}>My Bookings</NavLink>
                        <NavLink to="/blogs" className={({isActive}) => isActive ? "border-b-2 border-red-600" : ""}>Blogs</NavLink>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "border-b-2 border-red-600" : ""}>Contact Us</NavLink>
                    </>
                );
    return (
        <nav className='w-10/12 mx-auto'>
            <div className="navbar bg-slate-100 text-slate-600 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl"><img src="public/img/logo.png" alt="logo" className='w-8' />Law.BD</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-amber-400 rounded-full border-0">Contact now</a>
                </div>
            </div>
        </nav>
    )
}
