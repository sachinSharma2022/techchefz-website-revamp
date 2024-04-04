"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import TitleCard from "@/components/common/titleCard";

const FeatureCard = ({props}) => {
  const { theme } = useContext(MyContext);
  
  return (
    <section
      className={cn(
        styles.challenges,
        props.className,
        theme ? styles.challengesDark : ""
      )}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSec}>
          <h6 className={cn(styles.challengeTitle, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}></h6>
          <h3 className={cn(styles.challengeHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
           
          </h3>
        </div>
        <div className={styles.challengesCards}>
          {props?.innerFaqs?.map((data, index) => (
            <TitleCard key={index} title={data.Title} content={data.Description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
