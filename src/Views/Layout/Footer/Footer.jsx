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
                                    <p class="para_two mt-4 text-light">Onyx Consultancy Services Inc  is an IT training and placement company founded in 2024 and incorporated in Wyoming, USA. Our mission is to provide top-tier learning solutions while helping professionals secure placements in IT projects. With a growing global presence through associate offices and teams worldwide, we are committed to preparing candidates for successful and rewarding careers in the ever-evolving IT sector.
                                    </p>

                                </div>
                                <div class="col-lg-3 mt-5">
                                    <div class="para text-warning fs-3 ms-5 mt-2">Quick Links</div>
                                    <div class="para_two text-light fs-6 ms-5 mt-3 ps-4">
                                        <NavLink className="text-white d-block text-decoration-none mt-2" to="/"> <i class="fa-solid fa-greater-than me-3"></i> Home</NavLink >
                                        <NavLink className="text-white d-block text-decoration-none mt-2" to="/about"> <i class="fa-solid fa-greater-than me-3"></i> About</NavLink >
                                        {/* <NavLink className="text-white d-block text-decoration-none mt-2" to="/services"> <i class="fa-solid fa-greater-than me-3" ></i> Services</NavLink > */}
                                        <NavLink className="text-white d-block text-decoration-none mt-2" to="/contact" > <i class="fa-solid fa-greater-than me-3"></i> Contact</NavLink >
                                    </div>
                                </div>
                                <div class="col-lg-3 mt-5">
                                    <div class="para text-warning fs-3  mt-2">Contact</div>
                                    <div class="para_two text-light ps-3   mt-3">
                                        <span class="text-warning">Email :</span> Info@onyxconsultancyservices.co

                                    </div>
                                    <div class="para_two text-light ms-3 mt-2">
                                        <span className='text-warning'>Phone :</span> +1(307)-312 4554
                                    </div>
                                    <div>

                                        <div className='para_two text-light ms-3 mt-2'>
                                            <span className='text-warning'>Address:</span>
                                            1603 Capitol Ave Ste 413A No 2932,
                                            Cheyenne, WY 82001

                                        </div>
                                    </div>

                                    <div class="para text-warning fs-3  mt-4">Follow Us</div>
                                    <div
                                        class=" d-flex align-items-center mt-4 w-100 ms-0">
                                        <div class="iconFooter  ms-0 text-light">
                                            <span className='text-warning ms-3'>Contact : </span><i class="fa-brands ms-3 fa-linkedin me-3 fs-5"></i>
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
                </section >
            </div >
        </>
    )
}

export default Footer