"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";

import styles from "./style.module.scss";

const AemHeroBanner = ({ props }) => {
  console.log("hi prasad", props);
  const { theme } = useContext(MyContext);
  const scrollToForm = () => {
    const target = document.querySelector("#why-choose-us");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className={`${styles.heroBannerStyle} ${
          theme ? styles.heroBannerDark : ""
        }`}
      >
        <TextRevel>
          <div className={cn("header-container")}>
            <div className={cn(styles.flexSection, "primary-container")}>
              <h1
                className={cn(styles.title, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.title}` }}
              ></h1>
              <div className={styles.contentSec}>
                <p className={cn(styles.leadText, "gradient-text")}>
                  {props?.description}
                </p>
                <Button
                  onClick={scrollToForm}
                  variant={theme ? "blueBtnDark" : "blueBtn"}
                  className={styles.headerBtn}
                  size="md"
                >
                  {props?.button}
                  <Icons.ArrowRight size={20} className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </TextRevel>
      </section>
    </>
  );
};

export default AemHeroBanner;
