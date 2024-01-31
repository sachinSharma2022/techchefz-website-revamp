"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import TitleCard from "@/components/common/titleCard";

const CoeSupport = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  const cardData = [
    {
      title: "Project Delivery",
      content:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
    },
    {
      title: "Technical Assurance",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect. ",
    },
    {
      title: "Continuous Improvement",
      content:
        "The fast-paced nature of technological advancements means that today's cutting-edge solutions might become obsolete tomorrow and Organizations face constant IT challenges .",
    },
    {
      title: "Knowledge Management",
      content:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
    },
    {
      title: "Quality Assurance",
      content:
        "As IT infrastructures grow in complexity, so do the threats they face. Cyberattacks have evolved, becoming more sophisticated and harder to detect. ",
    },
    {
      title: "Innovative Solutions",
      content:
        "The fast-paced nature of technological advancements means that today's cutting-edge solutions might become obsolete tomorrow and Organizations face constant IT challenges .",
    },
  ];
  return (
    <section
      className={cn(
        styles.coeSupport,
        props.className,
        theme ? styles.coeSupportDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSec}>
          <h6 className={styles.coeSupportTitle}>SUPPORT</h6>
          <h3 className={styles.coeSupportHeading}>
            The CoE supports our global <br /> operations in the following areas
          </h3>
        </div>
        <div className={styles.coeSupportCards}>
          {cardData.map((data, index) => (
            <TitleCard key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoeSupport;
