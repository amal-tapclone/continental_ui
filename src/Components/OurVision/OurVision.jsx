import React from "react";
import girlGlobe from "../../assets/HomePage/girlGlobe-min.png";
import "./OurVision.css";

const OurVision = () => {
  return (
    <section className="vision ">
      <div className="vision-wrap ">
        <div className="image-sec ">
          <img src={girlGlobe} alt="" />
        </div>
        <div className="text-sec ">
          <div>
            <button className="orange-btn">Our Vision</button>
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
      </div>
    </section>
  );
};

export default OurVision;
