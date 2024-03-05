"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./styles.module.scss";
import TitleCard from "@/components/common/titleCard";
import TextRevel from "@/components/ui/sectionAnimation";

const CoeSupport = ({ props }) => {
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
        <TextRevel>
          <div className={styles.headSec}>
            <h6
              className={cn(styles.coeSupportTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.coeSupportHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
          </div>
        </TextRevel>

        <div className={styles.coeSupportCards}>
          {props?.TechnologicalCard.map((data, index) => (
            <TitleCard
              key={index}
              title={data.Title}
              content={data.Description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoeSupport;
