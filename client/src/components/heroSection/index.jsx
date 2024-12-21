import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./hero.module.css";

const Hero = () => {
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    navigate("/plandetails"); 
  };

  const handleBookDemoClick = () => {
    navigate("/contactus"); 
  };

  return (
    <div className={styles.hero}>
      {/* Main Content */}
      <div>
        {/* Logo and Input */}
        <div className={styles.logoInputContainer}>
          <div className={styles.logo}>
            <span className={styles.logoAI}>AI</span>
            <span className={styles.logoR}>R</span>
            <span className={styles.logoMax}>Max</span>
          </div>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Curious? Let AI Uncover the Answers!"
          />
        </div>

        {/* Title and Description */}
        <div className={styles.container}>
          <h1 className={styles.title}>
            Maximize Your Impact{" "}
            <span className={styles.highlight}>
              Business with <span className={styles.logoRlarge}>R</span>
              <span className={styles.logoMaxlarge}>Max</span>
            </span>
          </h1>
          <p className={styles.description}>
            Enhance your business with RMax's all-in-one platform—streamlining
            client engagement, automating workflows, and fueling growth.
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button
            className={styles.primaryButton}
            onClick={handleGetStartedClick} 
          >
            Get Started <span>→</span>
          </button>
          <button
            className={styles.secondaryButton}
            onClick={handleBookDemoClick} 
          >
            Book a Demo
          </button>
        </div>

        {/* Features */}
        <div className={styles.features}>
          <div className={styles.feature}>Seamless Onboarding</div>
          <div className={styles.feature}>Client Engagement</div>
          <div className={styles.feature}>Generate Report</div>
          <div className={styles.feature}>Revenue Growth</div>
          <div className={styles.sicon}>
            <img src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734766618/Qest-images/efskjkradktpnqvjoisd.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
