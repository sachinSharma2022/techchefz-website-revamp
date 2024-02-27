"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import SmoothDropdown from "@/components/ui/smoothDropdownButton";
import { cn } from "@/lib/utils";

const CareerPositionOverview = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  console.log(props, "pop");

  const options = [
    {
      label: "Linkedin",
      link: "https://in.linkedin.com/",
      icon: "/images/icons/linkedin.png",
    },
    {
      label: "Indeed",
      link: "https://in.indeed.com/",
      icon: "/images/icons/indeed.png",
    },
    {
      label: "Naukri",
      link: "https://www.naukri.com/",
      icon: "/images/icons/naukri.png",
    },
  ];
  return (
    <div className={theme ? styles.jobPostDetail : styles.lightMode}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.jobInfo}>
          <h2>{props[0].Title}</h2>
          <div className={styles.jobDetails}>
            {props[0].Developerinner.map((data, index) => {
              return (
                <div className={styles.detail} key={index}>
                  <Icons.TimerIcon size={24} />
                  <span>{data.Title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.applyButtons}>
          <Button variant={theme ? "blueBtnDark" : "blueBtn"} size="md">
            {props[0].Button}
          </Button>
          <SmoothDropdown
            options={options}
            buttonLabel="Apply through"
            variant={theme ? "lightBlueOutline" : "outline"}
            size="md"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerPositionOverview;
