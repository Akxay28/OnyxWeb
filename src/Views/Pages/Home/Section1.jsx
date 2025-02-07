import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
    duration: 1000, // Animation duration
    once: true, // Only animate once
});

const Section1 = () => {
    return (
        <>
            <section className="mb-5">
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
            </section>

            <script>
                AOS.init();
            </script>
        </>
    );
};

export default Section1;
