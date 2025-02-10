import React from 'react'
import './About.css'

const About = () => {
    return (
        <>
            <div class="container  ">
                <div class="container  ">
                    <div class="row gap-3">
                        <div class="about1 pb-3 py-5 col-lg-7  ">
                            <h2>Welcome to Consolution</h2>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                                would have been rewritten a thousand times and everything that was left from its origin would be
                                the
                                word.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                                is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                                would have been rewritten a thousand times and everything that was left from its origin would be
                                the
                                word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                            <button class="btn1">
                                <div class="gradient-card">
                                    <h5 class="fw-bold">Grid Tech</h5>
                                    <p>Elevating Your Workforce, Empowering Your Success</p>
                                </div>
                            </button>
                        </div>
                        <div class="col-lg-4">
                            <div class="custom-card mt-0 mt-lg-5">
                                <img src="waist-portrait-modern-business-woman-600nw-2259403041.webp"
                                    class="img-fluid rounded" alt="Business Meeting" />
                                <h5 class="mt-3">Read Our Success Story for Inspiration</h5>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                                <button class="btn contact-us-btn">Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-0 mt-lg-5 ">
                <div class="container vision-section  ">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h6 class="text-danger">OUR VISION</h6>
                            <h2 class="fw-bold">Experienced Recruiters Specializes In Finding The Right Executive Talent</h2>
                            <div class="mt-4">
                                <div class="mb-3">
                                    <span class="icon">&#x1F310;</span>
                                    <strong>Building Great Network</strong>
                                    <p>Gridtech is dedicated to establishing and nurturing a robust network, enabling us to
                                        deliver top-notch workforce solutions and recruitment services.</p>
                                </div>
                                <div class="mb-3">
                                    <span class="icon">&#x1F6A9;</span>
                                    <strong>Forging Strategic Alliances</strong>
                                    <p>Gridtech is constantly expanding its network by forming strategic partnerships with
                                        industry leaders, organizations, and professionals.</p>
                                </div>
                                <div>
                                    <span class="icon">&#x1F4E1;</span>
                                    <strong>Connecting You To Opportunity</strong>
                                    <p>Our network opens doors to exciting opportunities, connecting talented individuals with
                                        organizations that need their skills and expertise.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="text-center mt-3 mb-3">
                                <img src="depositphotos_504549602-stock-photo-handsome-man-suit-phones-business.jpg"
                                    class="img-fluid rounded second-img" alt="Recruiter Meeting" />
                            </div>
                            <div class="highlight-box second-img">
                                <p>Our mission at Grid Tech is to deliver unmatched expertise, enabling IT organizations to
                                    efficiently deploy, upgrade, and manage essential software systems.</p>
                                <p>We pride ourselves on our team of highly skilled professionals, who bring not only a wealth
                                    of knowledge and experience to their roles but also the right attitude.</p>
                                <ul>
                                    <li>✅ Best Team Work</li>
                                    <li>✅ Great Relation & Networking</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container p-3 p-md-5 offer mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="counter" data-count="+42"> 0</div>
                        <div class="label">Countries Covered</div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter" data-count="97">0</div>
                        <div class="label">Business Success</div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter" data-count="2342">0</div>
                        <div class="label">Happy Client</div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter" data-count="3245">0</div>
                        <div class="label">Business Done</div>
                    </div>
                </div>
            </div>



            {/* <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script>
                $(document).ready(function () {
                    $('.counter').each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({ countNum: $this.text() }).animate({
                            countNum: countTo
                        },
                            {
                                duration: 3000,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            });
                    })
                });
            </script> */}
        </>
    )
}

export default About