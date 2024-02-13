"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const WeAreFuture = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.futureSpacing} ${
        theme ? styles.futureSpacingDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.futureTitle}>
          <p className={styles.text}>We are a</p>
          <h2 className={styles.title}>
            Pioneering
            <div className={styles.globalText}>
              Future
              <ImageCustom
                src="/global.png"
                width="60"
                height="60"
                alt="global-img"
              />
              Global
            </div>
            <span>Technology Company.</span>
          </h2>
        </div>
        <TextRevel>
          <div className={styles.contentSection}>
            <h3 className={cn(styles.datingText, "gradient-text")}>
              With roots dating back to 2017, we started as a pocket size teamof
              <span> enthusiasts.</span>
            </h3>
            <div>
              <p className={styles.aboutText}>
                Over the next 3 years, we developed into a full-service digital
                agency. We support our clients with web development, mobile app
                development, web design, branding UI/UX design and now getting
                into AR/VR.
              </p>

              <Link href="/about">
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  About the Company <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>
      </div>
    </section>
  );
};

export default WeAreFuture;
