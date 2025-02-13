import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section5 from '../Home/Section5';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            duration: 1000, // Animation duration (milliseconds)
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation happens only once
        });

        // Function to animate counters
        const counters = document.querySelectorAll('.counter');

        const countUp = (element, targetValue) => {
            let current = 0;
            const increment = targetValue / 100;
            const interval = setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current);
                if (current >= targetValue) {
                    clearInterval(interval);
                    element.textContent = targetValue;
                }
            }, 30);
        };

        // Function to check if counters are in view
        const checkCountersInView = () => {
            counters.forEach(counter => {
                const counterPosition = counter.getBoundingClientRect();
                if (counterPosition.top <= window.innerHeight && !counter.classList.contains('counted')) {
                    const targetValue = parseInt(counter.getAttribute('data-count'));
                    countUp(counter, targetValue);
                    counter.classList.add('counted'); // To avoid counting multiple times
                }
            });
        };

        // Run the check function on scroll and load
        window.addEventListener('scroll', checkCountersInView);
        window.addEventListener('load', checkCountersInView);

        // Initial check when the page loads
        checkCountersInView();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', checkCountersInView);
            window.removeEventListener('load', checkCountersInView);
        };

    }, []);

    return (
        <>
            <div className="container">
                <div className="row gap-3">
                    <div className="about1 pb-3 mt-3 py-5 col-lg-7" data-aos="fade-right">
                        <h2 className='display-3 fw-bold'>Welcome to Onyx Consultancy Services Inc</h2>
                        <p>At Onyx Consultancy Services Inc, we are dedicated to bridging the gap between talented professionals and top-tier employers. With years of experience in the recruitment industry, our mission is to provide personalized, efficient, and effective hiring solutions for both candidates and businesses alike.

                            Our team of expert recruiters is passionate about matching skilled individuals with organizations that align with their goals and values. We take the time to understand the unique needs of both employers and job seekers to ensure a perfect fit every time.

                            Whether you are looking to expand your workforce with skilled professionals or searching for the next step in your career, [Company Name] is here to guide you through every step of the hiring process.

                            We believe in fostering long-lasting relationships, building trust, and offering the highest level of service to both job seekers and hiring companies. Your success is our success.</p>
                        <button className="btn1">
                            <div className="gradient-card mt-3">
                                <h5 className="fw-bold">Onyx Consultancy Services Inc</h5>
                                <p>Elevating Your Workforce, Empowering Your Success</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4" data-aos="fade-left">
                        <div className="custom-card mt-0 mt-lg-5">
                            <img src="waist-portrait-modern-business-woman-600nw-2259403041.webp"
                                className="img-fluid rounded" alt="Business Meeting" />
                            <h5 className="mt-3">Read Our Success Story for Inspiration</h5>
                            <p>Contact us today and let’s create your success story together!</p>
                            <button class="learn-more  border rounded-pill" data-aos="zoom-in">
                                <span class="circle" aria-hidden="true">
                                </span>
                                <span class="button-text" onClick={() => navigate('/contact')}>Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-0 mt-lg-5">
                <div className="container vision-section">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-in">
                            <h2 className=" display-5 fw-bold mb-3" >Experienced Recruiters Specializes In Finding The Right Executive Talent</h2>
                            <h6 className="text-danger">OUR VISION</h6>
                            <div className="mt-4">
                                <div className="mb-3">
                                    <span className="iconAbout">&#x1F310;</span>
                                    <strong>Building Great Network</strong>
                                    <p>Onyx Consultancy Services Inc is dedicated to establishing and nurturing a robust network...</p>
                                </div>
                                <div className="mb-3">
                                    <span className="iconAbout">&#x1F6A9;</span>
                                    <strong>Forging Strategic Alliances</strong>
                                    <p>Onyx Consultancy Services Inc is constantly expanding its network by forming strategic partnerships...</p>
                                </div>
                                <div>
                                    <span className="iconAbout">&#x1F4E1;</span>
                                    <strong>Connecting You To Opportunity</strong>
                                    <p>Our network opens doors to exciting opportunities...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="text-center mt-3 mb-3">
                                <img src="depositphotos_504549602-stock-photo-handsome-man-suit-phones-business.jpg"
                                    className="img-fluid rounded second-img" alt="Recruiter Meeting" />
                            </div>
                            <div className="highlight-box second-img">
                                <p>Our mission at Onyx Consultancy Services Inc is to deliver unmatched expertise...</p>
                                <ul>
                                    <li>✅ Best Team Work</li>
                                    <li>✅ Great Relation & Networking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Counter Section */}
            <div className="container p-3 p-md-5 offer mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3" data-aos="flip-left">
                        <div className="counter" data-count="42">0</div>
                        <div className="label">Countries Covered</div>
                    </div>
                    <div className="col-md-3" data-aos="flip-right">
                        <div className="counter" data-count="97">0</div>
                        <div className="label">Business Success</div>
                    </div>
                    <div className="col-md-3" data-aos="flip-left">
                        <div className="counter" data-count="2342">0</div>
                        <div className="label">Happy Clients</div>
                    </div>
                    <div className="col-md-3" data-aos="flip-right">
                        <div className="counter" data-count="3245">0</div>
                        <div className="label">Business Done</div>
                    </div>
                </div>
            </div>

            <Section5 />
        </>
    );
}

export default About;
