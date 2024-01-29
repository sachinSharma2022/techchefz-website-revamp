"use client";

import React, { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import Link from "next/link";

const InsightBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={cn(!theme ? styles.landingBannerStyle : styles.darkMode)}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Check out our latest news,announcements, and{" "}
            <span className={styles.titleHighlight}>featured </span>articles.
          </h1>
          <div className={styles.contentRight}>
            <p className={styles.leadText}>
              We’re a worldwide presence, serving clients on four continents.
              Our international expertise ensures innovative solutions tailored
              to diverse global needs.
            </p>
            <Link href="/insight-inside">
              <Button
                variant={theme ? "lightBlueBtn" : "blueBtn"}
                className={styles.headerBtn}
                size="md"
              >
                Let’s Work Together{" "}
                <Icons.ArrowRight size={20} className="ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightBanner;
