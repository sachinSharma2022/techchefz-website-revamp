import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import styles from "./styles.module.scss";
import CaptionCard from "@/components/ui/captionCard";

const TechnologyCase = () => {
  const caseCardData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Revolutionizing Retail: A Digital Transition",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1552155634-312b6355173b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D",
      title: "CMS Implementation for the Motorcycle Brand",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGx1eGVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
      title: "Framework for Web Portal of the luxury hotel chain",
    },
  ];
  return (
    <section className={styles.technologyCase}>
      <div className={styles.headSection}>
        <div className={styles.caseTop}>
          <h4 className={styles.caseTitle}>Case Study</h4>
          <h3 className={styles.caseHeading}>
            Together in every code. Discover the strength of our partnership.
          </h3>
        </div>
        <div className={styles.btnSection}>
          <Button variant="outline" size="sm">
            Explore Now <Icons.ArrowRight size={18} />
          </Button>
        </div>
      </div>
      <div className={styles.technologyCaseCards}>
        {caseCardData.map((data, index) => (
          <CaptionCard key={index} imgSrc={data.imgSrc} title={data.title} />
        ))}
      </div>
    </section>
  );
};

export default TechnologyCase;
