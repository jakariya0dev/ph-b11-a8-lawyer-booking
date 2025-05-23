import React from 'react'
import bannerImage from './../assets/img/banner.png'

export default function Hero() {
    return (
        <header style={{ backgroundImage: `url(${bannerImage})` }} className="bg-hero-pattern bg-cover bg-center bg-no-repeat w-10/12 mx-auto min-h-[80vh] ">

            <div className='min-h-[80vh] flex justify-center items-center bg-[#00000090] bg-opacity-50'>
                <div className='flex flex-col justify-center items-center w-3/4 mx-auto py-10'>
                    <h1 className='text-white text-center text-2xl md:text-4xl font-bold'>It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                    <p className='text-white text-center text-sm md:text-md mt-5'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>

        </header>
    )
}
