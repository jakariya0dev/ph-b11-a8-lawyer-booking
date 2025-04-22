import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

export default function Root() {
    return (
        <div className='bg-slate-100'>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    )
}
