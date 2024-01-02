import React from "react";

import styles from "./styles.module.scss";

const Challenges = () => {
  const cardData = [
    {
      title: "Navigating Cloud Integration Complexities",
      content:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
    },
    {
      title: "Cybersecurity in an Age of Advanced Threats",
      content:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
    },
    {
      title: "Scalability Amidst Rapid Technological Evolution",
      content:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
    },
  ];
  return (
    <section className={styles.challenges}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <h6 className={styles.challengeTitle}>Challenges</h6>
          <h3 className={styles.challengeHeading}>
            Overcoming IT Hurdles: Key Challenges
          </h3>
        </div>
      </div>
      <div className={styles.challengesCards}>
        {cardData.map((data, index) => (
          <div key={index} className={styles.challengesCard}>
            <h5>{data.title} </h5>
            <p>{data.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
