"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import SmoothDropdown from "@/components/ui/smoothDropdownButton";
import { cn } from "@/lib/utils";

const CareerPositionOverview = () => {
  const { theme, setTheme } = useContext(MyContext);

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
          <h2>Mern Developer</h2>
          <div className={styles.jobDetails}>
            <div className={styles.detail}>
              <Icons.TimerIcon size={24} />
              <span>4-6 Years</span>
            </div>
            <div className={styles.detail}>
              <Icons.LocationIcon size={24} />
              <span>Work from Home</span>
            </div>
            <div className={styles.detail}>
              <Icons.Specialization size={24} />
              <span>Backend</span>
            </div>
          </div>
        </div>
        <div className={styles.applyButtons}>
          <Button variant="blueBtn" size="md">
            Apply
          </Button>
          <SmoothDropdown
            options={options}
            buttonLabel="Apply through"
            variant="outline"
            size="md"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerPositionOverview;
