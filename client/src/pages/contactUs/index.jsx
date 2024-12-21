import React from "react";
import styles from "./contact.module.css";
import { Footer, Navbar } from "../../components";

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <section className={styles.contactSection}>
      <div className={styles.container}>
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
        {/* Heading */}
        <h1 className={styles.title}>Get in touch with us.</h1>
        <p className={styles.subtitle}>We're here to assist you.</p>

        {/* Contact Form */}
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="businessName">Business Name*</label>
                <input
                  type="text"
                  id="businessName"
                  placeholder="Search for your business listing"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name*</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="phoneNumber">Phone Number*</label>
                <div className={styles.phoneInput}>
                  <select className={styles.countryCode}>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="9851..."
                    required
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g xyz@gmail.com"
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write here your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Leave us a Message &rarr;
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h2 className={styles.infoTitle}>We are always happy to assist you</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>Email Address</h3>
              <p>Support@RMax.com</p>
              <p>Assistance hours: Monday - Friday 6 am to 8 pm EST</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Contact Number</h3>
              <p>+91-8657491236</p>
              <p>Assistance hours: Monday - Friday 6 am to 8 pm EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;
