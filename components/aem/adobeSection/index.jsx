"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const AdobeSection = ({ props }) => {
  // console.log("hi manoj ji", props);
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
        className={cn(
          styles.adobeSectionStyle,
          theme ? styles.adobeSectionDark : ""
        )}
      >
        <div className={cn("primary-container")}>
          <ImageCustom
            src={
              props?.image?.data?.attributes?.url
                ? `${base_Uri}${props.image.data.attributes.url}`
                : '/default-image.png'
            }
            width={2000}
            height={2000}
            alt={
              props?.image?.data?.attributes?.alternativeText || "Default Alt Text"
            }
            className={styles.imageBanner}
          />

          <TextRevel>
            <div className={styles.textSection}>
              <h1 className={cn(styles.title, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}>
              </h1>
              <div className={styles.contentSec}>
                <p className={cn(styles.leadText, "gradient-text")}>
                  {props?.SubTitle}
                </p>
                <div>
                  <Button
                    variant={theme ? "lightBlueOutline" : "blueBtn"}
                    className={styles.headerBtn}
                    size="md"
                    onClick={scrollToForm}
                  >
                    {props?.button}
                    <Icons.ArrowRight size={20} className="ms-2" />
                  </Button>
                </div>
              </div>
            </div>
          </TextRevel>
        </div>
      </section>
    </>
  );
};

export default AdobeSection;
