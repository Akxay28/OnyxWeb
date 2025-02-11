import React from 'react'
import ContactBtn from '../Components/ContactBtn/ContactBtn'
import { Link, NavLink } from 'react-router-dom'

const Section5 = () => {
    return (
        <>
            <div className="container mb-5">
                <h2 className='fw-bold display-4 mb-5' data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "Orbitron" }}>Want a unique solution to meet your needs?</h2>
                <div className="row py-5 border rounded bg-img2">
                    <div className="col-md-12 py-5">
                        <div className="container" data-aos="fade-up" data-aos-delay="100">
                            {/* <span className='display-5'>Transforming Talent into Success</span><br /> */}
                            <span className='text-shadow display-5 capitalize'> Your Trusted Executive Search & <br /> <span className='text-warning'>Recruitment Partner.</span></span><br />
                            <Link className='text-decoration-none' to="/contact"> <ContactBtn /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section5