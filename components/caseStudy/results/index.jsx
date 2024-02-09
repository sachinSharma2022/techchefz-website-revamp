"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import MobileSlider from "@/components/common/mobileSlider";
import { useMediaQuery } from "react-responsive";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Results = () => {
  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const resultCard = [
    {
      number: "500+",
      title: "Technology Innovation",
    },
    {
      number: "200+",
      title: "AI solutions integrated.",
    },
    {
      number: "200+",
      title: "Global Business Optimized",
    },
  ];
  return (
    <section className={cn(styles.results, theme ? styles.resultsDark : "")}>
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h6 className={styles.resultTitle}>Results</h6>
          <div>
            <h3 className={styles.resultHeading}>
              Riding into Tomorrow, Results that Rev Up Royal Enfield.
            </h3>
            <p className={styles.resultText}>
              The MVP model was rolled out in five months. Upon completion, it
              was unveiled for Royal Enfield enthusiasts. We&apos;re now
              enhancing this offering to fully embody the spirit of Royal
              Enfield.
            </p>

            {!isMobileScreen && (
              <div className={styles.resultCards}>
                {resultCard.map((data, index) => (
                  <div key={index} className={styles.resultCard}>
                    <h3>{data.number} </h3>
                    <h4>{data.title} </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobileScreen && (
        <div className={styles.mobileSliderCard}>
          <div className={styles.resultCards}>
            <MobileSlider slidesToShow={1.3}>
              {resultCard.map((data, index) => (
                <div key={index} className={styles.resultCard}>
                  <h3>{data.number}</h3>
                  <h4>{data.title}</h4>
                </div>
              ))}
            </MobileSlider>
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
