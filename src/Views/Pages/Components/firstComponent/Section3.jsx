import Aos from 'aos';
import React from 'react'
import { NavLink } from 'react-router-dom'

Aos.init({
    duration: 1000, // Animation duration
    once: true, // Run animation only once
});

const Section3 = ({ cardTitle1, cardTitle2, cardTitle3 }) => {
    return (
        <>
            <section>
                <div className="container-fluid s3-bg py-5 bg-light position-relative">
                    <img src="case.svg" className="img-fluid w-100 position-absolute top-0 start-0" alt="" />
                    <div className="row py-5 justify-content-center">
                        <div className="col-12 py-5">
                            <p
                                className="fs-1 fw-bold text-center text-black"
                                data-aos="fade-down" // Added AOS for the section title
                                data-aos-duration="1000"
                            >
                                Case studies
                            </p>
                        </div>
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <div
                                className="card case-1 case py-5"
                                data-aos="zoom-in" // Added zoom-in animation to first card
                                data-aos-delay="300" // Delay for the animation
                                data-aos-duration="1000"
                            >
                                <div className="text-center">
                                    <p className="card-text fs-1 text-light mb-5">{cardTitle1}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <div
                                className="card case-2 case py-5"
                                data-aos="zoom-in" // Added zoom-in animation to second card
                                data-aos-delay="500" // Delay for second card animation
                                data-aos-duration="1000"
                            >
                                <div className="text-center">
                                    <p className="card-text fs-1 text-light mb-5">{cardTitle2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <div
                                className="card case-3 case py-5"
                                data-aos="zoom-in" // Added zoom-in animation to third card
                                data-aos-delay="700" // Delay for third card animation
                                data-aos-duration="1000"
                            >
                                <div className="text-center">
                                    <p className="card-text fs-1 text-light mb-5">{cardTitle3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a
                                href="#"
                                className="button mt-4 text-decoration-none text-light"
                                style={{ backgroundColor: "#7808d0" }}
                                data-aos="fade-up" // Fade-up animation for the button
                                data-aos-delay="1000"
                                data-aos-duration="1000"
                            >
                                <span className="button__icon-wrapper">
                                    <svg
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="button__icon-svg"
                                        width="10"
                                    >
                                        <path
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>

                                    <svg
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        width="10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="button__icon-svg button__icon-svg--copy"
                                    >
                                        <path
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                                <NavLink
                                    className="nav-link text-white text-uppercase"
                                    to="/contact"
                                    aria-current="page"
                                    data-aos="fade-down" // Added fade-down animation to the link
                                    data-aos-delay="1200"
                                    data-aos-duration="1000"
                                >
                                    Contact Us
                                </NavLink>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Section3;
