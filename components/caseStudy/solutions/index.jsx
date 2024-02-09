"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

function Solutions() {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={cn(styles.solutions, theme ? styles.solutionsDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h6 className={styles.solutionTitle}>Solutions</h6>
          <div>
            <h3 className={styles.solutionHeading}>
              Revving Up Digital Experiences: Ride, Record, and Recall.
            </h3>
            <p className={styles.solutionText}>
              Our motorcycle mobile application development team aimed to craft
              an MVP tailored for the iconic Royal Enfield brand. This app would
              be effortlessly scalable and optimized post initial rider
              feedback. Lets delve into the strategy that propelled us toward
              this objective.
            </p>
          </div>
        </div>

        <div className={styles.solutionImages}>
          <ImageCustom
            src="/images/solution1.png"
            width={1060}
            height={500}
            alt="content-img"
            className={styles.goalInnerImage}
          />
          <ImageCustom
            src="/images/solution2.png"
            width={500}
            height={400}
            alt="content-img"
            className={styles.goalInnerImage}
          />
          <ImageCustom
            src="/images/solution3.png"
            width={500}
            height={400}
            alt="content-img"
            className={styles.goalInnerImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
