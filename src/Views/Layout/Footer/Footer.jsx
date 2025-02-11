import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div class="main_container mt-3" style={{ backgroundColor: "black" }}>
                <section>
                    <div class="container-fluid">
                        <div class="container">
                            <div class="row border-top border-dark">
                                <div class="col-lg-6">
                                    <div class="mt-5">
                                        <img src="OnyxLogoBGREMOVE.png"
                                            alt="Onyx logo image" class="img-fluid" width="180px" />
                                    </div>
                                    <p class="para_two mt-4 text-light">Onyx It Path Solutions, an IT training and placement company, was
                                        founded over 6 years ago and is incorporated in Virginia, USA. Our core mission is
                                        to provide comprehensive learning solutions and facilitate the placement of
                                        professionals in IT projects. With a global presence through associate offices and
                                        teams worldwide, we are dedicated to preparing candidates for promising careers in
                                        IT projects.
                                    </p>

                                </div>
                                <div class="col-lg-3 mt-5">
                                    <div class="para text-warning fs-3 ms-5 mt-2">Quick Links</div>
                                    <div class="para_two text-light fs-6 ms-5 mt-3 ps-4">
                                        <NavLink className="text-white d-block text-decoration-none mt-2" to="/"> <i class="fa-solid fa-greater-than me-3"></i> Home</NavLink >
                                        <NavLink className="text-white d-block text-decoration-none mt-2" to="/about"> <i class="fa-solid fa-greater-than me-3"></i> About</NavLink >
                                        <NavLink className="text-white d-block text-decoration-none mt-2" > <i class="fa-solid fa-greater-than me-3"></i> Training</NavLink >
                                        <NavLink className="text-white d-block text-decoration-none mt-2" to="/services"> <i class="fa-solid fa-greater-than me-3" ></i> Services</NavLink >
                                    </div>
                                </div>
                                <div class="col-lg-3 mt-5">
                                    <div class="para text-warning fs-3 ms-5 mt-2">Contact</div>
                                    <div class="para_two text-light ps-3 fs-6 ms-5 mt-2">info@OnyxItPathSolutions.co
                                    </div>
                                    <div class="para_two text-light ps-3 fs-6 ms-5 mt-2">+1 (571) 351-1228
                                    </div>

                                    <div class="para text-warning fs-3 ms-5 mt-4">Follw Us At:</div>
                                    <div
                                        class="d-flex justify-content-center w-75  ">
                                        <div class="iconFooter mt-2 ms-0 text-light">
                                            <i class="fa-brands fa-linkedin me-3 fs-5"></i>
                                            <i class="fa-brands fa-facebook me-3 fs-5"></i>
                                            <i class="fa-brands fa-instagram me-3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row border-bottom border-dark mt-4"></div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer