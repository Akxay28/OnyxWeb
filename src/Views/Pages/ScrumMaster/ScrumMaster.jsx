import { section } from 'framer-motion/client'
import React, { useEffect } from 'react'
import './ScrumMaster.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is loaded
import ContactBtn from '../Components/ContactBtn/ContactBtn';
import { NavLink } from 'react-router-dom';
import Section5 from '../Home/Section5';

Aos.init({
    duration: 1000, // Animation duration
    once: true, // Only animate once
});

const ScrumMaster = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <h2 className="py-4 fw-bold display-1">SCRUM MASTER</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 p-0 mt-5" data-aos="fade-right">
                            <div className="services-container">
                                <h4 className="services-title py-2">Course Progress</h4>
                                <ul className="services-list">
                                    <li>Beginner Level</li>
                                    <li>40 Hours Duration</li>
                                    <li>Max 110 Students</li>
                                    <li>Certificate Provided</li>
                                    <li>3 Total Enrolled</li>
                                    <li>1 Lecture</li>
                                    <li>Language: English</li>
                                    <li>Level: Beginner</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 mt-5">
                            <div className="row">
                                <div className="col-lg-12 ms-lg-4 mx-sm-2" id="ScrumMasterContainer" data-aos="fade-left">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mt-4" data-aos="fade-left">
                            <div className="contact-card">
                                <div className="contact-icon">
                                    <i className="fa-solid fa-headset" style={{ color: "#ffc107" }}></i>
                                </div>
                                <div className="contact-title mb-4">
                                    <span>How can we help?</span>
                                </div>
                                <div className="contact-info text-lg-start text-md-center text-sm-end ">
                                    <p><i className="fas fa-home"></i> 1603 Capitol Ave Ste<br /> 413A No 2932, Cheyenne, WY 82001</p>
                                    <p><i className="fas fa-phone-alt"></i> +1(307)-312 4554</p>
                                </div>
                                <NavLink to="/contact" className="text-decoration-none">
                                    <ContactBtn />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-9 mt-lg-0 mt-sm-5">
                            <div className="p-lg-5 p-sm-0" data-aos="fade-up">
                                {/* What You'll Gain  */}
                                <h2 className="display-5 mb-3 mt-3">What You'll Gain</h2>
                                <ul type='circle '>
                                    <li><strong>Agile Mindset:</strong> Master the principles of Agile and Scrum.</li>
                                    <li><strong>Leadership Skills:</strong> Learn how to facilitate Scrum events and guide teams effectively.</li>
                                    <li><strong>Problem-Solving:</strong> Handle challenges and conflicts in Agile environments.</li>
                                    <li><strong>Career Growth:</strong> Open doors to new opportunities in Agile and project management.</li>
                                </ul>

                                {/* Process */}
                                <h2 className="display-5 mb-3 mt-3">Process</h2>
                                <ul type='circle '>
                                    <li><strong>Introduction to Scrum:</strong> Understand Scrum fundamentals, roles, and artifacts.</li>
                                    <li><strong>Hands-on Training:</strong> Engage in real-world scenarios and Agile simulations.</li>
                                    <li><strong>Certification Prep:</strong> Get ready for the Professional Scrum Master (PSM) certification exam.</li>
                                </ul>



                                <p className="fs-5 text-secondry mb-sm-4">
                                    Whether you're new to Agile or an experienced project manager, this course provides a
                                    structured learning experience that
                                    blends theory with practical applications. You'll learn how to foster collaboration, improve
                                    team accountability, and
                                    streamline workflows to deliver high-value products efficiently.
                                </p>

                                <p className="fs-5 text-secondry">
                                    By the end of the course, you'll be well-prepared to take on the Scrum Master role with
                                    confidence, helping your teams
                                    embrace Agile values and deliver exceptional results. Additionally, our certification
                                    preparation module ensures that
                                    you have the best chance of passing the Professional Scrum Master (PSM) exam, validating
                                    your expertise in the field.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="container main-content pt-5" id="outcomes" data-aos="fade-up">
                <div className="row mb-4 text-center">
                    <div className="col">
                        <h1>Key Learning Outcomes</h1>
                        <p className="text-dark fs-5 mb-3">Learn the principles and practices of Scrum to lead agile teams effectively.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4" data-aos="flip-left">
                        <div className="card-scrumMaster shadow-sm border-0 rounded rounded-4">
                            <img src="Scrum-Framework-1.jpg" className="card-img-top" alt="Image 1" />
                            <div className="card-body rounded rounded-4">
                                <p className="card-text">Understand Scrum frameworks and how they enable teams to deliver products incrementally.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="flip-left">
                        <div className="card-scrumMaster shadow-sm border-0 rounded rounded-4">
                            <img src="ScrumValues-1536x959.png" className="card-img-top" alt="Image 2" />
                            <div className="card-body rounded rounded-4">
                                <p className="card-text">Develop skills to coach Scrum teams and ensure that Scrum processes are followed properly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4" data-aos="flip-left">
                        <div className="card-scrumMaster shadow-sm border-0 rounded rounded-4">
                            <img src="10cdcc6344bdded4ee19e6b6d3903ff1.jpg" className="card-img-top" alt="Image 3" />
                            <div className="card-body rounded rounded-4">
                                <p className="card-text">Learn how to remove impediments and facilitate effective communication within Scrum teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Training Modules Section */}
            <section className="training-section">
                <h2 className="text-center" data-aos="fade-up">🚀 Training Modules</h2>
                <p className="section-subtitle" data-aos="fade-up">Master Agile & Scrum with these essential modules.</p>

                <div className="training-modules">
                    <div className="module" data-aos="zoom-in" data-aos-delay="200">
                        <img src="aglie.png" alt="Agile and Scrum" className="module-image" />
                        <div className="module-content">
                            <h3 className="module-title">Introduction to Agile & Scrum</h3>
                            <p className="module-text">Our Scrum Master Professional Fundamentals Training is an interactive and engaging course that covers the A to Z of Scrum methodologies and agile practices.</p>
                        </div>
                    </div>
                    <div className="module" data-aos="zoom-in" data-aos-delay="400">
                        <img src="scrum-ceremonies.png" alt="Scrum Ceremonies" className="module-image" />
                        <div className="module-content">
                            <h3 className="module-title">Scrum Ceremonies</h3>
                            <p className="module-text">Understand Scrum ceremonies like Sprint Planning, Daily Scrum, and Reviews. Roles and Responsibilities: Deep dive into the roles of Scrum Master, Product Owner, and Development Team.</p>
                        </div>
                    </div>
                    <div class="module" data-aos="zoom-in" data-aos-delay="600">
                        <img src="5A-Leadership-Development-Goals-1.jpg" alt="Facilitation & Coaching" class="module-image" />
                        <div class="module-content">
                            <h3 class="module-title">Facilitation & Coaching</h3>
                            <p class="module-text">Enhance leadership skills for effective Scrum facilitation and coaching, the skills needed to effectively facilitate Scrum ceremonies. Techniques to effectively facilitate Scrum events and coach agile teams.</p>
                        </div>
                    </div>
                    <div class="module" data-aos="zoom-in" data-aos-delay="800">
                        <img src="How-many-blog-website-views.jpg" alt="Continuous Improvement" class="module-image" />
                        <div class="module-content">
                            <h3 class="module-title">Continuous Improvement</h3>
                            <p class="module-text">Create a culture of continuous improvement for Agile success. Promote a culture of continuous improvement by helping your team reflect on processes and outcomes.</p>
                        </div>
                    </div>
                    <div class="module" data-aos="zoom-in" data-aos-delay="1000">
                        <img src="1695603032145.png" alt="Continuous Improvement" class="module-image" />
                        <div class="module-content">
                            <h3 class="module-title">Sprint Planning & Execution</h3>
                            <p class="module-text">Learn how to effectively plan and execute sprints for better team collaboration and efficiency, Learn how to foster a collaborative team environment.</p>
                        </div>
                    </div>
                    <div class="module" data-aos="zoom-in" data-aos-delay="1200">
                        <img src="image2-1.png" alt="Continuous Improvement" class="module-image" />
                        <div class="module-content">
                            <h3 class="module-title">Agile Metrics & Reporting</h3>
                            <p class="module-text">Measure Scrum success using key agile metrics and reporting techniques for continuous growth. Enhance your capability to lead and facilitate agile teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits section */}
            <section className="container my-5" data-aos="fade-up">
                <h2 className="text-center fw-bold">🎯 Benefits of Attending</h2>
                <p className="text-center text-muted">Discover how becoming a certified Scrum Master can boost your career and project management skills.</p>

                <div className="row mt-4">
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="benefit-card">
                            <i className="fas fa-lightbulb"></i>
                            <h4>Master Agile Practices</h4>
                            <p>Enhance your understanding of Agile and Scrum principles for effective team leadership.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="benefit-card">
                            <i className="fas fa-chart-line"></i>
                            <h4>Career Advancement</h4>
                            <p>Gain a competitive edge and increase your employability in agile project management roles.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="benefit-card">
                            <i className="fas fa-certificate"></i>
                            <h4>Certified Professional</h4>
                            <p>Earn a certificate of completion to showcase your expertise in Scrum Master practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Section5 />
        </>
    );
}

export default ScrumMaster;
