import React from 'react'
import './Skill.css'

const Skill = () => {
    return (
        <div className="skill-row" name="skills">

            <div className="skill-col-1 col"
                data-aos="fade-right"
                data-aos-duration="1000"
                >
                <h1 style={{ position: "relative" }}><img src='./../Images/comma2.jpg' alt='iamge' width="25" style={{ position: "absolute", left: "-35px" }} />SKILLS</h1>
            </div>

            <div className="skill-col-2 col"
            // data-aos="fade-left"
            // data-aos-duration="1000"
            >

                <div className="skill-box">
                    <div className="col-25">
                        <p style={{ marginRight: "20px" }}>HTML</p>
                    </div>
                    <div className="col-75">
                        <img src='/Images/HTML.png' width="500" height="50" />
                    </div>
                </div>
                <div className="skill-box">
                    <div className="col-25">
                        <p style={{ marginRight: "20px" }}>CSS</p>
                    </div>
                    <div className="col-75">
                        <img src='/Images/CSS.png' width="500" height="50" />
                    </div>
                </div>
                <div className="skill-box">
                    <div className="col-25">
                        <p style={{ marginRight: "20px" }}>Javascript</p>
                    </div>
                    <div className="col-75">
                        <img src='/Images/Javascript.png' width="500" height="50" />
                    </div>
                </div>
                <div className="skill-box">
                    <div className="col-25">
                        <p style={{ marginRight: "20px" }}>React JS</p>
                    </div>
                    <div className="col-75">
                        <img src='/Images/React.png' width="500" height="50" />
                    </div>
                </div>
                <div className="skill-box">
                    <div className="col-25">
                        <p style={{ marginRight: "20px" }}>C / C++</p>
                    </div>
                    <div className="col-75">
                        <img src='/Images/HTML.png' width="500" height="50" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill
