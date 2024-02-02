"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import TitleCard from "@/components/common/titleCard";

const CoeSupport = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  // const cardData = [
  //   {
  //     title: "Navigating Cloud Integration Complexities",
  //     content:
  //       "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
  //   },
  //   {
  //     title: "Cybersecurity in an Age of Advanced Threats",
  //     content:
  //       "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
  //   },
  //   {
  //     title: "Scalability Amidst Rapid Technological Evolution",
  //     content:
  //       "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges.",
  //   },
  // ];
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
          <h6 className={styles.coeSupportTitle}>{props?.Title}</h6>
          <h3 className={styles.coeSupportHeading}>
          {props?.SubTitle}
          </h3>
        </div>
        <div className={styles.coeSupportCards}>
          {props?.TechnologicalCard.map((data, index) => (
            <TitleCard key={index} title={data.Title} content={data.Description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoeSupport;
