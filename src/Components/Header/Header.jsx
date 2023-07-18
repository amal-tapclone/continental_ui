import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import CustomDateInp from "./CustomDateInp";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Header.module.css";
import logo from "../../assets/HomePage/logo-min.png";
import fb from "../../assets/HomePage/fb-icon.svg";
import insta from "../../assets/HomePage/Icon awesome-instagram.svg";
import twitter from "../../assets/HomePage/Icon awesome-twitter.svg";
import linkedin from "../../assets/HomePage/Icon awesome-linkedin-in.svg";
import globe from "../../assets/HomePage/World.svg";
import location from "../../assets/HomePage/Location Icon.svg";
import date from "../../assets/HomePage/Date Icon.svg";
import search from "../../assets/HomePage/Search Icon.svg";
import dateWhite from "../../assets/HomePage/DateIco_white.svg";
import downIcon from "../../assets/HomePage/Down Icon.svg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;
      const percentage = (scrollPosition / totalHeight) * 100;
      console.log(percentage);
      if (percentage > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header_wrap} `}>
      <nav className={`${isSticky ? styles.sticky_nav : styles.nav_active} `}>
        <div className={`${styles.logo} `}>
          <img src={logo} alt="logo" draggable={false} />
        </div>

        <div className={`${styles.links} `}>
          <ul className={`${styles.nav_links} `}>
            <li className={`${styles.list_item}`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.lactive_class}`
                    : `${styles.notactive_class}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.lactive_class}`
                    : `${styles.notactive_class}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/migrate"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.lactive_class}`
                    : `${styles.notactive_class}`
                }
              >
                Migrate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.lactive_class}`
                    : `${styles.notactive_class}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={`${styles.connect_links} `}>
            <a href="#">
              <img src={fb} alt="facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="facebook" />
            </a>
            <a href="#">
              <img src={linkedin} alt="facebook" />
            </a>
          </div>

          <button className={`${styles.contactBtn} `}>Contact</button>
        </div>
      </nav>

      <div className={`${styles.hero_section} `}>
        <div className={`${styles.hero_content} `}>
          <div className={`${styles.abroad_search}`}>
            <div className={`${styles.abroad_title}`}>
              Study Abroad
              <span style={{ marginLeft: "1rem", marginTop: "0.45rem" }}>
                <img src={globe} alt="globe" />
              </span>
            </div>

            <div className={`${styles.location_search}`}>
              <div className={`${styles.location_part}`}>
                <p>
                  <span>
                    <img src={location} alt="location" />
                  </span>{" "}
                  Location
                </p>
                <select className={`${styles.location_select}`}>
                  <option value="New York">Pontianak, USA</option>
                  <option value="London">London</option>
                </select>
              </div>
              <div className={`${styles.university_part}`}>
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
              <button className={`${styles.search_part}`}>
                <img draggable={false} src={search} />
              </button>
            </div>
          </div>

          <div className={`${styles.circle_text}`}>
            <p>
              “Study & Explore <br /> The World”
            </p>
          </div>
        </div>

        <div className={`${styles.course_panel} `}>
          <div className={`${styles.select_item} `}>
            <p>
              Location{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`${styles.location_select}`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`${styles.select_item} `}>
            <p>
              University{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`${styles.location_select}`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`${styles.select_item} `}>
            <p>
            Courses{" "}
              <span>
                <img src={downIcon} style={{ marginBottom: "0.3rem" }} />
              </span>
            </p>
            <select className={`${styles.location_select}`}>
              <option value="" disabled selected>
                Select
              </option>
              <option value="New York">Pontianak, USA</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className={`${styles.enroll_btn}`}>
            <img src={dateWhite} />
            <p>Enroll Us</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
