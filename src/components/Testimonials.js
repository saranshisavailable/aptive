import React from 'react'
import './Testimonials.css'
import { FaDatabase } from 'react-icons/fa'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="container">
                <div className="content">
                    <i><FaDatabase />Staxx</i>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum rem fugiat dolor repellendus maiores eligendi illum libero, suscipit nulla?</p>
                    <p>Marie Chilvers</p>
                    <p>CEO,Staxx</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials