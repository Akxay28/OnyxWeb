import Aos from 'aos';
import React from 'react'
import 'aos/dist/aos.css';


const Section3 = () => {

    Aos.init({
        duration: 1000, // Animation duration
        once: true, // Run animation only once
    });

    return (
        <>
            <div className="container">
                <h2 className='fw-bold display-4 mb-5' data-aos="fade-up">What makes us different from others in the Industry</h2>
                <p className='fs-3' data-aos="fade-up" data-aos-delay="200">Client-Centric Project Development and Delivery Process: Ensuring Seamless Collaboration and Quality Results</p>
                <div className="row">
                    <div className="col-lg-12">
                        <div class='gallery'>
                            <img src='https://media.istockphoto.com/id/1413761479/photo/mature-couple-meeting-financial-advisor-for-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=a72IjW3zYOuSiJnyPOkqpIb6KwuffHw7-LgSo2x9xx0=' alt='' />
                            <img src='https://media.istockphoto.com/id/1395187689/photo/signing-contract-investor-and-contractor.jpg?s=612x612&w=0&k=20&c=SYD7JvzTDqcgz3i9eooa5PQY4650BIttb9batDCmE9Y=' alt='' />
                            <img src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xpZW50JTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D' alt='' />
                            <img src='https://media.istockphoto.com/id/2044758793/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=SVDsz765lkxQMlUwhg0mU6ops53VlVrums8t7jcp2xU=' alt='' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <p className='fs-5'>At Onyx Tech, we are the executive search and recruitment experts, standing as a leading IT services firm with specialized expertise in Consulting, Training, Software Quality Assurance, Analytics, Agile methodologies, and Application Support. Our client-centric approach begins with thoroughly understanding each client’s unique needs, allowing us to develop tailored solutions that leverage cutting-edge tools and frameworks. With a deep-rooted experience across both on-site and off-site development, we focus on delivering high-quality, comprehensive business solutions. What sets us apart in the industry is our commitment to excellence, our agile operational structure, and our continuous drive to solve complex business challenges, ensuring seamless project execution and exceptional client satisfaction every step of the way.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3