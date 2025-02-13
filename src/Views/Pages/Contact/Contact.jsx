import React from 'react';
import "./Contact.css";
import Section5 from '../Home/Section5';

const Contact = () => {
    const scrollToForm = () => {
        const contactForm = document.getElementById('contact-form');
        contactForm.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div class="container contact-hero-sec pt-5 py-5">
                <div class="row">
                    <div class="col-lg-6 py-5 text-start" data-aos="fade-right">
                        <h2 className='display-1 fw-bold'>How Can We Help You?</h2>
                        <h5 class="mt-5 mb-5">At Onyx Consultancyservices inc, we connect top talent with leading businesses. Specializing in recruitment across various industries, we provide tailored solutions to help companies build strong, skilled teams. Our experienced recruiters understand your unique needs and use innovative tools to find the perfect candidates. Whether you're hiring for a single position or seeking ongoing recruitment support, we’re here to simplify the process and ensure the best match for your business.
                            Let Onyx Consultancyservices inc help you grow with the right people, every time.</h5>
                        <p>Ready to take your business to the next level? Connect with us to explore how we can collaborate
                            and achieve great things together.</p>
                        <button class="learn-more mt-4 border rounded-pill" data-aos="zoom-in" onClick={scrollToForm}>
                            <span class="circle" aria-hidden="true"></span>
                            <span class="button-text" data-aos="zoom-in" data-aos-delay="100">Get Started</span>
                        </button>
                    </div>
                    <div class="col-lg-6   " data-aos="fade-left">
                        <img src="contact image.jpg" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div class="container d-flex justify-content-center mt-5 pt-5 py-5 contact-form-sec py-5" data-aos="fade-up" id="contact-form">
                <div class="row mt-5">
                    <div class="col-lg-6 py-5 border form-conainer" data-aos="flip-left">
                        <div className="container">
                            <form action="">
                                <input type="text" class="form-control mb-5" placeholder="Full Name" data-aos="fade-up" />
                                <input type="email" class="form-control mb-5" placeholder="Email" data-aos="fade-up"
                                    data-aos-delay="100" />
                                <input type="number" class="form-control mb-5" placeholder="Phone Number" data-aos="fade-up"
                                    data-aos-delay="200" />
                                <textarea name="" cols="30" rows="6" class="form-control" placeholder="Message"
                                    data-aos="fade-up" data-aos-delay="300"></textarea>
                                {/* uiverse */}
                                <button class="learn-more border rounded rounded-pill mt-5 ms-2">
                                    <span class="circle " aria-hidden="true"></span>
                                    <span class="button-text">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-6 text-start d-flex flex-column ps-5 contact-info" data-aos="fade-up">
                        <h2 className='display-1 fw-bold'>Let’s Work Together</h2>

                        <div class="row pt-5 mt-3" data-aos="fade-up">
                            <div class="col-lg-1">
                                <i class="fa-solid fa-envelope display-5 "></i>
                            </div>
                            <div class="col-lg-11">
                                <h6 className='capitalize display-5 ms-3 fw-bold'>Email</h6>
                                <h5>Info@onyxconsultancyservices.co</h5>
                            </div>
                        </div>
                        <div class="row pt-5 mt-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-lg-1">
                                <i class="fa-solid fa-phone mt-3 fs-1"></i>
                            </div>
                            <div class="col-lg-11">
                                <h6 className='display-5 fw-bold'>Phone</h6>
                                <h5>+1(307)-312 4554 </h5>
                            </div>
                        </div>
                        <div class="row pt-5 mt-3" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-1">
                                <i class="fa-solid fa-location-dot fs-1 mt-3 "></i>
                            </div>
                            <div class="col-lg-11">
                                <h6 className='display-5 fw-bold'>Address</h6>
                                <h5>1603 Capitol Ave Ste 413A No 2932,
                                    Cheyenne, WY 82001
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='mt-5'>
                <Section5 />
            </section>

        </>
    );
}

export default Contact;
