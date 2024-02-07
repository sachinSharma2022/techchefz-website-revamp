"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";

const AcceleratorBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle} dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}>
          </h1>
          <div className={styles.bannerRight}>
            <p>
              {props.Description}
            </p>
            <Button variant={theme ? "blueBtnDark" : "blueBtn"} className={styles.headerBtn} size="md">
              {props.Btn} <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorBanner;
