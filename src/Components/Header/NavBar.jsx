import React from "react";
import useStickyNav from "../../Hooks/useStickyNav";
import { NavLink } from "react-router-dom";
import logo from "../../assets/HomePage/logo-min.png";
import fb from "../../assets/HomePage/fb-icon.svg";
import insta from "../../assets/HomePage/Icon awesome-instagram.svg";
import twitter from "../../assets/HomePage/Icon awesome-twitter.svg";
import linkedin from "../../assets/HomePage/Icon awesome-linkedin-in.svg";

const NavBar = () => {
  const isSticky = useStickyNav();
  return (
    <nav className={`${isSticky ? "sticky_nav" : "nav_active"} testBorder`}>
      <div className={`logo`}>
        <img src={logo} alt="logo" draggable={false} />
      </div>

      <div className={`links`}>
        <ul className={`nav_links `}>
          <li className={`list_item`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/migrate"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              Migrate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `lactive_class` : `notactive_class`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className={`connect_links `}>
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

        <button className={`contactBtn `}>Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
