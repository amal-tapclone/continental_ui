import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import CustomDateInp from "./CustomDateInp";
import "react-datepicker/dist/react-datepicker.css";
import globe from "../../assets/HomePage/World.svg";
import location from "../../assets/HomePage/Location Icon.svg";
import date from "../../assets/HomePage/Date Icon.svg";
import search from "../../assets/HomePage/Search Icon.svg";
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";
import "./Header.css";
import NavBar from "./NavBar";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <header className={`header_wrap`}>
      <NavBar />
      <div className={`hero_section  testBorder`}>
        <div className={`hero_content `}>
          <div className={`abroad_search`}>
            <div className={`abroad_title`}>
              Study Abroad
              <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
                <img src={globe} alt="globe" />
              </span>
            </div>

            <div className={`location_search`}>
              <div className={`location_part`}>
                <p>
                  <span>
                    <img src={location} alt="location" />
                  </span>{" "}
                  Location
                </p>
                <select className={`location_select`}>
                  <option value="New York">Pontianak, USA</option>
                  <option value="London">London</option>
                </select>
              </div>
              <div className={`university_part`}>
                <p>
                  <span>
                    <img src={date} alt="date" />
                  </span>{" "}
                  University
                </p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomDateInp />}
                />
              </div>
              <button className={`search_part`}>
                <img draggable={false} src={search} />
              </button>
            </div>
          </div>

          <div className={`circle_text`}>
            <p>
              “Study & Explore <br /> The World”
            </p>
          </div>
        </div>

        <div className={`course_panel `}>
          <div className={`select_item `}>
            <p>
              Location{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`location_select`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`select_item `}>
            <p>
              University{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`location_select`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`select_item `}>
            <p>
              Courses{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`location_select`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`enroll_btn`}>
            <img src={dateWhite} />
            <p>Enroll Us</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;