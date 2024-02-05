"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

import styles from "./style.module.scss";

const WeAreFuture = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.futureSpacing} ${
        theme ? styles.futureSpacingDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.futureTitle}>
          <p className={styles.text}>{props?.Title}</p>
          <h2 className={styles.title}>
            {props?.SubTitle}
            <span className={styles.globalText}>
              {props?.Description}
              <ImageCustom src="/global.png" width="60" height="60" alt="global-img" />
              {props?.SubTitle2}
            </span>
            <span className={styles.titleHighlight}>{props?.SubTitle3}</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <h3 className={styles.datingText}>
             {props?.CompanyTechnology[0]?.title}
            </h3>
          </div>
          <div className="col-md-6 col-12">
            <p className={styles.aboutText}>
            {props?.CompanyTechnology[0]?.description}
            </p>

            <Link href="/about">
              <Button variant="outline" size="md">
              {props?.CompanyTechnology[0]?.button} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreFuture;
