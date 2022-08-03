
import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/final.png'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleclick = () => {
        setClick(!click);
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={Logo} alt="logo" className='logo-img' />
            </div>
            <div className={click ? ('nav-menu active') : ('nav-menu')}>
                <ul className='list'>
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger" onClick={handleclick}>
                {click ? <FaTimes size={35} /> : <FaBars size={30} />}
            </div>
        </div>
    )
}

export default Navbar