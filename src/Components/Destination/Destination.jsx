import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <section className="destination-sec ">
      <div
        className="blur_circle1"
        style={{
          top: "-25%",
          left: "-6%",
        }}
      ></div>
      <div
        className="blur_circle1"
        style={{
          top: "-38%",
          left: "45%",
          width: "500.099px",
          height: "500.099px",
          zIndex:'0'
        }}
      ></div>
    </section>
  );
};

export default Destination;
