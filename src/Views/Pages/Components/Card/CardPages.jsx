import React from "react";

const CardPages = ({ title, cardPara, img, width }) => {
  return (
    <>
      <div class="col-lg-4">
        <div class="card card-universe text-center ">
          <img
            src={img}
            class={`img-fluid ${width}  mx-auto py-4`}
            width={"100px"}
            alt="images"
          />
          <p class="card-title fs-5">{title}</p>
          <p class="small-desc">{cardPara}</p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPages;
