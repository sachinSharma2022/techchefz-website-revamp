"use client";

import React from "react";
import styles from "./style.module.scss";
import { useContext } from "react";
import { MyContext } from "@/app/context/theme";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

const WeAreFuture = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.futureSpacing} ${
        theme ? styles.futureSpacingDark : ""
      }`}
    >
      <div className={styles.futureTitle}>
        <p className={styles.text}>We are a</p>
        <h2 className={styles.title}>
          Pioneering
          <span className={styles.globalText}>
            Future
            <ImageCustom src="/global.png" width="60" height="60" alt="" />
            Global
          </span>
          <span className={styles.titleHighlight}>Technology Company.</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <h3 className={styles.datingText}>
            With roots dating back to 2017, we started as a pocket size team of
            enthusiasts.
          </h3>
        </div>
        <div className="col-md-6 col-12">
          <p className={styles.aboutText}>
            Over the next 3 years, we developed into a full-service digital
            agency. We support our clients with web development, mobile app
            development, web design, branding UI/UX design and now getting into
            AR/VR.
          </p>

          <Button variant="outline" size="md">
            About the Company <Icons.ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WeAreFuture;
