import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footer-outer">
            <div className="footer-container">
                <p>Copyright © 2024 All rights reserved</p>
                <div className='icons'>
                    {/* <span><a href="" target="_blank"><FacebookIcon fontSize='medium' /></a></span>
                    <span><a href="" target="_blank"><LinkedInIcon fontSize='medium' /></a></span> */}
                    <span><a href="https://github.com/Ravneet-Virk" target="_blank"><GitHubIcon fontSize='medium' /></a></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
