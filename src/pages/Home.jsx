import React from 'react'
import Hero from '../components/Hero'
import Counter from '../components/Counter'
import Lawyers from '../components/Lawyers'
import { useLoaderData } from 'react-router';

export default function Home() {

    const lawyers = useLoaderData();
    

    return (
        <div>
            <Hero/>
            <Lawyers lawyers={lawyers}/>
            <Counter/>
        </div>
    )
}
