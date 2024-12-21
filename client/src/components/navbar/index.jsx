import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom"; 
import {
  AiOutlineGlobal,
  AiOutlineMobile,
  AiOutlineAppstore,
  AiOutlineTeam,
  AiOutlineTool,
  AiOutlineRise,
} from "react-icons/ai";
import { BiCalendar, BiBrush, BiLineChart, BiRocket } from "react-icons/bi";
import { MdOutlinePayments, MdOutlineEvent } from "react-icons/md";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const handleTryForFreeClick = () => {
    navigate("/plandetails"); // Navigate to the /plandetails route
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoR}>R</span>
        <span className={styles.logoMax}>Max</span>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
      <div
        className={`${styles.navActions} ${
          isMenuOpen ? styles.navActionsOpen : ""
        }`}
      >
        <ul className={styles.navLinks}>
          <li>Home</li>
          <li
            className={styles.featuresMenu}
            onClick={toggleDropdown}
          >
            Features <span className={styles.downArrow}>▼</span>
            {showDropdown && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownColumn}>
                  <h4>Discover</h4>
                  <ul>
                    <li>
                      <AiOutlineGlobal className={styles.icon} /> Custom Branded Website
                    </li>
                    <li>
                      <AiOutlineMobile className={styles.icon} /> User Mobile App
                    </li>
                    <li>
                      <AiOutlineAppstore className={styles.icon} /> Business Webpage
                    </li>
                  </ul>
                </div>
                <div
                  className={`${styles.dropdownColumn} ${styles.manageColumn}`}
                >
                  <h4>Manage</h4>
                  <div className={styles.manageGrid}>
                    <ul>
                      <li>
                        <AiOutlineTool className={styles.icon} /> Courses
                      </li>
                      <li>
                        <AiOutlineTool className={styles.icon} /> Classes
                      </li>
                      <li>
                        <BiCalendar className={styles.icon} /> Appointments
                      </li>
                      <li>
                        <BiBrush className={styles.icon} /> Services
                      </li>
                      <li>
                        <AiOutlineRise className={styles.icon} /> Retreats
                      </li>
                      <li>
                        <MdOutlinePayments className={styles.icon} /> Payments
                      </li>
                      <li>
                        <BiBrush className={styles.icon} /> Design Tools
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <AiOutlineTeam className={styles.icon} /> Communication
                      </li>
                      <li>
                        <AiOutlineTool className={styles.icon} /> Trail Session
                      </li>
                      <li>
                        <AiOutlineTeam className={styles.icon} /> Staff Roles
                      </li>
                      <li>
                        <AiOutlineTool className={styles.icon} /> Workshops
                      </li>
                      <li>
                        <BiLineChart className={styles.icon} /> Reporting Tools
                      </li>
                      <li>
                        <AiOutlineGlobal className={styles.icon} /> Multi-Location
                      </li>
                      <li>
                        <MdOutlineEvent className={styles.icon} /> Events
                      </li>
                    </ul>
                  </div>
                  <div className={styles.seeAll}>
                    <a href="#">See all features &rarr;</a>
                  </div>
                </div>
                <div className={styles.dropdownColumn}>
                  <h4>Grow</h4>
                  <ul>
                    <li>
                      <BiRocket className={styles.icon} /> AI Marketing Tools
                    </li>
                    <li>
                      <AiOutlineGlobal className={styles.icon} /> Social Media Integration
                    </li>
                    <li>
                      <BiCalendar className={styles.icon} /> CRM
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li>Pricing</li>
          <li>Solutions</li>
        </ul>
        <div className={styles.actions}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.tryBtn}  onClick={handleTryForFreeClick} >Try For Free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
