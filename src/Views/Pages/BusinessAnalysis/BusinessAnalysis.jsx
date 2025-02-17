import { section } from 'framer-motion/client'
import React, { useEffect } from 'react'
import './BusinessAnalysis.css'
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
            <section className="bussiness-analysis-section">
                <section className="bussiness-analysis">
                    <div className="container">
                        <div className="row">
                            <h2 className="py-4 fw-bold display-1">Business Analytics Specialization</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 p-0 mt-5" data-aos="fade-right">
                                <div className="services-container">
                                    <h4 className="services-title py-2">Course Progress</h4>
                                    <ul className="services-list">
                                        <li>Beginner Level</li>
                                        <li>3 Total Enrolled
                                        </li>
                                        <li>40 hours Duration</li>
                                        <li>Lectures: 1</li>
                                        <li>Students: Max 110</li>
                                        <li>Level: Beginner</li>
                                        <li>Language: English</li>
                                        <li>Certificate: Yes</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 mt-5">
                                <div className="row">
                                    <div className="col-lg-12 ms-lg-4 mx-sm-2" id="ScrumMasterContainer" data-aos="fade-left">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-0 mt-md-4" data-aos="fade-left">
                                <div className="contact-card">
                                    <div className="contact-icon">
                                        <i className="fa-solid fa-headset" style={{ color: "#ffc107" }}></i>
                                    </div>
                                    <div className="contact-title mb-4">
                                        <span>
                                            How can we help?
                                        </span>
                                    </div>
                                    <div className="contact-info text-lg-start text-md-center text-sm-end ">
                                        <p><i className="fas fa-home"></i> 4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                                        <p><i className="fas fa-phone-alt"></i> (239) 555-0108</p>
                                    </div>
                                    <NavLink to="/contact" className="text-decoration-none">
                                        <ContactBtn />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-9 mt-lg-0 mt-sm-5">
                                <div className="p-lg-5 p-sm-0">
                                    {/* what its for*/}

                                    <h2 className="section-title">What You'll Gain</h2>
                                    <ul>
                                        <li><strong>Analytical Skills Development:</strong> You'll gain the ability to break
                                            down
                                            complex business problems and offer data-driven solutions.</li>
                                        <li><strong>Communication and Collaboration:</strong>You'll develop the skills to
                                            effectively communicate with stakeholders and work efficiently in teams.</li>
                                        <li><strong>Tools and Methodologies:</strong> You'll become proficient in using
                                            industry-standard tools and methodologies to drive business improvements.
                                        </li>
                                        <li><strong>Career Growth:</strong> Completing a Business Analysis course equips you
                                            with
                                            in-demand skills that are highly sought after across industries.</li>
                                    </ul>

                                    {/* Process */}
                                    <h2 className="section-title">Process</h2>
                                    <ul>
                                        <li><strong>Fundamentals of Business Analysis:</strong> Understanding the core
                                            principles of
                                            business analysis is essential to identifying and solving problems within an
                                            organization. This includes learning about the role of a business analyst, key
                                            stakeholders, and the methodologies used to gather requirements and assess business
                                            needs.
                                        </li>
                                        <li><strong>Techniques for Data Gathering and Requirement Elicitation:</strong>
                                            Effective
                                            data gathering is vital for uncovering the true needs of a business. Techniques such
                                            as
                                            interviews, surveys, workshops, and document analysis are used to extract and
                                            prioritize
                                            business requirements, ensuring that the solutions developed align with
                                            organizational
                                            goals.</li>
                                        <li><strong>Solution Design and Implementation:</strong>Once requirements are gathered,
                                            business analysts collaborate with stakeholders to design solutions that meet the
                                            identified needs. This involves creating detailed specifications, prototyping, and
                                            supporting the implementation of solutions while ensuring they integrate smoothly
                                            into
                                            existing systems.
                                        </li>
                                    </ul>

                                    <p className="fs-5 text-secondry mb-lg-0 mb-sm-4">
                                        Business analysis begins with requirements gathering, where the analyst engages
                                        stakeholders
                                        through interviews, surveys, and workshops to understand their needs and goals. Clear
                                        and
                                        precise documentation of these requirements ensures alignment with business objectives
                                        and
                                        provides a foundation for the next steps. This phase is crucial for creating a shared
                                        understanding among all stakeholders about what needs to be accomplished.
                                    </p>

                                    <p className="fs-5 text-secondry mt-4">

                                        Following gathering, the analyst moves to the analysis and evaluation phase, where they
                                        identify patterns, gaps, and potential solutions. Using techniques like SWOT or gap
                                        analysis, the business analyst evaluates the feasibility of various solutions and
                                        proposes
                                        the most effective strategies for the organization. The final step involves solution
                                        design
                                        and implementation, where the analyst collaborates with teams to create technical and
                                        functional specifications that meet the business needs, ensuring the solution is
                                        achievable
                                        within budget and timeline constraints. Once implemented, the analyst oversees testing,
                                        training, and support to ensure the solution delivers value and solves the business
                                        problem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Learning Outcomes Section */}

                <div className="container main-content pt-5" id="outcomes">
                    <div className="row mb-4 text-center">
                        <div className="col">
                            <h1>Key Learning Outcomes</h1>
                            <p className="lead">Master the principles and practices of Business Analysis to drive high-performing
                                teams
                                and deliver exceptional results.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card shadow-sm border-0 rounded rounded-4">
                                <img src="https://s24179.pcdn.co/wp-content/uploads/adult-back-view-data-1181345-2.jpg"
                                    className="card-img-top" alt="Image 1" />
                                <div className="card-body rounded rounded-4">
                                    <p className="card-text">Business analysis principles focus on understanding business needs,
                                        aligning solutions with goals, and fostering stakeholder collaboration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card shadow-sm border-0 rounded rounded-4">
                                <img src="https://cdn.dhakapost.com/media/imgAll/BG/2021July/feat-20210709111650.jpg"
                                    className="card-img-top" alt="Image 2" />
                                <div className="card-body rounded rounded-4">
                                    <p className="card-text">Core practices involve data gathering, process modeling, and
                                        documenting
                                        requirements to ensure clear and actionable solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card shadow-sm border-0 rounded rounded-4">
                                <img src="https://news.wpcarey.asu.edu/sites/default/files/leadership_1_0.jpeg"
                                    className="card-img-top" alt="Image 3" />
                                <div className="card-body rounded rounded-4">
                                    <p className="card-text">Continuous learning and adaptability enable business analysts to refine
                                        strategies and anticipate changes for ongoing organizational value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training Modules Section */}

                <section className="training-section">
                    <h2 className="section-title" data-aos="fade-up">🚀 Training Modules</h2>
                    <p className="section-subtitle" data-aos="fade-up">Master Agile & Scrum with these essential modules.</p>

                    <div className="training-modules">
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://i2.wp.com/foureyes.io/images/main/iStock-1192241835.jpg" alt="Agile and Scrum"
                                className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Introduction to Business Analysis</h3>
                                <p className="module-text">Relevance in Today’s Industry: Understanding the critical role of a
                                    Business
                                    Analyst.
                                    Roles and Responsibilities: Comprehensive overview of BA responsibilities.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://media.proglib.io/wp-uploads/2017/07/daris-soft.jpg" alt="Scrum Ceremonies"
                                className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Requirement Engineering</h3>
                                <p className="module-text">Fundamentals: Exploring types, common issues, and best practices.
                                    Analysis Techniques: PESTEL, SWOT, and other strategic tools.
                                    Change and Risk Management: Understanding the dynamics and necessary documentation.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://www.synotive.com/blog/wp-content/uploads/2017/02/software-development-life-cycle.jpg"
                                alt="Facilitation & Coaching" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Software Development Life Cycle (SDLC)</h3>
                                <p className="module-text">Enhance leadership skills for effective Scrum facilitation and coaching,
                                    the
                                    skills needed to effectively facilitate Scrum ceremonies. Techniques to effectively
                                    facilitate
                                    Scrum events and coach agile teams.</p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/0ef5d9b54e5f4dd3b2c0f178ed14bbff52897d02-1920x1080.jpg?rect=0,36,1920,1008&w=1200&h=630&auto=format&dpr=2"
                                alt="Continuous Improvement" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Practical Application</h3>
                                <p className="module-text">Document Creation: Crafting SRS, FRD, BRD, and more.
                                    Use Cases: From concept to document, including real-life examples.
                                    Requirement Traceability Matrix (RTM): Ensuring full coverage and gap analysis.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://piglja.com/wp-content/uploads/2022/07/business-analysis-scaled.jpeg"
                                alt="Continuous Improvement" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Additional Modules</h3>
                                <p className="module-text">System Quality Attributes: Understanding the non-functional requirements.
                                    Software Testing: Comprehensive look at testing types, levels, and the BA’s role.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://dataxus.com/assets/images/services/low/dataanalysis-min.jpeg"
                                alt="Continuous Improvement" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Industry-Specific Insights</h3>
                                <p className="module-text">Healthcare and Insurance: Standards like HIPAA and BASEL II.
                                    Retail and Banking: Industry-specific practices and challenges.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Benifits Section */}
                <section className="container my-5" data-aos="fade-up">
                    <h2 className="text-center fw-bold">🎯 Benefits of Attending</h2>
                    <p className="text-center text-muted">Discover how becoming a certified Scrum Master can boost your career and
                        project management skills.</p>

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <i className="fas fa-chart-line"></i>
                                <h4>Career Growth</h4>
                                <p><b> Job Opportunities</b>: Completing a Business Analysis course equips you with in-demand
                                    skills that are highly sought after across industries. This can open doors to various roles,
                                    including Business Analyst, Project Manager, Process Improvement Specialist, etc.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <i className="fas fa-lightbulb"></i>
                                <h4>Skill Development</h4>
                                <p>Attending a Business Analysis course equips you with critical problem-solving skills that are
                                    highly sought after in various industries. You will gain a deep understanding of business
                                    processes, requirements gathering, and solutions design, allowing you to take on more
                                    strategic
                                    roles.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <i className="fas fa-certificate"></i>
                                <h4>Certified Professional</h4>
                                <p>Becoming a certified business analyst sets you apart in the industry, offering official
                                    recognition of your expertise and commitment to the profession. Certification demonstrates
                                    your
                                    ability to apply industry-standard practices to real-world scenarios, making you a trusted
                                    resource for organizations.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}
                < Section5 />
            </section >
        </>
    );
}

export default ScrumMaster;