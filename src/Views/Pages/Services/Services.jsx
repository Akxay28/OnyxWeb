import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Services.css";
import { useGSAP } from '@gsap/react';
import Section5 from '../Home/Section5';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    useGSAP(() => {
        // Animation for .text-title
        gsap.from(".text-title", {
            opacity: 0,
            x: -100,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".text-title",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });

        // Animation for .text-pra span
        gsap.to(".text-pra span", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".text-pra",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // Animation for .service-box
        document.querySelectorAll(".service-box").forEach((box) => {
            let text = box.querySelector(".content-text");

            gsap.fromTo(
                text,
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: box,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        // Function for page1 animation
        const page1 = () => {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".service-box",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            tl.from(".row h2", {
                y: -60,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
            });

            tl.from(".row p", {
                x: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
            });
        };

        page1();

    }, []);

    return (
        <>
            {/* <!-- OUR SERVICE --> */}
            <section>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-10 col-sm-12">
                            <div className="serviceContent">
                                <h5 className="text-title" style={{ fontFamily: "Orbitron" }}>What services we provide?</h5>
                                <h3 className="text-pra mt-4 px-3">
                                    {/* <!-- Wrapping each word in a <span> for animation --> */}
                                    <span className='text-danger'>Onyx &nbsp;</span> <span className='text-danger'>It &nbsp;</span>  <span className='text-danger'>Path &nbsp;</span>   <span className='text-danger'>Solutions &nbsp; </span> <span className='text-danger'>delivers&nbsp;</span> <span>a &nbsp;</span>
                                    <span>diverse &nbsp;</span> <span>array&nbsp;</span> <span>of&nbsp;</span>
                                    <span>services&nbsp;</span> <span>and&nbsp;</span> <span>solutions&nbsp;,</span> <span>ensuring&nbsp;</span>
                                    <span>a&nbsp;</span> <span>seamless&nbsp;</span>
                                    <span>and&nbsp;</span> <span>holistic&nbsp;</span> <span>approach&nbsp;</span> <span>to&nbsp;</span>
                                    <span>meeting&nbsp;</span> <span>the&nbsp;</span> <span>varied&nbsp;</span>
                                    <span>needs&nbsp;</span> <span>of&nbsp;</span> <span>our&nbsp;</span> <span>clients&nbsp;,</span> <span>and&nbsp;</span>
                                    <span>business&nbsp;</span> <span>partners&nbsp;.</span>
                                    <span>Our&nbsp;</span> <span>comprehensive&nbsp;</span> <span>offerings&nbsp;</span> <span>span&nbsp;</span>
                                    <span>multiple&nbsp;</span> <span>domains&nbsp;</span>
                                    <span>of&nbsp;</span> <span>expertise&nbsp;,</span> <span>providing&nbsp;</span> <span>integrated&nbsp;</span>
                                    <span>and&nbsp;</span> <span>effective&nbsp;</span> <span>solutions&nbsp;.</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- SECTION OF ALL SERVICES PROVIDE --> */}
            <section>
                <div className="container p-md-5 p-3 mt-5">
                    {/* <!-- ROW 1 --> */}
                    <div className="row border rounded-3 align-items-center justify-content-center service-box rowOne " style={{ position: "sticky", top: "5%", }}>
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text  py-5  text-start text-md-start">
                                <div className="icons">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">System Implementation & Integration</h2>
                                <p className="text1 animate-text mt-3">
                                    In today’s fast-evolving tech landscape, the need for a unified platform is more crucial
                                    than ever.
                                    At Onyx It Path Solutions, we support clients through every stage of system integration, from initial
                                    planning
                                    and contract formulation to governance strategy development, dispute resolution, and
                                    contract renewals.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-none d-lg-block">
                            <div className="image-wrapper animate-image ">
                                <img src="serviceRow1.png"
                                    className="img-fluid" alt="System Implementation" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- ROW 2 --> */}
                    <div className="row rowTwo align-items-center mt-4 service-box border rounded-3 " style={{ position: "sticky", top: "100px" }}>
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text  py-5  text-center text-md-start">
                                <div className="icons">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Data Insights & Optimization</h2>
                                <p className="text1 animate-text mt-3">
                                    Onyx It Path Solutions excels in optimizing data management for scalability and cost efficiency. Our BI
                                    experts assist with tool selection, prototyping, data migration, and performance
                                    enhancement, creating robust analytics ecosystems. We offer strategic planning, BI
                                    evaluations, data integration, and architecture design to drive informed decision-making
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-none d-lg-block text-center">
                            <div className="image-wrapper animate-image">
                                <img src="serviceRow2BGR.png"
                                    className="img-fluid rounded" alt="Data Insights" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- ROW 3 --> */}
                    <div className="row rowThree align-items-center mt-4 service-box border rounded-3 " style={{ position: "sticky", top: "150px" }} >
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text  py-5  text-center text-md-start">
                                <div className="icons">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Strategic Data Intelligence</h2>
                                <p className="text1 animate-text mt-3">
                                    Our solutions elevate business intelligence by adapting to market trends and mobility needs.
                                    We
                                    ensure data accuracy with end-to-end BI solutions, including reporting, data mining,
                                    advanced analytics, and performance monitoring for a competitive edge
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-none d-lg-block text-center ">
                            <div className="image-wrapper animate-image">
                                <img src="serviceRow3.webp"
                                    className="img-fluid  rounded" alt="System Implementation" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- ROW 4 --> */}
                    <div className="row rowFour align-items-center mt-4 service-box border rounded-3 " style={{ position: "sticky", top: "120px" }} >
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text  py-5  text-center text-md-start">
                                <div className="icons">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Technology Strategy & Optimization</h2>
                                <p className="text1 animate-text mt-3">
                                    Onyx It Path Solutions delivers tailored solutions through specialized data access, research, and
                                    analysis. Our services include IT strategy, operational efficiency, M&A synergy
                                    optimization, and strategic project planning for maximum impact.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-none d-lg-block text-center">
                            <div className="image-wrapper animate-image">
                                <img src="serviceRow4.png" className="img-fluid  rounded"
                                    alt="Data Insights" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- ROW 5 --> */}
                    <div className="row rowFive align-items-center mt-4 service-box border rounded-3 " style={{ position: "sticky", top: "250px" }} >
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text  py-5  text-center text-md-start">
                                <div className="icons">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Enterprise Systems Analysis</h2>
                                <p className="text1 animate-text mt-3">In today’s fast-evolving tech landscape, the need for a
                                    unified platform
                                    is more crucial than ever.
                                    Onyx It Path Solutions ensures seamless system integration, mapping processes and systems to deliver
                                    tech-driven solutions. We enhance stakeholder communication, driving efficiency, growth,
                                    sales optimization, and process improvements.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 d-none d-lg-block text-center">
                            <div className="image-wrapper animate-image">
                                <img src="serviceFive.png"
                                    className="img-fluid  rounded " alt="System Implementation" />
                            </div>


                        </div>
                    </div>

                    {/* <!-- ROW 6 --> */}
                    <div className="row rowSix align-items-center mt-4 service-box border rounded-3 " style={{ position: "sticky", top: "300px" }}>
                        <div className="col-lg-7 col-md-12">
                            <div className="content-text  py-5  text-center text-md-start">
                                <div className="icons">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h2 className="text-service animate-heading">Software Testing & Quality Assurance</h2>
                                <p className="text1 animate-text mt-3">
                                    Onyx It Path Solutions provides tailored testing solutions, ensuring quality, stability, and efficiency.
                                    Our services cover consulting, automation, performance, and specialized testing to minimize
                                    defects and accelerate time to market.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block text-center">
                            <div className="image-wrapper animate-image">
                                <img src="serviceRow6.png"
                                    className="img-fluid rounded" alt="Data Insights" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Section5 />
            </section>
        </>
    );
};

export default Services;