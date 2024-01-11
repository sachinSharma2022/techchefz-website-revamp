"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";

const CareerPositonOverview = () => {
 const { theme, setTheme } = useContext(MyContext);

  return (
    <div className={theme ? styles.jobPostDetail : styles.lightMode}>
      <div className={styles.jobInfo}>
        <h2>Mern Developer</h2>
        <div className={styles.jobDetails}>
          <div className={styles.detail}>
            <Icons.timer size={24} />
            <span>4-6 Years</span>
          </div>
          <div className={styles.detail}>
            <Icons.location size={24} />
            <span>Work from Home</span>
          </div>
          <div className={styles.detail}>
            <Icons.specialistion size={24} />
            <span>Backend</span>
          </div>
        </div>
      </div>
      <div className={styles.applyButtons}>
        <Button variant={theme ? "ligthBlueBtn" : "blueBtn"} size="md">
          Apply
        </Button>
        <Button variant="outline" size="md">
        Apply Through <Icons.ArrowSubDown />
      </Button>
      </div>
    </div>
  );
};

export default CareerPositonOverview;
