import React from 'react'

export default function Hero() {
    return (
        <header className='bg-[url("img/banner-img-1.png")] bg-hero-pattern bg-cover bg-no-repeat w-10/12 mx-auto h-100'>

            <div className='flex flex-col justify-center items-center w-3/4 mx-auto h-full'>
                <h1 className='text-white text-center text-4xl font-bold'>It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                <p className='text-white text-center text-lg mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            
        </header>
    )
}
