"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

const CmsBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.cmsBannerStyle} ${
        theme ? styles.cmsBannerDark : ""
      }`}
    >
      <div className={cn("primary-container", "header-container")}>
        <h1
          className={cn(styles.title, "gradient-text")}
          dangerouslySetInnerHTML={{ __html: `${props?.title}` }}
        ></h1>
        <div className={styles.contentSec}>
          <p
            className={cn(styles.leadText, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props.subtitle}` }}
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

export default CmsBanner;
