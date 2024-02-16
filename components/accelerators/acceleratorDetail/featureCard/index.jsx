"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import TitleCard from "@/components/common/titleCard";

const FeatureCard = ({props}) => {
  const { theme } = useContext(MyContext);
  const cardData = [
    {
      title: "Enhanced Customer Support",
      content:
        "Customers can ask support-related questions in natural language, and the system can guide them to the most relevant articles, FAQs, or support tickets, reducing support workload.",
    },
    {
      title: "E-Commerce Personalization",
      content:
        "Online retailers can integrate the Conversational Search System to help customers find products using colloquial language, leading to a more personalized shopping experience.",
    },
    {
      title: "Data Retrieval for Enterprises",
      content:
        "Enterprises with large internal databases can use conversational search to help employees find documents or information using natural language queries, streamlining workflow.",
    },
  ];
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
