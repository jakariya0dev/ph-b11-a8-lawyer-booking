import React, {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import NoBooking from '../components/NoBooking';
import { toast } from 'react-toastify';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


export default function Booking() {

    const [bookedLawyers, setBookedLawyers] = useState([]);

    const lawyers = useLoaderData();

    useEffect(() => {
       
        const stored = localStorage.getItem('lawyersId');
        const lawyersId = stored ? JSON.parse(stored) : [];

        const bookedLawyers = lawyers.filter(lawyer => lawyersId.includes(lawyer.id));
        setBookedLawyers(bookedLawyers);
        console.log(bookedLawyers);    

    }, []);

    // cancel appointment
    const handleCancelAppointment = (id) => {
        const stored = localStorage.getItem('lawyersId');
        const lawyersId = stored ? JSON.parse(stored) : [];

        const newLawyersId = lawyersId.filter(lawyerId => lawyerId !== id);
        localStorage.setItem('lawyersId', JSON.stringify(newLawyersId));
        
        const bookedLawyers = lawyers.filter(lawyer => newLawyersId.includes(lawyer.id));
        setBookedLawyers(bookedLawyers);
        toast("Appointment cancelled successfully.");
    }
                    

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='py-20 w-10/12 mx-auto'>
            
            {
                bookedLawyers.length === 0 ? '' : 
                <BarChart
                    width={1000}
                    height={400}
                    data={bookedLawyers}
                    margin={{top: 20, right: 30, left: 20, bottom: 50,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="fee" />
                    <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {
                            bookedLawyers.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index % 20]} />))
                        }
                    </Bar>
                </BarChart>
            }
            
            <div className='my-5'>
                <h2 className='text-slate-600 text-3xl font-bold text-center mb-2'>My Today Appointments</h2>
                <p className='mb-10 text-slate-600 text-center text-sm'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>

            <div className='grid grid-cols-1 gap-5'>
                {
                    bookedLawyers.length > 0 ? (bookedLawyers.map((lawyer) => (
                        <div
                            key={lawyer.license}
                            className='text-slate-600 shadow rounded-lg p-5 border border-slate-300 gap-5'>
            
                            <div className='flex justify-between items-center w-full'>

                                <div>
                                    <h3 className='text-xl font-bold'>{lawyer.name}</h3>
                                    <p className='text-sm'>{lawyer.expertise}</p>
                                </div>
                                
                                <p className='text-slate-600 text-xs '>
                                    Appoinment Fee: {lawyer.fee}
                                </p>
                                
                            </div>

                            <button onClick={() => handleCancelAppointment(lawyer.id)} className='border border-slate-400 text-red-600 pt-1 pb-2 text-sm w-full rounded-full mt-4 transition-all hover:bg-red-600 hover:text-white'>Cancel Appoinment</button>
                        </div>
                    ))) : <NoBooking />
                }
            </div>
        </div>
    )
}