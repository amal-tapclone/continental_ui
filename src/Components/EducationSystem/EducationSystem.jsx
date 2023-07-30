import React from "react";
import edusysImg from "../../assets/HomePage/edusysImg-min.png";
import "./EducationSystem.css";

const EducationSystem = (props) => {
  const { name } = props;
  return (
    <section className="education-sys ">
      <div className="education-wrap ">
        <div className="eduSys-text ">
          <h3>OUR EXPERIENCE</h3>
          <h1>
            Education System <br /> in {name}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            dictum rhoncus vulputate egestas pretium at. Rhoncus, blandit massa
            dui felis imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi dictum rhoncus vulputate egestas pretium at.
            <br />
            <br />
            Rhoncus, blandit massa dui felis imperdiet. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Morbi dictum rhoncus vulputate
            egestas pretium at. Rhoncus, blandit massa dui felis imperdiet..
          </p>
        </div>
        <div className="eduSys-Img ">
          <img src={edusysImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default EducationSystem;
