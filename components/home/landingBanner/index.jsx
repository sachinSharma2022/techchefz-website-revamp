"use client";

import React,{useState,useEffect} from "react";
import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const LandingBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.landingBannerStyle} ${
        theme ? styles.landingBannerDark : ""
      }`}
    >
      <h1 className={styles.title}>
        Humanizing <div /> Digital Experience <div />
        <div className={styles.conatiner}>
        <div>Through </div>
        <div className={styles.slider}>
            <div className={styles.text1}> Data</div>
            <div className="text2"> Creativity</div>
            <div className="text3"> Work</div>
          </div>
          </div>
      </h1>

        <Link href="/contact-us">
          <Button variant="blueBtn" size="md">
            Let’s Work Together <Icons.ArrowRight size={18} />
          </Button>
        </Link>
    </section>
  );
};

export default LandingBanner;
