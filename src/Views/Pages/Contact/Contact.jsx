import React from 'react'
import "./Contact.css"
import Section5 from '../Home/Section5'

const Contact = () => {
    return (
        <>
            <div class="container contact-hero-sec pt-5 py-5">
                <div class="row">
                    <div class="col-6 py-5 text-start" data-aos="fade-right">
                        <h2 style={{ fontFamily: "Orbitron" }}>How Can We Help You?</h2>
                        <h5 class="mt-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias
                            soluta dolorem
                            animi necessitatibus maiores impedit deleniti nihil, temporibus nisi expedita voluptatibus
                            magni, sequi quisquam!</h5>
                        <p>Ready to take your business to the next level? Connect with us to explore how we can collaborate
                            and achieve great things together.</p>
                        <button class="learn-more mt-4 border rounded-pill" data-aos="zoom-in">
                            <span class="circle" aria-hidden="true">
                            </span>
                            <span class="button-text">Get Stared</span>
                        </button>
                    </div>
                    <div class="col-6" data-aos="fade-left">
                        <img src="contact image.jpg" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>

            <div class="container d-flex justify-content-center mt-5 pt-5 py-5 contact-form-sec py-5" data-aos="fade-up">
                <div class="row mt-5">
                    <div class="col-lg-6 py-5 border form-conainer" data-aos="flip-left">
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
                                <span class="circle " aria-hidden="true">
                                </span>
                                <span class="button-text">Send Message</span>
                            </button>
                        </form>
                    </div>
                    <div class="col-6 text-start d-flex flex-column ps-5 contact-info" data-aos="fade-left">
                        <h2 style={{ fontFamily: "Orbitron" }}>Let’s Work Together</h2>

                        <div class="row pt-5 mt-3" data-aos="fade-up">
                            <div class="col-lg-1">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="col-lg-11">
                                <h6>Email</h6>
                                <h5>your.email@example.com</h5>
                            </div>
                        </div>
                        <div class="row pt-5 mt-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-lg-1">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="col-lg-11">
                                <h6>Phone</h6>
                                <h5>+91 987 654 3210</h5>
                            </div>
                        </div>
                        <div class="row pt-5 mt-3" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-1">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="col-lg-11">
                                <h6>Address</h6>
                                <h5>2464 Royal Ln. Mesa, New Jersey 45463</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='mt-5'>
                <Section5 />
            </section>

        </>
    )
}

export default Contact