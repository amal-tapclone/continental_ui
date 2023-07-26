import React from "react";
import bookHoldGirl from "../../assets/HomePage/bookHoldGirl-min.png";
import "./OurMission.css";

const OurMission = () => {
  return (
    <section className="mission ">
      <div className="mission-wrap ">
        <div className="text-sec ">
          <div>
            <button className="orange-btn">Our Mission</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum rhoncus vulputate egestas pretium at. Rhoncus, blandit
              massa dui felis imperdiet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi dictum rhoncus vulputate egestas pretium
              at. Rhoncus, blandit massa dui felis imperdiet.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum rhoncus vulputate egestas pretium at. Rhoncus, blandit
              massa dui felis imperdiet..
            </p>
          </div>
        </div>
        <div className="image-sec ">
          <img src={bookHoldGirl} alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
