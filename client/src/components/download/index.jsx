import React from "react";
import styles from "./download.module.css";

const Download = () => {
  return (
    <section className={styles.downloadSection}>
      <h2 className={styles.title}>Manage Your Business On the Go</h2>
      <p className={styles.subtitle}>
        With the free Business Mobile App, you can manage your entire service business from anywhere.
        Stay connected and stay in control, no matter where your day takes you.
      </p>

      <div className={styles.storeButtons}>
        <div  >
          <img
            src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734773530/Qest-images/iboldz5dvl6eooibg2vf.png"
            alt="App Store"
            className={styles.storeIcon}
          />
         
        </div>
        <div >
          <img
            src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734773522/Qest-images/rssahj7zgsygujkoekv5.png"
            alt="Google Play"
            className={styles.storeIcon}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Download;
