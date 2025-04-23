import React, { useState } from 'react'
import { FaRegRegistered } from "react-icons/fa";
import { Link } from 'react-router';


export default function Lawyers({lawyers}) {

      const [showAll, setShowAll] = useState(false);

    const half = Math.ceil(lawyers.length / 2);
    const visibleLawyers = showAll ? lawyers : lawyers.slice(0, half);

    // console.log(lawyers);
    
    return (
        <div className='bg-slate-100 py-16 w-10/12 mx-auto'>
            <h2 className='text-3xl font-bold mb-4 text-slate-600 text-center'>Our Best Lawyers</h2>
            <p className='mb-10 text-slate-600 text-center w-4/5 md:w-3/5 mx-auto'>
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    {visibleLawyers.map((lawyer) => (
                        <div
                            key={lawyer.license}
                            className='flex items-start justify-start text-slate-600 shadow rounded-lg p-5 border border-slate-300 gap-5 mb-4'>
                            <img
                                src={lawyer.image}
                                alt={lawyer.name}
                                className='w-24 h-24 rounded-full object-cover'
                            />
                            <div>
                                <div className='flex flex-wrap gap-2 mb-2'>
                                
                                    <p className='text-blue-600 px-3 py-1 text-xs bg-slate-200 rounded-full'>
                                        {lawyer.availability ? 'Available' : 'Not Available'}
                                    </p>

                                    <p className='text-red-600 px-3 py-1 text-xs bg-slate-200 rounded-full'>
                                        {lawyer.expertise}
                                    </p>
                                
                                </div>
                                <h3 className='text-xl font-bold'>{lawyer.name}</h3>
                                <p className='text-sm'>{lawyer.expertise}</p>
                                <p className='text-sm flex items-center gap-1 mb-4'><FaRegRegistered /> License No: {lawyer.license}</p>
                                <Link to={`profile/${lawyer.id}`} className='border border-slate-400 px-3 py-1 rounded-full w-full text-center text-blue-600 inline-block'>View Details</Link>
                            </div>
                        </div>
                        ))
                    }
                    
                </div>
            </div>
            <div className='text-center mt-5'>
                <a onClick={() => setShowAll(!showAll)} className="btn bg-green-600 rounded-full border-0">{showAll ? 'Show Less' : 'Show All Lawyers'}</a>
            </div>
        </div>
    )
}
