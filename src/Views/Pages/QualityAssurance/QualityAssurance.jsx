import { section } from 'framer-motion/client'
import React, { useEffect } from 'react'
import './QualityAssurance.css'
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
            <section class="qualityAssuranceSection">
                <section>
                    <div class="container">
                        <div class="row">
                            <h2 class="py-4 fw-bold display-1">Quality Assurance</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 p-0 mt-5" data-aos="fade-right">
                                <div class="services-container">
                                    <h4 class="services-title py-2">Course Progress</h4>
                                    <ul class="services-list">
                                        <li>Beginner</li>
                                        <li>3 Total Enrolled</li>
                                        <li>40 hours Duration</li>
                                        <li>Lectures: 1</li>
                                        <li>Students: Max 110</li>
                                        <li>Level: Beginner</li>
                                        <li>Language: English</li>
                                        <li>Certificate: Yes</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9 mt-5">
                                <div class="row">
                                    <div class="col-lg-12 ms-lg-4 mx-sm-2" id="ScrumMasterContainer" data-aos="fade-left">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 p-0 mt-md-4" data-aos="fade-left">
                                <div class="contact-card">
                                    <div class="contact-icon">
                                        <i class="fa-solid fa-headset" style={{ color: "#ffc107" }}></i>
                                    </div>
                                    <div class="contact-title mb-4">
                                        <span>
                                            How can we help?
                                        </span>
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
                            <div class="col-lg-9 mt-lg-0 mt-sm-5">
                                <div class="p-lg-5 p-sm-0" data-aos="fade-up">
                                    {/* what its for*/}
                                    <h2 class="section-title titles">What You'll Gain</h2>
                                    <ul>
                                        <li><strong>Improved Product Quality:</strong> By focusing on consistent testing, you'll
                                            ensure that the product meets high-quality standards, reducing defects and improving
                                            user satisfaction.
                                        </li>
                                        <li><strong>Cost Savings:</strong> Identifying issues early in the development process
                                            helps
                                            prevent costly rework and fixes, leading to more efficient resource allocation and
                                            lower
                                            overall expenses.
                                        </li>
                                        <li><strong>Stronger Customer Trust:</strong> A well-tested product fosters confidence
                                            in
                                            your brand, increasing customer loyalty and reducing negative feedback, as users
                                            experience fewer issues.
                                        </li>
                                        <li><strong>Enhanced Team Collaboration:</strong> Quality assurance promotes better
                                            communication between developers, testers, and other stakeholders, leading to more
                                            efficient workflows and a smoother project development process.
                                        </li>
                                    </ul>

                                    {/* Process */}
                                    <h2 class="section-title titles">Process</h2>
                                    <ul>
                                        <li><strong>Planning:</strong> Defining quality standards, objectives, and identifying
                                            risks.
                                        </li>
                                        <li><strong>Testing:</strong> Evaluating the product to identify defects using various
                                            testing methods.</li>
                                        <li><strong>Improvement and Feedback:</strong> Analyzing feedback to make adjustments
                                            and
                                            ensure continuous improvement.
                                        </li>
                                    </ul>

                                    <p class="fs-5 text-secondry mb-lg-0 mb-sm-4">
                                        Quality Assurance (QA) is a systematic process aimed at ensuring products or services
                                        meet
                                        defined standards of quality before reaching the customer. The process begins with
                                        planning
                                        and defining the quality objectives, which are based on customer requirements, industry
                                        standards, and regulatory guidelines. Once the objectives are established, QA teams
                                        develop
                                        detailed test plans, create testing protocols, and identify the necessary tools for
                                        assessment. These testing activities include reviewing design specifications, performing
                                        risk assessments, and conducting software or product tests to identify any issues early.
                                        Through constant monitoring and evaluation, QA ensures that the product is on track to
                                        meet
                                        both the performance and safety standards.
                                    </p>

                                    <p class="fs-5 text-secondry mt-5">
                                        In addition to testing, the process also involves continuous improvement. After testing
                                        and
                                        identifying defects or areas for enhancement, the product or service undergoes
                                        revisions. QA
                                        teams work closely with development teams to ensure that the identified issues are
                                        resolved,
                                        and any necessary adjustments are made. This iterative process continues until the
                                        product
                                        meets the required quality standards. Furthermore, QA also includes documentation and
                                        reporting, ensuring that all quality processes and outcomes are recorded for
                                        traceability
                                        and compliance purposes. Effective quality assurance leads to the delivery of
                                        high-quality
                                        products, increased customer satisfaction, and a competitive edge in the market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Learning Outcomes Section */}

                <div class="container main-content pt-5" id="outcomes">
                    <div class="row mb-4 text-center">
                        <div class="col">
                            <h1 class="title">Key Learning Outcomes</h1>
                            <p class=" mb-3 text-dark fs-5">Key QA outcomes include testing, defect identification, and ensuring high-quality
                                products.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-4" data-aos="fade-up">
                            <div class="card shadow-sm border-0 rounded rounded-4">
                                <img src="0.w0c6nmrctvimagerie-QC-vs-QA-vs-QS.jpg"
                                    class="card-img-top" alt="Image 1" />
                                <div class="card-body rounded rounded-4">
                                    <p class="card-text">Key outcomes include a strong grasp of QA processes, ensuring quality
                                        at
                                        every stage of production and reducing errors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4" data-aos="fade-up">
                            <div class="card shadow-sm border-0 rounded rounded-4">
                                <img src="0d55722be11d45c41191be84cba48c06.png"
                                    class="card-img-top" alt="Image 2" />
                                <div class="card-body rounded rounded-4">
                                    <p class="card-text">Training builds skills in using testing tools and techniques to detect
                                        defects and improve product quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4" data-aos="fade-up">
                            <div class="card shadow-sm border-0 rounded rounded-4">
                                <img src="Improve Quality Control in Manufacturing - infographic.jpeg"
                                    class="card-img-top" alt="Image 3" />
                                <div class="card-body rounded rounded-4">
                                    <p class="card-text">QA focuses on continuous improvement, applying feedback and optimizing
                                        processes for long-term success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training Modules Section */}
                <section class="training-section">
                    <h2 class="section-title" data-aos="fade-up">Training Modules</h2>
                    <p class="section-subtitle" data-aos="fade-up">Learn key data analysis techniques with hands-on practice.
                    </p>

                    <div class="training-modules">
                        <div class="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="7.jpg"
                                alt="Agile and Scrum" class="module-image" />
                            <div class="module-content">
                                <h3 class="module-title">Introduction to Quality Assurance</h3>
                                <p class="module-text">This module covers the fundamental principles of Quality Assurance (QA),
                                    its
                                    importance in maintaining high-quality products, and its role across various industries.
                                    Learners gain an understanding of how QA contributes to the overall success of projects and
                                    businesses.
                                </p>
                            </div>
                        </div>
                        <div class="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="how-to-find-qa-outsourcing-companies-3-1536x800.jpg"
                                alt="Scrum Ceremonies" class="module-image" />
                            <div class="module-content">
                                <h3 class="module-title">QA Methodologies
                                </h3>
                                <p class="module-text">Trainees are introduced to a range of QA methodologies, such as Agile,
                                    Waterfall, and Continuous Integration/Continuous Deployment (CI/CD). The module emphasizes
                                    how
                                    these methodologies are applied in real-world scenarios, helping teams streamline workflows
                                    and
                                    ensure high-quality outcomes.
                                </p>
                            </div>
                        </div>
                        <div class="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="10172-копия-копия.jpg"
                                alt="Facilitation & Coaching" class="module-image" />
                            <div class="module-content">
                                <h3 class="module-title">Testing Techniques
                                </h3>
                                <p class="module-text">This section dives into the different types of testing, including
                                    functional,
                                    regression, performance, and user acceptance testing (UAT). Participants learn how each
                                    technique is used to verify various aspects of a product, ensuring that it meets the
                                    required
                                    specifications and performance standards.</p>
                            </div>
                        </div>
                        <div class="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="6360e18a0f64a061d2ee6b18_Automating-The-Process (1).jpg"
                                alt="Continuous Improvement" class="module-image" />
                            <div class="module-content">
                                <h3 class="module-title">Automation Tools</h3>
                                <p class="module-text">The module provides hands-on training in automation tools such as
                                    Selenium,
                                    JUnit, and QTP. Learners develop the skills to automate repetitive testing tasks, enhancing
                                    the
                                    efficiency and effectiveness of the QA process while reducing human error and improving
                                    consistency in results.
                                </p>
                            </div>
                        </div>
                        <div class="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="bug_reporting.png"
                                alt="Continuous Improvement" class="module-image" />
                            <div class="module-content">
                                <h3 class="module-title">Bug Tracking and Reporting</h3>
                                <p class="module-text">The final module provides an introduction to machine learning concepts
                                    applicable to data analysis. Learners will explore supervised and unsupervised learning
                                    techniques, model evaluation, and the basics of predictive analytics to enhance
                                    decision-making.
                                </p>
                            </div>
                        </div>
                        <div class="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="8e557a24aed72361bc9d8a449a405e2e62ef6d82-7048x4024.avif"
                                alt="Continuous Improvement" class="module-image" />
                            <div class="module-content">
                                <h3 class="module-title">Quality Standards and Best Practices</h3>
                                <p class="module-text">The final module introduces international QA standards such as ISO, Six
                                    Sigma, and industry-specific best practices. Learners gain an understanding of how these
                                    standards help ensure consistency, enhance product reliability, and maintain high levels of
                                    customer satisfaction across various industries.
                                </p>
                            </div>
                        </div>
                    </div>


                </section>

                {/* Benifits Section */}
                <section class="container my-5" data-aos="fade-up">
                    <h2 class="text-center fw-bold">Benefits of Attending</h2>
                    <p class="text-center text-muted">Quality Assurance training improves defect detection, boosting product
                        quality
                        and customer satisfaction.
                    </p>

                    <div class="row mt-4">
                        <div class="col-md-4">
                            <div class="benefit-card">
                                <i class="fas fa-chart-line"></i>
                                <h4>Improved Product Quality</h4>
                                <p>Attending Quality Assurance (QA) training ensures products meet high standards, reducing
                                    defects
                                    and enhancing user satisfaction.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="benefit-card">
                                <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                                <h4>Increased Efficiency</h4>
                                <p>QA practices streamline the development process, leading to faster production cycles and less
                                    time spent on rework.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="benefit-card">
                                <i class="fas fa-certificate"></i>
                                <h4>Certified Professional</h4>
                                <p>Becoming a Certified Professional in Quality Assurance adds credibility to your skill set,
                                    showing employers your commitment to excellence.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                < Section5 />
            </section>

        </>
    );
}

export default ScrumMaster;