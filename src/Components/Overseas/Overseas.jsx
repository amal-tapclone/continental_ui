import React from "react";
import "./Overseas.css";
import gradGirl from "../../assets/HomePage/GradGirl Image-min.png";

const Overseas = () => {
  return (
    <section className="overseas-sec testBorder">
      <div className="overseas-wrap testBorder">
        <div className="overseas-content testBorder">
          <div className="text-sec ">
            <p className="title">OUR EXPERIENCE</p>
            <h1 className="head">
              {" "}
              Welcome to <br />
              Continental <span>O</span>verseas
            </h1>
            <div className="mobile-image-sec ">
              <img className="" src={gradGirl} alt="graduated girl" />
            </div>
            <p className="desc testBorder">
              Step into a world of boundless opportunities, Whether you dream of
              studying at renowned universities, embarking on enriching cultural
              experiences, or charting a course towards a successful career, we
              are your trusted guide. With expert counselors, a vast network of
              top-tier institutions, and a commitment to your aspirations, we're
              here to shape your international academic journey into an
              unforgettable adventure.
            </p>
            <p className="desc">
              Embrace the transformative power of global education with us, and
              let your dreams take flight. Welcome aboard!
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
