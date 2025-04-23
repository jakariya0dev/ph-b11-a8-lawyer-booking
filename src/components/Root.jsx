import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify';
import { useNavigation } from "react-router";
import Spinner from './Spinner';
import PageTitle from './PageTitle';

export default function Root() {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div className='bg-slate-100'>
            <PageTitle/>
            <Navbar />
            {isNavigating && <Spinner />}
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </div>
    )
}
