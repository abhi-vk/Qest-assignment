import React from "react";
import styles from "./services.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Service = () => {
  const services = [
    {
      title: "Sports",
      description:
        "From fitness studios to sports academies, RMax empowers sports businesses.",
      image: "https://res.cloudinary.com/dslmuge4f/image/upload/v1734779074/Qest-images/yrnsgqzn7eremyy3x8bj.png", 
      link: "#",
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Health and wellness service providers—from yoga instructors to gyms.",
      image: "https://res.cloudinary.com/dslmuge4f/image/upload/v1734779100/Qest-images/jxnbyaopvyd6ikdbwp6k.png", 
    },
    {
      title: "Learning Activities",
      description:
        "Tutors, educators, and learning centers—from music schools to art studios.",
      image: "https://res.cloudinary.com/dslmuge4f/image/upload/v1734779135/Qest-images/rz1sboqxm5hqxwxpixhf.png", 
    },
  ];

  return (
    <section className={styles.serviceSection}>
      
      <div className={styles.heading}>
        <h2 className={styles.title}>Empowering Service Providers Across Industries</h2>
      <p className={styles.subtitle}>
        Whether you're in sports, education, wellness, household services, or niche markets,
        our technology simplifies your business operations, making it easier for you to focus on what you do best.
      </p></div>

      <div className={styles.carousel}>
        <button className={styles.arrowButton}>
          <IoIosArrowBack className={styles.arrowIcon} />
        </button>

        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={service.image} alt={service.title} className={styles.image} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>
                {service.description}{" "}
                <a href={service.link} className={styles.link}>
                  Know more...
                </a>
              </p>
            </div>
          ))}
        </div>

        <button className={styles.arrowButton}>
          <IoIosArrowForward className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default Service;
