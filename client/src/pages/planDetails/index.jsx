import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./plandetails.module.css";
import { FAQ, Footer, Navbar } from "../../components";

const PlanDetails = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/contactus");
  };

  return (
    <>
      <Navbar />
      <section className={styles.planSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Flexible Plans, Transparent Pricing</h1>
          <p className={styles.subtitle}>
            Find the Perfect Fit for You <br />
            <span className={styles.highlight}>
              30-day free trial with money-back guarantee.
            </span>
          </p>
          <div className={styles.tableContainer}>
            <h2 className={styles.tableTitle}>Compare our plans</h2>
            <table className={styles.planTable}>
              <thead>
                <tr>
                  <th className={styles.featureColumn}>Features</th>
                  <th className={styles.planColumn}>
                    Starter
                    <br />
                    <span className={styles.planPrice}>$17/month</span>, billed monthly
                  </th>
                  <th className={styles.planColumn}>
                    Premium
                    <br />
                    <span className={styles.planPrice}>$88/month</span>, billed monthly
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.featureHeader}>Basic Management</td>
                </tr>
                <tr>
                  <td>Users</td>
                  <td>1</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Branches</td>
                  <td>1</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Courses</td>
                  <td>3</td>
                  <td>15/branch</td>
                </tr>
                <tr>
                  <td>Max. Students Allowed</td>
                  <td>25</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Communication</td>
                  <td>25</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Bulk Updates</td>
                  <td>25</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>User Roles</td>
                  <td>25</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button
                      className={styles.getStartedButton}
                      onClick={handleGetStartedClick}
                    >
                      Get Started &rarr;
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.getStartedButton}
                      onClick={handleGetStartedClick}
                    >
                      Get Started &rarr;
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.creditInfo}>No credit card required</p>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
};

export default PlanDetails;
