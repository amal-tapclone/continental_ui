import React from "react";
import "./YstudyAbroad.css";
import home from "../../assets/HomePage/Home.svg";
import settings from "../../assets/HomePage/Setting.svg";
import discount from "../../assets/HomePage/Discount.png";

const YstudyAbroad = (props) => {
  const { name } = props;
  return (
    <section className="YstudyAbroad  ">
      <div className="studyAbroadWrap ">
        <div className="abroad-text-sec ">
          <p>3 steps or the perfect education</p>
          <h1>Why Study {name ? name : "Abroad"} </h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </h4>
        </div>
        <div className="grid-sec ">
          <div className="abroad-row ">
            <div className="abroad-column abroad-columnBord  ">
              <img src={home} alt="" />
              <h4>Quality education</h4>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </div>
            <div className="abroad-column abroad-columnBord ">
              <img src={settings} alt="" />
              <h4>
                safe and modern <br /> environments
              </h4>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </div>
            <div className="abroad-column ">
              <img src={discount} alt="" />
              <h4>English Taught Courses</h4>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </div>
          </div>
          <div className="abroad-row">
            <div className="abroad-column abroad-columnBord2 ">
              <img src={home} alt="" />
              <h4>Internship opportunities</h4>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </div>
            <div className="abroad-column abroad-columnBord2 ">
              <img src={settings} alt="" />
              <h4>Schengen VISA </h4>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </div>
            <div className="abroad-column ">
              <img src={discount} alt="" />
              <h4>Best Price Guarantee</h4>
              <p>Lorem ipsum dolor sit amet, ctetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YstudyAbroad;
