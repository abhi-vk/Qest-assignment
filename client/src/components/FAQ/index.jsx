import React, { useState } from "react";
import styles from "./faq.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqData = [
    {
      question: "What is RMax?",
      answer:
        "Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.",
    },
    {
      question: "How does it work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum nulla vitae libero egestas, nec aliquet velit tristique.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros ac arcu fermentum, ut eleifend tortor viverra.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setActiveIndex(null); // Close all FAQs when searching
  };

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery)
  );

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <p className={styles.subtitle}>
        Find answers to common questions about our services and features. For
        more details, contact our support team.
      </p>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Ask Q! e.g. Tell me about key features."
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className={styles.searchButton}>
          <span role="img" aria-label="search">
            <img src="https://res.cloudinary.com/dslmuge4f/image/upload/v1734770257/Qest-images/ddfgg6ms9ks3z2bwxwpm.png"/>
          </span>
        </button>
      </div>

      {/* FAQ Items */}
      <div className={styles.faqContainer}>
        {filteredFAQs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={styles.icon}>
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {activeIndex === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <p className={styles.noResults}>No results found for your query.</p>
      )}

      <p className={styles.footer}>
        Haven't got your answer?{" "}
        <a href="/contactus" className={styles.link}>
          Contact our support now
        </a>
      </p>
    </section>
  );
};

export default FAQ;
