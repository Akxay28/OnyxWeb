import React from "react";

const CardPages = ({ title, cardPara, img, width, aosDelay }) => {
  return (
    <>
      <div className="col-lg-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={aosDelay}>
        <div className="card card-universe text-center">
          <img
            src={img}
            className={`img-fluid ${width} mx-auto py-4`}
            width={"100px"}
            alt="images"
          />
          <p className="card-title fs-5">{title}</p>
          <p className="small-desc">{cardPara}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPages;
