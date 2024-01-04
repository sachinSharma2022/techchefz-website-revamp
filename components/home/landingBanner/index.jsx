"use client";
import React, { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";

const texts = ["Through Data", "Through Connectivity", "Through Data2"];
const LandingBanner = () => {
  const [textIndex, setTextIndex] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={`${styles.landingBannerStyle}`}>
      <h1 className={styles.title}>
        Humanizing <div /> Digital Experience <div />
        <ReactTextTransition
       springConfig={{ stiffness: 100, damping: 50 }}
        delay={300}
        inline>
        <div className={styles.rollingTitle}>{texts[textIndex]}</div></ReactTextTransition>
      </h1>

      <Button variant="blueBtn" size="md" className={styles.buttonContent}>
        Let’s Work Together <Icons.ArrowRight size={18} />
      </Button>
    </section>
  );
};

export default LandingBanner;
