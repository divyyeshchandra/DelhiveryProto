import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Delhivery
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Solutions
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            partner
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            company
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Track
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Support
          </a>
        </li>
        <li className="nav__item">
          <Link to="/ship" className="nav__link">
            Ship Now
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
