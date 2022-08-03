import React from 'react'
import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className="top-container">
                <div className="content">
                    <h1>Everything you need for <span className='primary-color'>$99 a month</span></h1>
                    <p>Includes every feature we offer plus unlimited projects and unlimited users.</p>
                </div>
                <button className="button">Get started today</button>
            </div>
            <div className="bottom-container">
                <div className="col1">
                    <p> <span className='primary-color'> EVERYTHING YOU NEED</span></p>
                    <h2>All-in-one platform</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt odio id perspiciatis molestias, corrupti illum ea natus facere suscipit.</p>
                </div>
                <div className="col2">
                    <p className="col2p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col2p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col2p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col2p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col2p">Lorem ipsum dolor sit amet consectetur.</p>

                </div>
                <div className="col3">
                    <p className="col3p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col3p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col3p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col3p">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="col3p">Lorem ipsum dolor sit amet consectetur.</p>

                </div>
            </div>
        </div>
    )
}

export default Pricing