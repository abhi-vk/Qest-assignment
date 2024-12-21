import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Business Size</h4>
          <ul>
            <li>Entrepreneurs</li>
            <li>SMBs</li>
            <li>Growth Business</li>
            <li>Household Services</li>
            <li>Enterprise</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Business Type</h4>
          <ul>
            <li>Health & Wellness</li>
            <li>Sports</li>
            <li>Learning Activities</li>
            <li>Household Services</li>
            <li>Miscellaneous</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Download</h4>
          <ul>
            <li>
              <i className={styles.icon}></i> Business App
            </li>
            <li>
              <i className={styles.icon}></i> User App
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact us</h4>
          <ul>
            <li>support@Rmax.com</li>
            <li>+91-8459671235</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>© 2024 Copyright, All Right Reserved @RMax</p>
        <div className={styles.socialIcons}>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
