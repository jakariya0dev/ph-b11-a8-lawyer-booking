import React from 'react'
import CountUp from 'react-countup'

export default function Counter() {
    return (
        <div className='text-center bg-slate-100 text-slate-600 py-20 w-10/12 mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-5'>We Provide Best Law Services</h2>
            <p className='mb-10'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='flex flex-col items-start justify-center bg-slate-200 text-slate-600 shadow-lg rounded-lg p-5 space-y-2 border-1 border-slate-300'>
                    <img src="public/img/success-doctor.png" alt="Counter one" />
                    <div className=' text-3xl font-bold'><CountUp start={0} end={199} duration={5} />+</div>
                    <p>Total Lawyers</p>
                </div>

                <div className='flex flex-col items-start justify-center bg-slate-200 text-slate-600 shadow-lg rounded-lg p-5 space-y-2 border-1 border-slate-300'>
                    <img src="public/img/success-review.png" alt="Counter one" />
                    <div className=' text-3xl font-bold'><CountUp start={0} end={467} duration={5} />+</div>
                    <p>Total Reviews</p>
                </div>

                <div className='flex flex-col items-start justify-center bg-slate-200 text-slate-600 shadow-lg rounded-lg p-5 space-y-2 border-1 border-slate-300'>
                    <img src="public/img/success-patients.png" alt="Counter one" />
                    <div className=' text-3xl font-bold'><CountUp start={0} end={1990} duration={5} />+</div>
                    <p>Case Initiated</p>
                </div>

                <div className='flex flex-col items-start justify-center bg-slate-200 text-slate-600 shadow-lg rounded-lg p-5 space-y-2 border-1 border-slate-300'>
                    <img src="public/img/success-staffs.png" alt="Counter one" />
                    <div className=' text-3xl font-bold'><CountUp start={0} end={300} duration={5} />+</div>
                    <p>Total Staffs</p>
                </div>

            </div>
        </div>
    )
}
