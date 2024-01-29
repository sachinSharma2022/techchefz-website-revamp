"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "../../ui/button";

// Style
import styles from "./style.module.scss";

const LandingBanner = () => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.landingBannerStyle} ${
        theme ? styles.landingBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.title}>
          Humanizing <span /> Digital Experience <span />
          <div className={styles.contentContainer}>
            <span>Through </span>
            <span className={styles.slider}>
              <span className={styles.text1}>Data</span>
              <span className="text2"> Creativity</span>
              <span className="text3"> Work</span>
            </span>
          </div>
        </h1>

        <Link href="/contact-us">
          <Button variant={theme ? "blueBtnDark" : "blueBtn"} size="md">
            Let’s Work Together <Icons.ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LandingBanner;
