import React from 'react'
import './Hero.css'
import { FaAccusoft, FaAsterisk, FaDatabase, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

const Hero = () => {

    const iconstyle = {
        color: "#333333"

    }

    return (
        <div className='hero' >
            <div className="container">
                <div className="content">
                    <div className="col-1">
                        <h1>Data to enrich your</h1>
                        <h1><span className='primary-color'>online business
                        </span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos est voluptatem ea obcaecati, odit, repellendus dolor.
                        </p>
                        <div className="used-by">
                            <p>USED BY</p>
                            <div className="icons">
                                <i><FaDatabase />Staxx</i>
                                <i><FaAsterisk />Star AI</i>
                                <i><FaAccusoft />Accusoft</i>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-layout">
                            <div className="form-container">
                                <p className='sign-in-txt'> Sign in with</p>
                                <div className="social-login">
                                    <i><FaFacebook style={iconstyle} size={20}
                                    /></i>
                                    <i><FaTwitter style={iconstyle} size={20} /></i>
                                    <i><FaGithub style={iconstyle} size={20} /></i>
                                </div>
                                <div className="divider">
                                    <p><span>Or</span></p>
                                </div>
                                <form action='' >
                                    <input type="text" placeholder='Name' />
                                    <input type="email" placeholder='Email' />
                                    <input type="password" placeholder='Password' />
                                    <button className='button create-button' >Create your account</button>
                                </form>
                            </div>
                            <div className="form-footer">
                                <p>By signing up, you agree to our
                                    <span className="primary-color">Terms, Data policy  </span>and
                                    <span className="primary-color">Cookies policy</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero