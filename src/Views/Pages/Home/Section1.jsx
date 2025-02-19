import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Button2 from '../Components/Button2/Button2';
import DecryptedText from '../ReactBits/DecryptedText/DecryptedText ';
import { NavLink } from 'react-router-dom';

AOS.init({
    duration: 1000, // Animation duration
    once: true, // Only animate once
});

const Section1 = () => {
    return (
        <>
            {/* <section className="mb-5">
                <div className="container-fluid bg-img mb-5">
                    <div className="row py-5">
                        <div className="col-12 py-5 mt-5" data-aos="fade-up">
                            <h1 className="text-white text-center fw-bold text-capitalize mt-5 fs-1 mb-4">
                                Extensive Background in IT Training, Professional Consulting, and Employment Placement Services.
                            </h1>
                            <button className="btn btn-outline-success mt-4 d-block mx-auto text-center text-uppercase fw-bold py-2 px-4 shadow-lg hover-effect">
                                Forward Your Resume
                            </button>
                        </div>
                        <div className="col-12 py-5 mt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 mt-5 mt-sm-0" data-aos="fade-up">
                                        <div className="card shadow-lg hover-card">
                                            <div className="card-body">
                                                <h5 className="card-title text-success fw-bold mb-3">Equipping Future IT Professionals with Expertise in:</h5>
                                                <ul className="card-text">
                                                    <li>IT Training</li>
                                                    <li>IT Consulting</li>
                                                    <li>E-Business Solutions</li>
                                                    <li>Employment Placement</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5 mt-sm-0" data-aos="fade-up" data-aos-delay="200">
                                        <div className="card shadow-lg hover-card">
                                            <div className="card-body">
                                                <h5 className="card-title text-success fw-bold mb-3">Enhancing Your IT Pathway with Expertise in:</h5>
                                                <ul className="card-text">
                                                    <li>Custom IT Solutions</li>
                                                    <li>Cybersecurity & Risk Management</li>
                                                    <li>Data Analytics & Business Intelligence</li>
                                                    <li>Project Management</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mt-5 mt-sm-0" data-aos="fade-up" data-aos-delay="400">
                                        <div className="card shadow-lg hover-card">
                                            <div className="card-body">
                                                <h5 className="card-title text-success fw-bold mb-3">Navigating the IT Landscape with Expertise in:</h5>
                                                <ul className="card-text">
                                                    <li>Cloud Computing</li>
                                                    <li>Artificial Intelligence</li>
                                                    <li>Internet of Things (IoT)</li>
                                                    <li>Blockchain</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 py-4 mt-lg-4 mt-0" data-aos="fade-up">
                            {/* <h1 className="display-3 py-4 fw-bold text-capitalize mt-0 mt-lg-4 mb-4">
                                Expertise in IT Training, Consulting, and Employment Placement."
                            </h1> */}
                            <div style={{
                                marginTop: '4rem', transform: "translateZ(0)",
                                boxSizing: "border-box"
                            }} className='display-3 py-4 fw-bold text-capitalize mt-0 mt-lg-4 mb-4'>
                                <DecryptedText
                                    text="Expertise in IT Training, Consulting, and Employment Placement."
                                    animateOn="view"
                                    revealDirection="start"
                                    speed={100}
                                    maxIterations={15}
                                    characters="ABCD1234!?"
                                    className="revealed "
                                    parentClassName="all-letters"
                                    encryptedClassName="encrypted"
                                />
                            </div>
                            <p className='mt-2'>
                                Our mission is to empower individuals and organizations through expert IT training, strategic consulting, and seamless employment placement services. We help businesses enhance their workforce and guide professionals toward meaningful career opportunities in the digital world.
                            </p>
                            <div className=" buttonContainer d-flex justify-content-center align-items-center  mt-5 ms-0 ps-0">
                                {/* <Button2 value={"Forward Your Resume"} className="ms-0 ps-0" /> */}
                                <NavLink to="/contact">
                                    <Button2 value={"Contact Now"} className="ms-0 ps-0" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 py-5  mt-5 mb-5   ">
                            <div className="container-fluid bgImg">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div data-aos="zoom-in" className="col-lg-12 py-4 text-center cardShadow  rounded ">
                                        <img src="mainImage.jpg" width={"100%"} alt="" className="img-fluid mb-5" />
                                        <h2 className='fw-bold fs-3 text-uppercase text-center' > Onyx  &nbsp;Consultancy &nbsp;Services &nbsp;  Inc</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <script>
                AOS.init();
            </script>
        </>
    );
};

export default Section1;
