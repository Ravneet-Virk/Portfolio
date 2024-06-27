import React, { useState } from 'react'
import './Navbar.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
        <nav>
            <div className="nav-container">

                <h1
                    data-aos="zoom-in"
                    data-aos-duration="1000">Ravneet.</h1>
                {/* <img className="logo-img" src={"./../Images/Logo.jpg"} alt='Logo-image' width="60" /> */}

                <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                    <li><Link to='hero' smooth={true} offset={-40} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} offset={-70} duration={500}>About</Link></li>
                    <li><Link to='skills' smooth={true} offset={-230} duration={500}>Skills</Link></li>
                    <li><Link to='project' smooth={true} offset={-250} duration={500}>Projects</Link></li>
                    <li><Link to='contact' smooth={true} offset={-250} duration={500}>Contact</Link></li>
                </ul>

                <div className="icon-div">
                    <a href='/' target='_blank'><FacebookIcon fontSize='large' /></a>
                    <a href='/' target='_blank'><LinkedInIcon fontSize='large' /></a>
                    <a href='/' target='_blank'><GitHubIcon fontSize='large' /></a>
                </div>

                {mobileMenu ? <img src='./Images/cross.png' width="25" className='menu-icon' onClick={toggleMenu} />
                    : <img src='./Images/menu.png' width="25" className='menu-icon' onClick={toggleMenu} />}

            </div>
        </nav>
    )
}

export default Navbar
