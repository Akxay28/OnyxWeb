import React from "react";
import { Link, NavLink } from "react-router-dom";

const Section1 = ({ title, titleDescription, bgImg }) => {
  return (
    <>
      <section>
        <div
          className="container-fluid py-5"
          style={{
            height: "450px",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: " rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "hue",
          }}
          data-aos="fade-up" // Adding AOS animation here
          data-aos-duration="1000" // Animation duration
        >
          <div className="row justify-content-center">
            <div
              className="col-lg-7 col-md-11 text-light fw-bolder text-center"
              data-aos="fade-in" // Adding fade-in animation for the text container
              data-aos-delay="300" // Slight delay for a smoother transition
            >
              <p
                className="display-5 m-0 fw-bold"
                data-aos="zoom-in" // Animation for title text zoom-in
                data-aos-delay="500"
              >
                {title}
              </p>
              <p
                className="m-0 fs-5 text-light mt-4"
                data-aos="fade-up" // Animation for description fade-up
                data-aos-delay="700"
              >
                {titleDescription}
              </p>

              <a
                href="#"
                className="button mt-4 text-decoration-none text-light"
                style={{ backgroundColor: "#7808d0" }}
                data-aos="zoom-in" // Adding zoom-in animation for the button
                data-aos-delay="1000"
              >
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <NavLink
                  className="nav-link text-white text-uppercase"
                  to="/contact"
                  aria-current="page"
                  href="#"
                  data-aos="flip-left" // Adding flip-left animation for the link
                  data-aos-delay="1200"
                >
                  Contact Us
                </NavLink>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
