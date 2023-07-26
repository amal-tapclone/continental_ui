import React from "react";
import "./Overseas.css";
import gradGirl from "../../assets/HomePage/GradGirl Image-min.png";

const Overseas = () => {
  return (
    <section className="overseas-sec ">
      <div className="overseas-wrap ">
        <div className="overseas-content ">
          <div className="text-sec ">
            <p className="title">OUR EXPERIENCE</p>
            <h1 className="head">
              {" "}
              Welcome to <br />
              Continental <span>O</span>verseas
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum rhoncus vulputate egestas pretium at. Rhoncus, blandit
              massa dui felis imperdiet. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Morbi dictum rhoncus vulputate egestas pretium
              at. Rhoncus, blandit massa dui felis imperdiet. 
            </p>
            <p className="desc">
              at. Rhoncus, blandit massa dui felis imperdiet. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Morbi dictum rhoncus Lorem ipsum dolor
            </p>
            <button className="get-start-btn"> Get Started</button>
          </div>
          <div className="image-sec ">
            <img className="" src={gradGirl} alt="graduated girl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overseas;
