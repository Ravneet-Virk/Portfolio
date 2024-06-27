import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="row" name="hero">
      <div className="col-1" 
      data-aos="zoom-in" 
      data-aos-duration="1000"
      >
        <img src={"./../Images/Header.png"} width="300" height="300" />
      </div>
      <div className="col-2" 
      data-aos="fade-up"
      data-aos-duration="1000"
      >
        <h1>Hi, I'm <span style={{ color: "firebrick" }}>Ravneet Singh</span> 👋</h1>
        <p>Aspiring Front-End Developer with a passion for creating dynamic React web applications. Explore my projects to see what I can do!</p>
      </div>
    </div>
  )
}

export default Header
