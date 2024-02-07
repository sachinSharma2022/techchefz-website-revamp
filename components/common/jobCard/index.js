"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const JobCard = (props) => {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={cn(styles.jobCardContainer, theme ? styles.darkJobCard : "")}
    >
      <div className={styles.cardDiv}>
        <h1>{props.title}</h1>
        <p className={styles.description}>{props.content}</p>
        <div className={styles.spanDiv}>
          <div className={styles.spanDetail}>
            <Icons.TimerIcon size={16} />
            <span>{props.exp}</span>
          </div>
          <div className={styles.spanDetail}>
            <Icons.LocationIcon size={16} />
            <span>{props.location}</span>
          </div>
        </div>
        <Button variant={theme ? "lightBlueBtn" : "blueBtn"} size="md">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
