"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import TitleCard from "@/components/common/titleCard";

const CoeSupport = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
 
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
          <h6 className={cn(styles.coeSupportTitle,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}> 
          </h6>
          <h3 className={cn(styles.coeSupportHeading,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}`}}> 
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
