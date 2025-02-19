import React from 'react'
import { NavLink } from 'react-router-dom'

const Section3 = ({ cardTitle1, cardTitle2, cardTitle3 }) => {
    return (
        <>

            <section>
                <div class="container-fluid s3-bg py-5 bg-light position-relative">
                    <img src="case.svg" class="img-fluid w-100 position-absolute top-0 start-0" alt="" />
                    <div class="row py-5 justify-content-center">
                        <div class="col-12 py-5">
                            <p class="fs-1 fw-bold text-center text-black">Case studies</p>
                        </div>
                        <div class="col-lg-3 mb-lg-0 mb-3">
                            <div class="card case-1 case py-5" >
                                <div class=" text-center">
                                    <p class="card-text fs-1 text-light mb-5">{cardTitle1}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 mb-lg-0 mb-3">
                            <div class="card case-2 case py-5" >
                                <div class=" text-center">
                                    <p class="card-text fs-1 text-light mb-5">{cardTitle2}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 mb-lg-0 mb-3">
                            <div class="card case-3 case py-5 " >
                                <div class=" text-center">
                                    <p class="card-text fs-1 text-light mb-5">{cardTitle3}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 text-center">
                            <a href="#"
                                class="button  mt-4 text-decoration-none text-light" style={{ backgroundColor: "#7808d0" }}>
                                <span class="button__icon-wrapper">
                                    <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="button__icon-svg" width="10">
                                        <path
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            fill="currentColor"></path>
                                    </svg>

                                    <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg"
                                        class="button__icon-svg button__icon-svg--copy">
                                        <path
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            fill="currentColor"></path>
                                    </svg>
                                </span>
                                <NavLink className="nav-link text-white text-uppercase" to="/contact" aria-current="page" href="#" data-aos="fade-down" data-aos-delay="600">
                                    Contact Us                                </NavLink>                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3