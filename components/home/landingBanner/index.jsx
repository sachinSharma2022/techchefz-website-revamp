"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "../../ui/button";
import styles from "./style.module.scss";

const LandingBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  console.log(theme ? "blueBtnDark" : "blueBtn");
  return (
    <section
      className={`${styles.landingBannerStyle} ${
        theme ? styles.landingBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <h1 className={styles.title}>
          Humanizing <div /> Digital Experience <div />
          <div className={styles.contentContainer}>
            <div>Through </div>
            <div className={styles.slider}>
              <div className={styles.text1}>Data</div>
              <div className="text2"> Creativity</div>
              <div className="text3"> Work</div>
            </div>
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
