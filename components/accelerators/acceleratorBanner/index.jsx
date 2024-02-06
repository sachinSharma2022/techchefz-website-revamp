"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";

const AcceleratorBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>
            Speed Your Journey from Idea to Impact with our{" "}
            <span>Accelerators.</span>
          </h1>
          <div className={styles.bannerRight}>
            <p>
              Streamline Your Tech Projects with Techchefz Solution
              Accelerators. Our tailor-made toolkits designed to fast-track your
              most critical and impactful projects.
            </p>
            <Button variant={theme ? "blueBtnDark" : "blueBtn"} className={styles.headerBtn} size="md">
              Request a Demo <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorBanner;
