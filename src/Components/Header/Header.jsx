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
import globeTransp from "../../assets/HomePage/transparentGlobe.png";
import ladyGlobe from "../../assets/HomePage/flying-student-min.png";
import heroCircle from "../../assets/HomePage/homeHero-circle-min.png";
import { gsap } from "gsap";
import "./Header.css";
import NavBar from "./NavBar";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date());
  const rotateImage = () => {
    gsap.to(".rotate-globe", {
      rotation: 360 * 4,
      repeat: -1,
      duration: 70, //  duration of the first rotation
      ease: "none",
    });
  };

  const pulseGirl = () => {
    const t1 = gsap.timeline();
    t1.to(".ladyGlobe", {
      x: "-=10",
      y: "-=20",
      rotationZ: "-=1.5",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  };

  const pulseHeroText = () => {
    const duration = 3;
    const scale = 0.96;
    gsap.to(".heroCircleText", {
      scale: scale,
      duration: duration / 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  useEffect(() => {
    rotateImage();
    pulseGirl();
    pulseHeroText();
  }, []);

  return (
    <section className={`header_wrap`}>
      <NavBar />
      <div className={`hero_section  testBorder`}>
        <div className={`hero_content testBorder`}>
          <div className={`abroad_search testBorder`}>
            <div className={`abroad_title`}>
              Study Abroad
              <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
                <img src={globe} alt="globe" />
              </span>
            </div>

            <div className={`location_search `}>
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

          <div className={`circle_text testBorder`}>
            <p>
              “Study & Explore <br /> The World”
            </p>
          </div>

          <div className="heroCircleText testBorder">
            <img src={heroCircle} alt="circle-background" />
          </div>

          <div className="ladyGlobe ">
            <img src={ladyGlobe} alt="" />
          </div>

          <div class="globe-container ">
            <img
              src={globeTransp}
              className="rotate-globe"
              alt="globe-transparent"
            />
          </div>
        </div>

        <div className={`course_panel testBorder`}>
          <div className={`select_item testBorder`}>
            <p>
              Location{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`location_select testBorder`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`select_item testBorder`}>
            <p>
              University{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`location_select testBorder` }>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`select_item testBorder`}>
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
    </section>
  );
};

export default Header;
