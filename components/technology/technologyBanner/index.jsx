"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import styles from "./style.module.scss";

const TechnologyBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.landingBannerStyle} ${
        theme ? styles.landingBannerDark : ""
      }`}
    >
      <div className={cn("primary-container", "header-container")}>
        <h1
          className={cn(styles.title, "gradient-text")}
          dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}
        ></h1>
        <div className={styles.contentSec}>
          <p
            className={styles.leadText}
            dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}` }}
          ></p>
          <Link href="/contact-us">
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              className={styles.headerBtn}
              size="md"
            >
              {props[0]?.Button}
              <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyBanner;
