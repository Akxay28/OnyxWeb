import React from 'react'

const Section2 = () => {
    return (
        <>
            <div className="container mt-0 mt-lg-4 py-0 py-lg-4">
                <div className="cursor"></div>
                <div className="row  mt-0 mt-lg-5 py-0 py-lg-5 d-flex justify-content-center">
                    <h2 className='fw-bold display-4 mb-5 text-dark' data-aos="fade-up" data-aos-delay="100" >Building Expertise for the Future of IT</h2>
                    {/* First Card */}
                    <div class="cardSectiontwo col-lg-4" data-aos="fade-up">
                        <p class="card-title fw-bold">Equipping Future IT Professionals with Expertise</p>
                        <ul class="small-desc" type="circle">
                            <li>IT Recruitment & Talent Acquisition</li>
                            <li>Executive Search for IT Leaders</li>
                            <li>Workforce Solutions & Staffing</li>
                            <li>Specialized IT Job Placement</li>
                            <li>Training & Development for IT Professionals</li>
                        </ul>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                    </div>

                    {/* Second Card */}
                    <div class="cardSectiontwo col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <p class="card-title fw-bold">Enhancing Your IT Pathway with Expertise in:</p>
                        <ul class="small-desc" type="circle">
                            <li>Custom IT Solutions for Staffing Needs</li>
                            <li>Cybersecurity & Risk Management</li>
                            <li> Business Intelligence Recruitment</li>
                            <li>Diversity and Inclusion in IT Hiring</li>
                        </ul>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                    </div>
                    {/* Third Card */}

                    {/* <div className="col-lg-4 mt-5 mt-sm-0" data-aos="fade-up" data-aos-delay="400">
                        <div className="card shadow-lg h-100 hover-card">
                            <div className="card-body  py-5">
                                <h5 className="card-title text-success fw-bold mb-3">Navigating the IT Landscape with Expertise in:</h5>
                                <ul className="card-text " type="circle">
                                    <li>Recruitment for Cloud Computing Professionals</li>
                                    <li>Artificial Intelligence Talent Search</li>
                                    <li>Internet of Things (IoT) Specialist Placement</li>
                                    <li>Blockchain & Distributed Ledger Hiring</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    <div class="cardSectiontwo col-lg-4 h-100 hover-card" data-aos="fade-up" data-aos-delay="400">
                        <p class="card-title fw-bold" >Navigating the IT Landscape with Expertise in:</p>
                        <ul class="small-desc" type="circle">
                            <li>Recruitment for Cloud Computing Professionals</li>
                            <li>Artificial Intelligence Talent Search</li>
                            <li>Internet of Things (IoT) Specialist Placement</li>
                            <li>Blockchain & Distributed Ledger Hiring</li>
                        </ul>
                        <div class="go-corner">
                            <div class="go-arrow">→</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2