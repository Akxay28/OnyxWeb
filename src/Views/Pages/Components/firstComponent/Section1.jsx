import React from "react";
import { Link, NavLink } from "react-router-dom";

const Section1 = ({ title, titleDescription, bgImg }) => {
  return (
    <>
      <section>
        <div
          class="container-fluid py-5 "
          style={{
            height: "450px",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: " rgba(0, 0, 0, 0.6)",
            backgroundBlendMode: "hue",
          }}
        >
          <div class="row   justify-content-center">
            <div class="col-lg-7 col-md-11  text-light fw-bolder text-center">
              <p class="display-5 m-0 fw-bold">{title}</p>
              <p class="m-0 fs-5 text-light mt-4">{titleDescription}</p>

              <a
                href="#"
                class="button mt-4 text-decoration-none text-light"
                style={{ backgroundColor: "#7808d0" }}
              >
                <span class="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="button__icon-svg"
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
                    class="button__icon-svg button__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <NavLink className="nav-link text-white text-uppercase" to="/contact" aria-current="page" href="#" data-aos="fade-down" data-aos-delay="600">
                  Contact Us</NavLink>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
