"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Results = ({props}) => {
  console.log("nnnn", props);
  const { theme, setTheme } = useContext(MyContext);
  // const resultCard = [
  //   {
  //     number: "500+",
  //     title: "Technology Innovation",
  //   },
  //   {
  //     number: "200+",
  //     title: "AI solutions integrated.",
  //   },
  //   {
  //     number: "200+",
  //     title: "Global Business Optimized",
  //   },
  // ];
  return (
    <section className={`${styles.results} ${theme ? styles.resultsDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3">
            <h6 className={styles.resultTitle}>{props.Title}</h6>
          </div>
          <div className="col-md-9 col-lg-9">
            <h3 className={styles.resultHeading}>
              {props?.SubTitle}
            </h3>
            <p className={styles.resultText}>
              {props?.Description}
            </p>
            <div className={styles.resultCards}>
              {props.ITSolutionsCards.map((data, index) => (
                <div key={index} className={styles.resultCard}>
                  <h3>{data.Title} </h3>
                  <h4>{data.Description} </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
