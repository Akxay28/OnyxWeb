import React from 'react'
import "./Button2.css"

const Button2 = ({ value }) => {
    return (
        <>
            <div class=" buttonContainer" data-aos="zoom-out-right" data-aos-delay="1200">
                <a href="#" class="button type--C">
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text">{value}</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
            </div>

        </>
    )
}

export default Button2