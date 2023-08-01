import React from "react";
import "./OurExperience.css";
import overSeasImg from "../../assets/HomePage/overseasImg.png";
import flyingArrow from "../../assets/HomePage/flyingArrow.svg";
import howExperinece from "../../assets/HomePage/How your Experience_-min.png";
import overseasPattern from "../../assets/HomePage/overseas-pattern.svg";

const OurExperience = () => {
  return (
    <section className="our-experience ">
      <div className="exp-wrap ">
        <div className="exp-content ">
          <div className="img-sec ">
            <img
              className="overSeasImg"
              src={overSeasImg}
              alt="overseas image"
            />
            <img className="flyingArrow" src={flyingArrow} alt="flyingArrow" />
            <img
              className="howExperinece"
              src={howExperinece}
              alt="howExperinece"
            />
            <img
              className="overseasPattern"
              src={overseasPattern}
              alt="overseasPattern"
            />
          </div>
          <div className="counter-sec ">
            <p className="title">OUR EXPERIENCE</p>
            <h1 className="head">
              Your Most Reliable <br /> Overseas Partner
            </h1>
            <p className="desc">
              With a steadfast commitment to your dreams, we stand by your side
              as a trusted and dependable ally, guiding you towards a world of
              global opportunities and turning your aspirations into reality.
            </p>
            <div className="counter-part">
              <div className="countries border ">
                <h1>30+</h1>
                <p>Countries</p>
              </div>
              <div className="universities border ">
                <h1>460+</h1>
                <p>Universities</p>
              </div>
              <div className="admissions">
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
