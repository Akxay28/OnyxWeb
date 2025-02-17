import React, { useEffect, useRef } from 'react'
import "./HealthCare.css"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Section5 from '../Home/Section5';

const HealthCare = () => {

    return (
        <>
            <header className="hero position-relative d-flex align-items-center justify-content-center text-center" data-aos="fade-up">
                <div className="overlay"></div>
                <div className="container hero-content">
                    <h1 className="first-text">Onyx Consultancy Services Inc</h1>
                    <p className="text-white fs-3">Sourcing highly qualified professionals for healthcare facilities.</p>
                    <a href="#why-us" className="btn btn-custom mt-3" data-aos="zoom-in">Learn More</a>
                </div>
            </header>

            <section id="why-us" className="section1 text-center py-5" data-aos="fade-up">
                <div className="container">
                    <h2 className="health">Why Onyx Consultancy Services Inc</h2>
                    <div className="underline mx-auto"></div>
                    <p className="lead2">
                        <span>We</span> <span>provide</span> <span>top-tier</span>
                        <span>healthcare</span> <span>staffing</span> <span>solutions</span>
                        <span>while</span> <span>maintaining</span> <span>industry</span> <span>standards.</span>
                    </p>
                </div>
            </section>

            <div className="container py-5" data-aos="fade-up">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <section id="benefits" className="section text-center p-4" data-aos="fade-up">
                            <h2 className="Benefits mt-3">Benefits</h2>
                            <ul className="dotted-list">
                                <li>Comprehensive Medical Benefits</li>
                                <li>Dental & Vision Insurance</li>
                                <li>401K with Employer Match</li>
                                <li>Free & Unlimited CEUs</li>
                                <li>Disability Insurance</li>
                            </ul>
                        </section>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <section id="perks" className="section text-center p-4">
                            <h2 className="Benefits mt-3">Perks</h2>
                            <ul className="dotted-list">
                                <li>Personal Career Consultant</li>
                                <li>Competitive Pay Rates</li>
                                <li>Exceptional Loyalty Program</li>
                                <li>Generous Referral Program</li>
                                <li>Complimentary Tax Returns*</li>
                            </ul>
                        </section>
                    </div>

                    <div className="col-lg-4 col-md-12" data-aos="fade-up">
                        <section id="service-excellence" className="section text-center p-4">
                            <h2 className="Benefits mt-3">Service Excellence</h2>
                            <ul className="dotted-list">
                                <li>24×7 Care Line</li>
                                <li>Clinical Liaison Support</li>
                                <li>Dedicated Single Point of Contact</li>
                                <li>Full-Service Travel Desk</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <section>
                <div className="container mt-5" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-10 col-sm-12">
                            <div className="content">
                                <h5 className="text-title">Specialized staffing and Recruitment Services for the Healthcare</h5>
                                <h3 className="text-pra mt-4 px-3">
                                    When it comes to providing effective and flexible staffing and recruitment services for the healthcare industry Onyx Consultancy Services Inc is your trusted partner.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container p-md-5 p-3 mt-5" data-aos="fade-up">
                    <div className="row border rounded-3 align-items-center justify-content-center service-box" style={{ position: "sticky", top: "100px" }}>
                        <div className="col-lg-7 col-md-12 ">
                            <div className="content-text text-start text-md-start">
                                <div class="icons">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Per Diem</h2>
                                <p className="text1 animate-text mt-3">
                                    Healthcare professionals offer a flexible staffing solution to address various staffing
                                    needs in healthcare settings. Whether it’s covering vacations, filling in for absences, or
                                    managing demand spikes, Per Diem professionals are available on an as-needed basis.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-none d-lg-block ">
                            <div className="image-wrapper animate-image">
                                <img src="a-complete-guide-in-to-per-diem-meanin__1_.png" className="img-fluid w-100 rounded shadow z-1" alt="Per Diem" />
                            </div>
                        </div>
                    </div>

                    <div className="row border rounded-3 align-items-center justify-content-center service-box" style={{ position: "sticky", top: "150px" }}>
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text text-start text-md-start">
                                <div class="icons">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Contract Medical Staff</h2>
                                <p className="text1 animate-text mt-3">
                                    Your go-to resource for dependable contract medical staff. For both short- and long-term
                                    periods, comprehensive care and unwavering support are provided, ensuring ideal personnel
                                    levels and efficient operations.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 d-none d-lg-block " >
                            <div class="image-wrapper animate-image">
                                <img src="unnamed.jpg" class="img-fluid w-100 rounded shadow z-1"
                                    alt="System Implementation" />
                            </div>
                            <div class="icon">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row border rounded-3 align-items-center justify-content-center service-box" style={{ position: "sticky", top: "200px" }}>
                        <div class="col-lg-7 col-md-12 ">
                            <div class="content-text text-start text-md-start">
                                <div class="icons">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h2 class="text-service animate-heading">Contract-To-Hire</h2>
                                <p class="text1 animate-text mt-3">

                                    Contract-To-Hire
                                    At Onyx Consultancy Services Inc Healthcare, we provide the Contract-To-Hire option, enabling you to
                                    assess potential hires in person before making a choice. With this strategy, you can
                                    evaluate a candidate’s talents and organizational fit, significantly lowering the chance
                                    that you’ll make a poor hire.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 d-none d-lg-block " >
                            <div class="image-wrapper animate-image">
                                <img src="Contract-to-Hire-min.webp" class="img-fluid w-100 rounded shadow z-1"
                                    alt="System Implementation" />
                            </div>
                            <div class="icon">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row border rounded-3 align-items-center justify-content-center service-box" style={{ position: "sticky", top: "250px" }} >
                        <div class="col-lg-7 col-md-12 ">
                            <div class="content-text text-start text-md-start">
                                <div class="icons">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h2 class="text-service animate-heading">
                                    Permanent Placement</h2>
                                <p class="text1 animate-text mt-3">
                                    Let Onyx Consultancy Services Inc. Healthcare handle the preliminary procedures needed to draw in highly
                                    sought-after medical specialists. We thoroughly assess candidates—from reviewing
                                    applications to holding interviews—and deliver the best of the best to you for
                                    consideration.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 d-none d-lg-block " >
                            <div class="image-wrapper animate-image">
                                <img src="df4ed8f010fdeb2cc80ea5f464f2caa5.jpg"
                                    class="img-fluid w-100 rounded shadow z-1" alt="System Implementation" />
                            </div>
                            <div class="icon">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row border rounded-3 align-items-center justify-content-center service-box" style={{ position: "sticky", top: "300px" }} >
                        <div class="col-lg-7 col-md-12 ">
                            <div class="content-text text-start text-md-start">
                                <div class="icons">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <h2 class="text-service animate-heading">
                                    Nurse Staffing</h2>
                                <p class="text1 animate-text mt-3">
                                    We at Onyx Consultancy Services Inc. Healthcare are aware of the talent gap that exists right now in the
                                    nursing sector. We offer a range of services in teaching hospitals, skilled nursing
                                    institutions, clinical health, and travel nursing. We provide our clients with multifaceted
                                    professionals. Licensed nurses with expertise in a variety of nursing disciplines are
                                    available from our staff with experience.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-12 d-none d-lg-block " >
                            <div class="image-wrapper animate-image">
                                <img src="9-Nursing-Staffing-Tips-Banner-v2-1200x900.png"
                                    class="img-fluid w-100 rounded shadow z-1" alt="System Implementation" />
                            </div>
                            <div class="icon">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            <div class="container renge-container">
                <h2 class="range text-center p-2 mt-3" data-aos="fade-up">A Range of Specialized Services</h2>
                <div class="services-grid mt-3 p-4" id="servicesGrid">
                    <div class="row mt-3" data-aos="fade-up">
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Healthcare Ambulatory</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Medical Receptionist</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Office Managers</div>
                        </div>
                    </div>
                    <div class="row mt-3" data-aos="fade-up">
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Clinical Nurse Manager</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Practice Managers</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Drug Safety Specialist</div>
                        </div>
                    </div>

                    <div class="row mt-3" data-aos="fade-up">
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">HR Professionals</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Data Entry Operators</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Customer Service Support</div>
                        </div>
                    </div>
                    <div class="row mt-3" data-aos="fade-up">
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Registered Nurses</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Data Scientist</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Finance Managers</div>
                        </div>
                    </div>
                    <div class="row mt-3" data-aos="fade-up">
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Accountants</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Payroll Clerks</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Surgery Schedulers</div>
                        </div>
                    </div>
                    <div class="row mt-3" data-aos="fade-up">
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Executive Assistants</div>
                        </div>
                        <div class="col-12 col-md-4" style={{ cursor: 'pointer' }}>
                            <div class="service">Medical Affairs</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='mb-5'>
                <div class="container mt-5" data-aos="fade-up">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-10 col-sm-12">
                            <div class="content">
                                <h5 class="Supporting ">Supporting Healthcare Professionals in Achieving Their Career Goals</h5>
                                <h3 class="text-para mt-4 px-3">
                                    In  the  healthcare  industry
                                    Onyx Consultancy Services Inc  Healthcare  is
                                    dedicated
                                    to  providing  outstanding  working
                                    conditions  for  all  of  its
                                    personnel  By  providing  a
                                    variety
                                    of  possibilities  perks  ongoing
                                    training  and  round
                                    assistance
                                    we  place  a  high  priority
                                    on  their  wellbeing  We  give
                                    dedicated  individuals  to  employers
                                    who  are  totally  engaged
                                    motivated
                                    and  willing  to  make
                                    significant
                                    contributions  to  the  success
                                    of  your  facility  by
                                    assuring
                                    the  pleasure  of  our
                                    employees
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section5 />
        </>

    )
}

export default HealthCare