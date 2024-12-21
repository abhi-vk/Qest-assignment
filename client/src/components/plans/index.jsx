import React, { useState } from "react";
import styles from "./plans.module.css";

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBillingCycle = () => {
    setIsYearly(!isYearly);
  };

  const monthlyPlans = [
    { type: "Starter", price: 17, features: ["Commercial License", "100+ HTML UI Elements", "Unlimited Domain Support"], limitedFeatures: ["6 Month Premium Support", "Lifetime Updates"] },
    { type: "Premium", price: 88, features: ["Commercial License", "100+ HTML UI Elements", "Unlimited Domain Support", "6 Month Premium Support", "Lifetime Updates"] },
  ];

  const yearlyPlans = monthlyPlans.map(plan => ({
    ...plan,
    price: plan.price * 12 * 0.8, // 20% discount for yearly billing
  }));

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <section className={styles.plansSection}>
      <h2 className={styles.title}>Choose Plan That’s Right For You</h2>
      <p className={styles.subtitle}>
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <span className={styles.highlight}> 30 day free trial in a button.</span>
      </p>

      <div className={styles.billingToggle}>
        <span>Monthly</span>
        <div className={styles.toggleSwitch} onClick={toggleBillingCycle}>
          <div className={`${styles.switchThumb} ${isYearly ? styles.active : ""}`}></div>
        </div>
        <span>Yearly</span>
      </div>

      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.planCard}>
            <h3 className={styles.planType}>{plan.type.toUpperCase()}</h3>
            <div className={styles.planPrice}>
              <span className={styles.dollarSign}>$</span>
              <span className={styles.price}>{plan.price.toFixed(0)}</span>
              <span className={styles.billingCycle}>/ {isYearly ? "year" : "month"}</span>
            </div>
            <p className={styles.billingInfo}>billed {isYearly ? "yearly" : "monthly"}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  ✅ {feature}
                </li>
              ))}
              {plan.limitedFeatures &&
                plan.limitedFeatures.map((feature, i) => (
                  <li key={i} className={styles.featureLimited}>
                    ❌ {feature}
                  </li>
                ))}
            </ul>
            <button className={styles.getStartedButton}>Get Started →</button>
            <p className={styles.noCardRequired}>No credit card required</p>
          </div>
        ))}
      </div>

      <p className={styles.footer}>
        <a href="/plandetails" className={styles.link}>
          Explore In-Depth Differences
        </a>
      </p>
    </section>
  );
};

export default Plans;
