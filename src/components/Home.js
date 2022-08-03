import React from 'react'
import Hero from './Hero'
import './Home.css'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
        </div>

    )
}

export default Home