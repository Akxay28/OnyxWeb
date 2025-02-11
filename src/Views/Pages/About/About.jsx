import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

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
                    <div className="about1 pb-3 py-5 col-lg-7" data-aos="fade-right">
                        <h2>Welcome to Consolution</h2>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                        <button className="btn1">
                            <div className="gradient-card">
                                <h5 className="fw-bold">Grid Tech</h5>
                                <p>Elevating Your Workforce, Empowering Your Success</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-4" data-aos="fade-left">
                        <div className="custom-card mt-0 mt-lg-5">
                            <img src="waist-portrait-modern-business-woman-600nw-2259403041.webp"
                                className="img-fluid rounded" alt="Business Meeting" />
                            <h5 className="mt-3">Read Our Success Story for Inspiration</h5>
                            <p>Far far away, behind the word mountains, far from the countries...</p>
                            <button className="btn contact-us-btn">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-0 mt-lg-5">
                <div className="container vision-section">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-in">
                            <h6 className="text-danger">OUR VISION</h6>
                            <h2 className="fw-bold">Experienced Recruiters Specializes In Finding The Right Executive Talent</h2>
                            <div className="mt-4">
                                <div className="mb-3">
                                    <span className="iconAbout">&#x1F310;</span>
                                    <strong>Building Great Network</strong>
                                    <p>Gridtech is dedicated to establishing and nurturing a robust network...</p>
                                </div>
                                <div className="mb-3">
                                    <span className="iconAbout">&#x1F6A9;</span>
                                    <strong>Forging Strategic Alliances</strong>
                                    <p>Gridtech is constantly expanding its network by forming strategic partnerships...</p>
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
                                <p>Our mission at Grid Tech is to deliver unmatched expertise...</p>
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
                <div className="row">
                    <div className="col-md-3" data-aos="flip-left">
                        <div className="counter" data-count="42">+0</div>
                        <div className="label">Countries Covered</div>
                    </div>
                    <div className="col-md-3" data-aos="flip-right">
                        <div className="counter" data-count="97">+0</div>
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
        </>
    );
}

export default About;
