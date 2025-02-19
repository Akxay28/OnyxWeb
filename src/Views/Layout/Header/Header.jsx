import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../Pages/Components/Button/Button';
import { head, style } from 'framer-motion/client';
import { color, hover } from 'framer-motion';

Aos.init({
    duration: 1000, // Animation duration
    once: true, // Only animate once
});

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);


    let myStyle = {
        dropdownMenu: {
            display: isHovered ? 'block' : 'none',
            position: 'absolute',
            left: '107%',
            top: " 0%",
            backgroundColor: "white",
            color: "black"
        },
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/' href="#" data-aos="fade-down" data-aos-delay="100" style={{ cursor: "pointer" }} >
                        <img width={100} src="OnyxLogoBGREMOVE.png" alt="Onyx It Path Solutions" className='img-fluid ' />
                    </NavLink>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="  bg-white fa-solid fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item" data-aos="fade-down" >
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" to="/" data-aos="fade-down" data-aos-delay="100">
                                    <Button value={"Home"} />
                                </NavLink>
                            </li>
                            <li className="nav-item" data-aos="fade-down" data-aos-delay="200">
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" to="/about" data-aos="fade-down" data-aos-delay="200">
                                    <Button value={"About us"} />
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown" data-aos="fade-down" data-aos-delay="400" >
                                <NavLink className="nav-link dropdown-toggle text-white text-uppercase" id="navbarDropdown" role="button" data-aos=" fade-down" data-aos-delay="300">
                                    <Button value={"Trainings"} />
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                                    <Link to="/businessanalysis" className='text-decoration-none '><a className="dropdown-item mt-3 mb-3" href="#">Business Analysis</a></Link>
                                    <Link to="/dataanalysis" className='text-decoration-none '><a className="dropdown-item mt-3 mb-3" href="#">Data Analysis</a></Link>
                                    <Link to="/qualityassurance" className='text-decoration-none '><a className="dropdown-item mt-3 mb-3" href="#">Quality Assurance</a></Link>
                                    <Link to="/scrummaster" className='text-decoration-none '><a className="dropdown-item mt-3 mb-3" href="#">Scrum Master Professional</a></Link>

                                </ul>
                            </li>
                            <li className="nav-item dropdown" data-aos="fade-down" data-aos-delay="400">
                                <NavLink className="nav-link text-white text-uppercase dropdown-toggle py-2 " id="navbarDropdown" role="button" data-aos="fade-down" data-aos-delay="400" >
                                    <Button value={"Services"} />
                                </NavLink>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li className="dropdown-item" style={{ position: 'relative', display: 'inline-block' }}
                                        onMouseEnter={() => setIsHovered(true)} // When mouse enters, set hover state to true
                                        onMouseLeave={() => setIsHovered(false)} // When mouse leaves, set hover state to false
                                    >
                                        <div className="btn-group dropend">
                                            <button className="dropdown-toggle" type="button" >
                                                It Consultation & Services
                                            </button>

                                            {/* Apply the style to the dropdown */}
                                            <ul className="dropdown-menu" style={myStyle.dropdownMenu} >
                                                <Link className='text-decoration-none' to="/ecommerce"><a className="dropdown-item" href="#">eCommerce</a></Link>
                                                <Link className='text-decoration-none' to="/mobile"><a className="dropdown-item" href="#">Mobile</a></Link>
                                                <Link className='text-decoration-none' to="/fullstack"><a className="dropdown-item" href="#">Full Stack</a></Link>
                                                <Link className='text-decoration-none' to="/aiml"><a className="dropdown-item" href="#">AI & ML</a></Link>
                                                <Link className='text-decoration-none' to="/microsoft"><a className="dropdown-item" href="#">MicroSoft</a></Link>
                                                <Link className='text-decoration-none' to="/cloud"><a className="dropdown-item" href="#">Cloud</a></Link>
                                                <Link className='text-decoration-none' to="/digitalTransformation"><a className="dropdown-item" href="#">Digital Transformation</a></Link>
                                                <Link className='text-decoration-none' to="/digitalMarketing"><a className="dropdown-item" href="#">Digital Marketing</a></Link>
                                            </ul>
                                        </div>
                                    </li>
                                    <Link className='text-decoration-none'>
                                        <a className="dropdown-item mt-3 mb-3" href="#">IT Staffing</a>
                                    </Link>
                                </ul>

                            </li>

                            <li className="nav-item" data-aos="fade-down">
                                <NavLink className="nav-link text-white text-uppercase" to="/contact" aria-current="page" href="#" data-aos="fade-down" data-aos-delay="600">
                                    <Button value={"Contact us"} />
                                </NavLink>
                            </li>
                        </ul>
                        {/* <button className="btn btn-outline-success" type="submit" data-aos="zoom-in" data-aos-delay="700">Forward Your Resume</button> */}
                    </div>
                </div >
            </nav >

            <script>
                AOS.init();
            </script>


        </>
    )
}

export default Header