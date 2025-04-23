import React, { useEffect, useState } from 'react'
import { FaRegRegistered } from 'react-icons/fa6';
import { useParams } from 'react-router'
import { CiSquareAlert } from "react-icons/ci";
import { toast } from 'react-toastify';

export default function Profile() {

    const [lawyer, setLawyer] = useState({});

    // let lawyer = useLoaderData()
    // console.log(lawyer);
    let {id} = useParams();
    
    useEffect(() => {
        fetch('/lawyers-data.json')
        .then(res => res.json())
        .then(data => {
            let lawyer = data.find((d) => d.id == id);
            setLawyer(lawyer);    
        })
    }, [id]);

    function handleClickAppointment(lawyer) {
        
        const stored = localStorage.getItem('lawyersId');
        const lawyersId = stored ? JSON.parse(stored) : [];

        if (lawyersId.includes(lawyer.id)) {
            toast("Already booked an appointment with this lawyer!");
        } else {

            const newLawyersId = [...lawyersId, lawyer.id];
            // store the new lawyersId in local storage
            localStorage.setItem('lawyersId', JSON.stringify(newLawyersId));
            
            
            // show success message
            toast(`Appointment booked successfully with ${lawyer.name}.`);
            // goto booking page
            setTimeout(() => {
                window.location.href = '/booking';
            }, 2000);
        }
    }


    return (
        <div className='py-5 w-10/12 mx-auto'>

            <div className='bg-slate-200 py-5 rounded mb-5'>
                <div className='text-center  text-slate-600 py-20 w-10/12 mx-auto'>
                    <h2 className='text-2xl font-bold'>Lawyer's Profile Details</h2>
                    <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
                </div>
                
            </div>

            <div className='p-5 bg-white rounded-lg'>
                <div
                    key={lawyer.license}
                    className='flex items-stretch justify-start text-slate-600 rounded-lg p-5 border border-slate-300 gap-5'>
                    <div className='bg-slate-200 p-10 rounded-2xl flex items-center justify-center'>
                        <img
                            src={lawyer.image}
                            alt={lawyer.name}
                            className='w-24 h-24 rounded-full object-cover'/>
                    </div>
                    <div>
                        <p className='text-blue-600 px-3 py-1 text-xs bg-blue-100 rounded-full inline-block mb-4'>
                            {lawyer.experience}
                        </p>
                        <h3 className='text-xl font-bold mb-4'>{lawyer.name}</h3>
                        <div className='mb-4 flex gap-5'>
                            <p className='text-xs'>{lawyer.expertise}</p>
                            <p className='text-xs flex items-center gap-1'><FaRegRegistered /> License No: {lawyer.license}</p>
                        </div>
                        <div className='flex gap-1 mb-4'>
                            Availability: 
                            {/* {lawyer.availability.map((item, index) => (<p key={index} className='text-xs text-amber-400 bg-amber-100 px-3 py-1 rounded-full border border-amber-300'>{item}</p>))} */}
                        </div>
                        <p>Consultaton Fee: <span className='text-red-600'>TK {lawyer.fee}</span></p>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg mt-5 p-5'>
                <h3 className='text-slate-600 text-center text-xl font-bold mb-5'>Book an Appointment</h3>
                <div className='divider border-b-2 border-dashed border-amber-200'></div>
                <div className='flex items-center justify-between mb-5'>
                    <p className='text-slate-600 font-bold'>Available</p>
                    <p className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs'>Lawyer Available Today</p>
                </div>
                <p className='text-amber-500 mb-5 bg-amber-100 p-2 rounded-lg text-sm flex items-center gap-1'>
                    <CiSquareAlert />
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </p>   
                <button onClick={() => handleClickAppointment(lawyer)} className='btn bg-amber-500 hover:bg-amber-600 text-white w-full border-0 rounded-full'>Book an Appointment</button>
            </div>

        </div>
        
        
    )
}
