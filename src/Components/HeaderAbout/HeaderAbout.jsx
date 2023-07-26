import React from "react";
import "./HeaderAbout.css";
import NavBar from "../Header/NavBar";
import globe from "../../assets/HomePage/World.svg";
import search from "../../assets/HomePage/Search Icon.svg";
import bgCircle from "../../assets/HomePage/bgCircle.png";
import booksShelf from "../../assets/HomePage/bookShelf.svg";
import launchRocket from "../../assets/HomePage/Launch.png";
import aboutMainBg from "../../assets/HomePage/aboutMainBg.png";
import book from "../../assets/HomePage/book.svg";
import cloud from "../../assets/HomePage/cloud.png";


import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";

const HeaderAbout = () => {
  return (
    <section className="about_head_wrap ">
      <NavBar />
      <div className=" hero_section about_hero_section">
        <div className="about_search ">
          <div className={`abroad_title`}>
            Study Abroad
            <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
              <img src={globe} alt="globe" />
            </span>
          </div>
          <div className=" about_search_curv">
            <h3 className="">About Us</h3>
            <button className={`search_part`}>
              <img draggable={false} src={search} />
            </button>
          </div>
        </div>

        <div className="bgCircle">
          <img src={bgCircle} alt="bg-circle" />
          <img src={launchRocket} className="launchRocket" alt="bg-circle" />
          <img
            src={launchRocket}
            className="smallLaunchRocket"
            alt="bg-circle"
          />
          <img src={book} className="book " alt="bg-circle" />
          <div className="bookShelf ">
            <img src={booksShelf} alt="book" />
          </div>
        </div>

        <div className="aboutMainImage ">
          <img src={aboutMainBg} alt="bg-circle" />
          <img src={cloud} className="cloud " alt="bg-circle" />
          <img src={cloud} className="cloud " alt="bg-circle" />

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
      </div>
    </section>
  );
};

export default HeaderAbout;
