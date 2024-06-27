import React from 'react'
import './Title.css'

const Title = (props) => {
    return (
        <div className="title">
            <p><b><span style={{ color: "firebrick" }}>{props.title1}</span></b></p>
            <h1>
                {props.title2}
            </h1>
        </div>
    )
}

export default Title
