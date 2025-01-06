"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const AdobeSection = () => {
  const { theme } = useContext(MyContext);
  return (
    <>
      <section
        className={cn(
          styles.adobeSectionStyle,
          theme ? styles.adobeSectionDark : ""
        )}
      >
        <div className={cn("primary-container")}>
          <ImageCustom
            src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2000}
            height={2000}
            alt="banner image"
            className={styles.imageBanner}
          />

          <TextRevel>
            <div className={styles.textSection}>
              <h1 className={cn(styles.title, "gradient-text")}>
                Take Your <span>Adobe Experience Manager</span> to the Next
                Level
              </h1>
              <div className={styles.contentSec}>
                <p className={cn(styles.leadText, "gradient-text")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque nisi diam, tincidunt id sapien id, laoreet
                  ultricies dolor.
                </p>
                <Link href="/">
                  <Button
                    variant={theme ? "outline" : "blueBtn"}
                    className={styles.headerBtn}
                    size="md"
                  >
                    Request a Free Consultation
                    <Icons.ArrowRight size={20} className="ms-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </TextRevel>
        </div>
      </section>
    </>
  );
};

export default AdobeSection;
