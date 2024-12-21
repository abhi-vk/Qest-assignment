import React from "react";
import styles from "./details.module.css";
import { FaCalendarAlt, FaUserCircle, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";

const Details = () => {
  const details = [
    // First Column
    {
      title: "Scheduling",
      description:
        "Manage appointments, classes, and events, workshops with...",
      icon: <FaCalendarAlt className={styles.icon} />,
      link: "#",
      column: "left",
    },
    {
      title: "Billing & Payments",
      description:
        "Streamline invoicing and payments with automated workflows, reducing ...",
      image: "https://res.cloudinary.com/dslmuge4f/image/upload/v1734782691/Qest-images/djw0tihptfppfwjiifll.png", // Replace with your image URL
      link: "#",
      column: "left",
    },
    // Second Column
    {
      title: "Client Management & CRM",
      description:
        "Keep track of customer data, preferences, and interactions to...",
      icon: <FaUserCircle className={styles.icon} />,
      link: "#",
      column: "middle",
    },
    {
      title: "AI Powered Insights",
      description:
        "Know exactly what is happening in business and get actionable...",
      icon: <FaChartLine className={styles.icon} />,
      link: "#",
      column: "middle",
    },
    {
      title: "Marketing & Engagement Tools",
      description:
        "Boost client retention and grow your business with integrated...",
      link: "#",
      column: "middle",
    },
    // Third Column
    {
      title: "Multi-Location Management",
      description:
        "Manage multiple locations with ease, assigning roles and permissions...",
      icon: <FaMapMarkerAlt className={styles.icon} />,
      link: "#",
      column: "right",
    },
    {
      title: "Custom Branded Website",
      description:
        "Qest’s Custom Branded Website Builder allows you to create a fully personalized...",
      image: "https://www.digitalsilk.com/wp-content/uploads/2022/11/custom-web-design-NewDevRev-526x589.png", // Replace with your image URL
      link: "#",
      column: "right",
    },
  ];

  return (
    <section className={styles.detailsSection}>
      <h2 className={styles.title}>Why Rmax?</h2>
      <p className={styles.subtitle}>
        Rmax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stakeholders.
      </p>
      <div className={styles.gridContainer}>
        {/* First Column */}
        <div className={styles.column}>
          {details
            .filter((detail) => detail.column === "left")
            .map((detail, index) => (
              <div key={index} className={styles.card}>
                {detail.icon ? (
                  <div className={styles.iconContainer}>{detail.icon}</div>
                ) : (
                  <div className={styles.imageContainer}>
                    <img src={detail.image} alt={detail.title} className={styles.image} />
                  </div>
                )}
                <h3 className={styles.cardTitle}>{detail.title}</h3>
                <p className={styles.cardDescription}>{detail.description}</p>
                <a href={detail.link} className={styles.link}>
                  View details &gt;
                </a>
              </div>
            ))}
        </div>

        {/* Second Column */}
        <div className={styles.middleColumn}>
          {details
            .filter((detail) => detail.column === "middle")
            .map((detail, index) => (
              <div key={index} className={styles.card}>
                {detail.icon && (
                  <div className={styles.iconContainer}>{detail.icon}</div>
                )}
                <h3 className={styles.cardTitle}>{detail.title}</h3>
                <p className={styles.cardDescription}>{detail.description}</p>
                <a href={detail.link} className={styles.link}>
                  View details &gt;
                </a>
              </div>
            ))}
        </div>

        {/* Third Column */}
        <div className={styles.column}>
          {details
            .filter((detail) => detail.column === "right")
            .map((detail, index) => (
              <div key={index} className={styles.card}>
                {detail.icon ? (
                  <div className={styles.iconContainer}>{detail.icon}</div>
                ) : (
                  <div className={styles.imageContainer}>
                    <img src={detail.image} alt={detail.title} className={styles.image} />
                  </div>
                )}
                <h3 className={styles.cardTitle}>{detail.title}</h3>
                <p className={styles.cardDescription}>{detail.description}</p>
                <a href={detail.link} className={styles.link}>
                  View details &gt;
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
