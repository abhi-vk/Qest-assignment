import React from "react";
import styles from "./steps.module.css";

const Steps = () => {
  return (
    <section className={styles.stepsSection}>
      <h2 className={styles.title}>Onboard business in 3 simple steps</h2>
      <p className={styles.subtitle}>
        Quick assisted onboarding with 30-day free trial. No credit card needed.
      </p>
      <div className={styles.stepsContainer}>
        {/* Step 1 */}
        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <span className={styles.stepNumber}>1</span>
            <img
              src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734766643/Qest-images/k3wvy2g7ohgynm8xczmu.png"
              alt="User Icon"
              className={styles.stepIcon}
            />
          </div>
          <h3 className={styles.stepTitle}>Claim preset profile</h3>
          <p className={styles.stepDescription}>
            Unlock tailored service and seamlessly elevate your experience by
            claiming your preset profile today.
          </p>
        </div>

        {/* Arrow between Step 1 and Step 2 */}
        <img
          src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734766582/Qest-images/ppumwrtic29dzqw8yrs8.png"
          alt="Arrow"
          className={`${styles.arrow} ${styles.arrow1}`}
        />

        {/* Step 2 */}
        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <span className={styles.stepNumber}>2</span>
            <img
              src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734766566/Qest-images/well8j2r8zshrvqosr6g.png"
              alt="Calendar Icon"
              className={styles.stepIcon}
            />
          </div>
          <h3 className={styles.stepTitle}>Add services</h3>
          <p className={styles.stepDescription}>
            Make use of multiple scheduling, pricing options to add services.
            Choose from pre-created scheduling templates.
          </p>
        </div>

        {/* Arrow between Step 2 and Step 3 */}
        <img
          src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734766582/Qest-images/ppumwrtic29dzqw8yrs8.png"
          alt="Arrow"
          className={`${styles.arrow} ${styles.arrow2}`}
        />

        {/* Step 3 */}
        <div className={styles.step}>
          <div className={styles.iconWrapper}>
            <span className={styles.stepNumber}>3</span>
            <img
              src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734766632/Qest-images/brdo1ixtrgu7nvvlhxcs.png"
              alt="Store Icon"
              className={styles.stepIcon}
            />
          </div>
          <h3 className={styles.stepTitle}>Build storefront</h3>
          <p className={styles.stepDescription}>
            Build your online storefront your way, seamlessly integrating all
            services for a cohesive and efficient Client experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
