import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Pages/Components/Button/Button'
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
    duration: 1000, // Animation duration
    once: true, // Only animate once
});

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white" href="#" data-aos="fade-down">Navbar</NavLink>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="  bg-white fa-solid fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item" data-aos="fade-up" >
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" href="#" data-aos="fade-up" data-aos-delay="100">
                                    <Button value={"Home"} />
                                </NavLink>
                            </li>
                            <li className="nav-item" data-aos="fade-up" data-aos-delay="200">
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" href="#" data-aos="fade-up" data-aos-delay="200">
                                    <Button value={"About us"} />
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown" data-aos="fade-up" data-aos-delay="400">
                                <NavLink className="nav-link dropdown-toggle text-white text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-aos=" fade-up" data-aos-delay="300">
                                    <Button value={"Trainings"} />
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item" data-aos="fade-up" data-aos-delay="400">
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" href="#" data-aos="fade-up" data-aos-delay="400">
                                    <Button value={"Services"} />
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown" data-aos="fade-up" data-aos-delay="200">
                                <NavLink className="nav-link dropdown-toggle text-white text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-aos="fade-up" data-aos-delay="500">
                                    <Button value={"Careers"} />
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                            <li className="nav-item" data-aos="fade-up">
                                <NavLink className="nav-link text-white text-uppercase" aria-current="page" href="#" data-aos="fade-up" data-aos-delay="600">
                                    <Button value={"Contact us"} />
                                </NavLink>
                            </li>
                        </ul>
                        {/* <button className="btn btn-outline-success" type="submit" data-aos="zoom-in" data-aos-delay="700">Forward Your Resume</button> */}
                    </div>
                </div>
            </nav >

            <script>
                AOS.init();
            </script>
        </>
    )
}

export default Header