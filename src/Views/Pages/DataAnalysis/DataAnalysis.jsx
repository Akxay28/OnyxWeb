import { section } from 'framer-motion/client'
import React, { useEffect } from 'react'
import './DataAnalysis.css'
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is loaded
import ContactBtn from '../Components/ContactBtn/ContactBtn';
import { NavLink } from 'react-router-dom';
import Section5 from '../Home/Section5';

Aos.init({
    duration: 1000, // Animation duration
    once: true, // Only animate once
});

const DataAnalysis = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <section className="data-analysis-section">
                <section>
                    <div className="container">
                        <div className="row">
                            <h2 className="py-4 fw-bold display-1">Data Analysis</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 p-0 mt-5">
                                <div className="services-container">
                                    <h4 className="services-title py-2">Course Progress</h4>
                                    <ul className="services-list">
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
                                        <li><strong>Foundational Data Skills:</strong> Learn data collection, cleaning, and
                                            visualization techniques using tools like Excel, SQL, and Python.
                                        </li>
                                        <li><strong>Analytical Thinking & Insights:</strong> Develop critical thinking skills to
                                            interpret data, recognize trends, and make data-driven decisions.
                                        </li>
                                        <li><strong>Practical Applications & Career Growth:</strong> Gain hands-on experience
                                            with
                                            real-world datasets, enhancing job prospects in business intelligence, finance, and
                                            tech.

                                        </li>
                                        <li><strong>Statistical & Predictive Analysis:</strong> Understand statistical methods
                                            and
                                            machine learning basics to forecast trends and optimize decision-making.
                                        </li>
                                    </ul>

                                    {/* Process */}
                                    <h2 className="section-title">Process</h2>
                                    <ul>
                                        <li><strong>Data Collection and Cleaning:</strong> Gathering relevant data from sources
                                            like databases, surveys, or sensors, followed by cleaning and preprocessing to
                                            remove errors, handle missing values, and standardize formats.
                                        </li>
                                        <li><strong>Exploratory Data Analysis (EDA) and Modeling:</strong> Using statistical
                                            methods and visualization tools to identify patterns, trends, and relationships,
                                            followed by applying machine learning or statistical models for deeper insights.
                                        </li>
                                        <li><strong>Data Interpretation and Reporting:</strong> Analyzing model results,
                                            validating accuracy, and presenting findings through reports, dashboards, and
                                            visualizations to support decision-making and strategic planning.
                                        </li>
                                    </ul>

                                    <p className="fs-5 text-secondry mb-lg-0 mb-sm-4">
                                        Data analysis is a structured approach to examining, cleaning, transforming, and
                                        interpreting data to extract meaningful insights. The process begins with data
                                        collection,
                                        where relevant information is gathered from various sources such as databases, surveys,
                                        or
                                        experiments. Next, data cleaning and preparation ensures accuracy by removing errors,
                                        handling missing values, and standardizing formats. Once the data is refined,
                                        exploratory
                                        data analysis (EDA) helps uncover patterns, trends, and relationships using statistical
                                        and
                                        visualization techniques.
                                    </p>

                                    <p className="fs-5 text-secondry mt-5">
                                        After EDA, the data modeling and interpretation phase involves applying machine learning
                                        or
                                        statistical models to identify correlations and predictions. These findings are then
                                        validated to ensure reliability. Finally, data visualization and reporting help
                                        communicate
                                        insights effectively through graphs, dashboards, and reports. This structured approach
                                        enables businesses and researchers to make data-driven decisions, enhancing efficiency
                                        and
                                        strategic planning.
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
                            <p className="lead">Learn data cleaning, visualization, statistics, and insights for better
                                decision-making.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card shadow-sm border-0 rounded rounded-4">
                                <img src="https://solutionvalley.com/wp-content/uploads/2019/07/data-analysis.jpg"
                                    className="card-img-top" alt="Image 1" />
                                <div className="card-body rounded rounded-4">
                                    <p className="card-text">Master essential data analysis techniques, including data cleaning,
                                        visualization, and statistical modeling, to derive actionable insights from raw data.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card shadow-sm border-0 rounded rounded-4">
                                <img src="https://images.squarespace-cdn.com/content/v1/61eae59a306ad12be1393adc/1666893270593-VB7JYFGSN1YUKLBEGLLL/2022-Norms-hero.jpg"
                                    className="card-img-top" alt="Image 2" />
                                <div className="card-body rounded rounded-4">
                                    <p className="card-text">Gain proficiency in industry-standard tools like Python, R, and SQL,
                                        enabling efficient data manipulation, trend identification, and predictive analytics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="card shadow-sm border-0 rounded rounded-4">
                                <img src="https://dfives.com/wp-content/uploads/2021/11/image-10.png" className="card-img-top"
                                    alt="Image 3" />
                                <div className="card-body rounded rounded-4">
                                    <p className="card-text">Develop critical thinking and problem-solving skills to interpret
                                        complex datasets, make data-driven decisions, and effectively communicate findings in
                                        business and research settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Training Modules Section */}

                <section className="training-section">
                    <h2 className="section-title">🚀 Training Modules</h2>
                    <p className="section-subtitle">Learn key data analysis techniques with hands-on practice.
                    </p>

                    <div className="training-modules">
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://www.esic.edu/sites/default/files/styles/full/public/rethink/813a7ee2-big-data-marketing.jpg?itok=F0gCGNCE"
                                alt="Agile and Scrum" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Introduction to Data Analysis</h3>
                                <p className="module-text">This module covers the basics of data analysis, including key concepts,
                                    data types, and the importance of structured data. Learners will also explore the role of
                                    data analysts in decision-making processes across various industries.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://lh4.googleusercontent.com/YIihF7bdygKPLHDHsmRJFI1zxU4tOnM-P02h8lwyJYOrt_xvec8qs7YiB0pxkjfoSEw-55jsF6YrLgA6ihOKDgFvKMJ5C7phhL0CNjUHBGSLmF8sIpMjDRnxzuyWM50UvDXDmXv3IiAgkoNsOg"
                                alt="Scrum Ceremonies" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Data Collection and Cleaning
                                </h3>
                                <p className="module-text">Understanding how to collect and preprocess data is essential for
                                    accurate analysis. This module focuses on data sources, collection techniques, and
                                    data-cleaning methods such as handling missing values, removing duplicates, and
                                    standardizing formats.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://assets.goldavenue.com/uploads/redactor2_assets/images/4656/People_looking_at_graphs_and_a_pie_chart.jpeg"
                                alt="Facilitation & Coaching" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Exploratory Data Analysis (EDA)
                                </h3>
                                <p className="module-text">EDA is a critical step in identifying patterns and insights from raw
                                    data. Students will learn visualization techniques, summary statistics, and how to use tools
                                    like Python’s Pandas and Matplotlib to interpret data effectively.</p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://pleshkoff.blog/wp-content/uploads/2021/02/1576159842430_tiny_file.png"
                                alt="Continuous Improvement" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Statistical Analysis and Hypothesis Testing</h3>
                                <p className="module-text">This module introduces statistical methods to analyze trends,
                                    relationships, and patterns within datasets. Learners will study probability distributions,
                                    confidence intervals, and hypothesis testing to validate data-driven conclusions.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://blog.datath.com/wp-content/uploads/2021/09/Data-Dashboard-2048x1161.png"
                                alt="Continuous Improvement" className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Data Visualization and Reporting</h3>
                                <p className="module-text">Effective communication of insights is as important as analysis itself.
                                    This module teaches best practices in data visualization using tools like Tableau and Power
                                    BI, along with techniques for creating impactful reports and dashboards.
                                </p>
                            </div>
                        </div>
                        <div className="module" data-aos="zoom-in" data-aos-delay="200">
                            <img src="https://i.ytimg.com/vi/6FpC-SveiUQ/maxresdefault.jpg" alt="Continuous Improvement"
                                className="module-image" />
                            <div className="module-content">
                                <h3 className="module-title">Machine Learning Basics for Data Analysis</h3>
                                <p className="module-text">The final module provides an introduction to machine learning concepts
                                    applicable to data analysis. Learners will explore supervised and unsupervised learning
                                    techniques, model evaluation, and the basics of predictive analytics to enhance
                                    decision-making.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Benifits Section */}

                <section className="container my-5" data-aos="fade-up">
                    <h2 className="text-center fw-bold">🎯 Benefits of Attending</h2>
                    <p className="text-center text-muted">A data analysis course equips you with the ability to interpret complex
                        datasets, recognize patterns, and make data-driven decisions. This skill is invaluable for businesses
                        and professionals looking to improve efficiency and accuracy in their work.
                    </p>

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <i className="fas fa-lightbulb"></i>
                                <h4>Enhanced Decision-Making</h4>
                                <p>Learn how to interpret data effectively, enabling informed and strategic business decisions.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <i className="fas fa-chart-line"></i>
                                <h4>Career Growth Opportunities</h4>
                                <p>Gain in-demand analytical skills that open doors to high-paying job roles in various
                                    industries.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="benefit-card">
                                <i className="fas fa-certificate"></i>
                                <h4>Certified Professional</h4>
                                <p>A certification boosts your credibility and increases job opportunities in your field.</p>
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

export default DataAnalysis;