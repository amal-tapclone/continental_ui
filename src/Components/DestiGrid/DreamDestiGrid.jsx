import React from "react";
import "./DreamDestiGrid.css";
import countries from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";

const DreamDestiGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="DreamDestiGrid testBorder">
      <div className="dream-dest-wrap testBorder">
        <h4>Top Destination</h4>
        <h1>Your Dream Destination</h1>
        <div className="desti-grid ">
          {countries.map(({ countryimg, name }, index) => (
            <div
              key={index}
              className="destImages "
              onClick={() => navigate(`/country/${name}`)}
            >
              <img src={countryimg} alt="countries" />
              <div class="country-name ">
                <h3>{name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button class="orange-btn">View More</button>
      </div>
    </section>
  );
};

export default DreamDestiGrid;
