import React from "react";
import "./OurExperience.css";
import overSeasImg from "../../assets/HomePage/overseasImg.png";

const OurExperience = () => {
  return (
    <section className="our-experience testBorder">
      <div className="exp-wrap testBorder">
        <div className="exp-content testBorder">
          <div className="img-sec testBorder">
            <img
              className="overSeasImg"
              src={overSeasImg}
              alt="overseas image"
            />
          </div>
          <div className="counter-sec testBorder">
            <p className="title">OUR EXPERIENCE</p>
            <h1 className="head">
              Your Most Reliable <br /> Overseas Partner
            </h1>
            <h6 className="head-mob">Your Most Reliable Overseas Partner</h6>
            <p className="desc">
              With a steadfast commitment to your dreams, we stand by your side
              as a trusted and dependable ally, guiding you towards a world of
              global opportunities and turning your aspirations into reality.
            </p>

            <div className="mob-exp-img-sec ">
              <img
                className="overSeasImg"
                src={overSeasImg}
                alt="overseas image"
              />
            </div>
            <div className="counter-part testBorder">
              <div className="countries border testBorder">
                <h1>30+</h1>
                <p>Countries</p>
              </div>
              <div className="universities border testBorder">
                <h1>460+</h1>
                <p>Universities</p>
              </div>
              <div className="admissions testBorder">
                <h1>50K+</h1>
                <p>Global Admissions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
