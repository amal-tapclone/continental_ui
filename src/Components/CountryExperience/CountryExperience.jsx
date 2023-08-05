import React from "react";
import countryExpImage from "../../assets/HomePage/country-exp-image-min.png";
import "./CountryExperience.css";

const CountryExperience = (props) => {
  const { name } = props;

  return (
    <section className="countryExp testBorder">
      <div className="country-expWrap testBorder">
        <div className="country-image ">
          <img src={countryExpImage} alt="" />
        </div>
        <div className="country-text-sec ">
          <h3>OUR EXPERIENCE</h3>
          <h1>
            Studying in <br /> {name} !
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            dictum rhoncus vulputate egestas pretium at. Rhoncus, blandit massa
            dui felis imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi dictum rhoncus vulputate egestas pretium at.
            <br /> <br />
            Rhoncus, blandit massa dui felis imperdiet. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Morbi dictum rhoncus vulputate
            egestas pretium at. Rhoncus, blandit massa dui felis imperdiet..
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryExperience;
