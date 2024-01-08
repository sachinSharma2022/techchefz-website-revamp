"use client";

import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";

const OurResults = () => {
  const { theme, setTheme } = useContext(MyContext);

  const resultCardData = [
    {
      number: "4+",
      icon: <Icons.Graph width={36} height={36} />,
      title: "Years of Experience in Market.",
    },
    {
      number: "1M+",
      icon: <Icons.Graph width={36} height={36} />,
      title: "Users growth in marketplace.",
    },
    {
      number: "300%",
      icon: <Icons.Graph width={36} height={36} />,
      title: "Years of Experience in Market.",
    },
    {
      number: "120%",
      icon: <Icons.Graph width={36} height={36} />,
      title: "Years of Experience in Market.",
    },
  ];

  return (
    <section
      className={`${styles.ourResults} ${theme ? styles.ourResultsDark : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-8">
            <h6 className={styles.ourResultsTitle}>Our Results</h6>
            <h3 className={styles.ourResultsHeading}>
              Celebrating Achievements: A Data-Driven Overview
            </h3>
            <p className={styles.ourResultsText}>
              With years of remarkable growth, we&apos;ve secured a solid
              position in the fiercely competitive IT industry. Our impressive
              figures are a testament to our unwavering success and expertise.
              We continuously exceed expectations, expanding our client base and
              delivering high-quality IT services. Our journey is marked by
              consistent progress, a reflection of our commitment to excellence
              and innovation.
            </p>
          </div>
        </div>

        <div className={styles.resultCardWrapper}>
          {resultCardData.map((data, index) => (
            <div key={index} className={styles.resultCard}>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className={styles.cardNum}>{data.number}</h6>
                <div className={styles.cardNum}>{data.icon}</div>
              </div>
              <p className={styles.cardText}>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurResults;
