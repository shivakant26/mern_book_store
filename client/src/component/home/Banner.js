import React from "react";
const Banner = () => {
  return (
    <>
      <div className="banner_section">
        <div className="center_wr">
          <div className="banner_inner">
            <div className="right_sec bx-content">
              <h1>Buy and sell your textbooks for the best price</h1>
              <p>
                From applied literature to educational resources, we have a lot
                of textbooks to offer you. We provide only the best book for
                rent.
              </p>
              <a className="read_more" href="#javascript">
                read more
              </a>
            </div>
            <div className="left_sec">
              <img
                src={require("../../assets/images/slider-img.png")}
                alt="slider_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
