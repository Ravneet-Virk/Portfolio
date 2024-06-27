import React from 'react'
import "./Project.css"

const Project = () => {
    return (
        <div className="project-row" name="project"
            data-aos="fade-up"
            data-aos-duration="1000">

            <div className="box">
                <img src={'./../Images/UG.jpg'} alt='image' width={500} />
                <div className="details">
                    {/* <h3>Unitrack Global</h3> */}
                    {/* <p><b><span>Unitrack Global</span></b></p> */}
                    <p>This is my first project as a freelance web developer, focusing on creating a comprehensive and user-friendly immigration website. It aims to provide essential information, resources, and services to individuals seeking immigration assistance.</p>
                    <a href='https://www.unitrackglobal.com/' target='_blank'>Live Preview &rarr;</a>
                </div>
            </div>
            <div className="box">
                <img src={'./../Images/CM.jpg'} alt='image' width={500} />
                <div className="details">
                    {/* <h3>Contact Management App</h3> */}
                    {/* <p><b><span>Unitrack Global</span></b></p> */}
                    <p>This project involves developing a contact management application using React, designed to perform CRUD functionalities. The application will leverage local storage to manage contact data, ensuring data persistence across sessions.</p>
                    <a href='https://cm-application.vercel.app/' target='_blank'>Live Preview &rarr;</a>
                </div>
            </div>
            <div className="box">
                <img src={'./../Images/TTT.jpg'} alt='image' width={500} />
                <div className="details">
                    {/* <h3>Tic Tac Toe</h3> */}
                    {/* <p><b><span>Unitrack Global</span></b></p> */}
                    <p>This project involves creating a classic Tic Tac Toe game using React. The game will be interactive, allowing two players to compete against each other, and will showcase the dynamic capabilities of React.</p>
                    <a href='https://tic-tac-toe-iota-one-58.vercel.app/' target='_blank'>Live Preview &rarr;</a>
                </div>
            </div>
            <div className="box">
                <img src={'./../Images/Calc.jpg'} alt='image' width={500} />
                <div className="details">
                    {/* <h3>Calculator</h3> */}
                    {/* <p><b><span>Unitrack Global</span></b></p> */}
                    <p>This project involves developing a functional calculator application using React. The calculator will perform basic arithmetic operations and provide an intuitive user interface for seamless calculation tasks.</p>
                    <a href='https://calculator-one-mu-42.vercel.app/' target='_blank'>Live Preview &rarr;</a>
                </div>
            </div>

        </div>
    )
}

export default Project
