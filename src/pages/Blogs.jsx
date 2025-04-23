import React from 'react'
import { useLoaderData } from 'react-router';

export default function Blogs() {

    const blogs = useLoaderData();

    return (
        <div>
            <div className="w-10/12 mx-auto py-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-slate-600 my-10">React FAQ</h1>
                <div className="space-y-6">
                    {blogs.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold mb-2 text-blue-700">{index + 1}. {item.question}</h2>
                        <p className="text-gray-800 leading-relaxed">{item.answer}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
