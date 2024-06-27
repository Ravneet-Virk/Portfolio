import React, { useState } from 'react'
import './About.css'

const About = () => {
    // const [skill, setSkill] = useState(true);
    const [education, setEducation] = useState(true);
    const [exp, setExp] = useState(false);

    // const handleSkill = () => {
    //     skill ? setSkill(false) : setSkill(true);
    //     setEducation(false);
    //     setExp(false);
    // }
    const handleEdu = () => {
        education ? setEducation(false) : setEducation(true);
        // setSkill(false);
        setExp(false);
    }
    const handleExp = () => {
        exp ? setExp(false) : setExp(true);
        // setSkill(false);
        setEducation(false);
    }

    return (
        <div className="about-container" name="about">
            <div className="about-row">

                <div className="about-col-1">
                    {/* <h1 style={{ position: "relative" }}><img src={"./../Images/comma.png"} width={25} height={25} style={{
                        position: "absolute", top: "0", left: "12px"
                    }} />ABOUT ME</h1> */}
                    <h1 style={{ position: "relative" }}>ABOUT ME</h1>
                </div>

                <div className="about-col-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="about-row-1">
                        {/* <h2>About</h2> */}
                        <p>I'm a Front-End React Developer with a passion for building interactive and user-friendly web applications. With a strong foundation in JavaScript, HTML, and CSS.<br /><br />I love to create dynamic and responsive interfaces using React. I am actively seeking job opportunities where I can apply my skills and contribute to exciting projects.</p>
                    </div>
                    <div className="about-row-2">
                        {/* <button className='btn' onClick={handleSkill}>Skills</button> */}
                        <button className='btn' onClick={handleEdu}><h3>Education</h3></button>
                        <button className='btn' onClick={handleExp}><h3>Experience</h3></button>
                        {/* {skill && <div className="content-1" >
                            <ul>
                                <li><p>HTML</p> </li>
                                <li><p>CSS</p></li>
                                <li><p>Javsscript</p></li>
                                <li><p>React JS</p></li>
                                <li><p>Bootstrap</p></li>
                                <li><p>Github</p></li>
                            </ul>
                        </div>} */}
                        {education && <div className="content-2" >
                            <h3>Guru Nanak Dev Engineering College</h3>
                            <p><i>Bachelor's in Computer Science & Engineering</i> • June 2024<br />Graduated with Distinction</p>
                        </div>}
                        {exp && <div className="content-3">
                            <h3>Website Development for Unitrack Global</h3>
                            <p><i>Front-End Developer</i> • April 2024<br />Developed a responsive website for Unitrack Global, an immigration company, using React. </p>
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
