import React from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";

const TechnologyStack = () => {
  const serviceCard = [
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
    {
      icon: <Icons.Adobe width={72} height={72} />,
    },
  ];
  return (
    <section className={`${styles.technologyStyle}`}>
      {serviceCard.map((data, index) => (
        <div key={index} className={styles.gridContainer}>
          <div className={styles.techCardLogo}>{data.icon}</div>
        </div>
      ))}
    </section>
  );
};

export default TechnologyStack;
