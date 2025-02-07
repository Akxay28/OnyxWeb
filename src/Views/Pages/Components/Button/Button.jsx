import React from 'react'
import "./Button.css"

const Button = ({ value }) => {
    return (
        <>
            <button className="btnui">{value}</button>
        </>
    )
}

export default Button