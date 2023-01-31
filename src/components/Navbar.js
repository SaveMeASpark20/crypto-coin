import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='container'>
                <h1 className='logo'>CRYPT<span className='primary'>S</span></h1>
                <ul className={click ? 'navbar-link active' : 'navbar-link'}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Other Crypto</a></li>
                    <li> <a href='/'>News</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>{ click?<FaTimes/> : <FaBars/>} </div>
            </div>
        </div>
    )
}

export default Navbar