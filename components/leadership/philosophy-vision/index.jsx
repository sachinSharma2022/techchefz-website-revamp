"use client";

import { ImageCustom } from "@/components/ui/imageCustom";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const PhilosophyVision = ({ props }) => {
  console.log("hiiiiiii", props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.philosophyVisionStyle} ${theme ? styles.philosophyVisionDark : ""
        }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={cn(styles.flexContainer)}>
            <h6 className={cn(styles.subHeading, "gradient-text")}>
              {props?.Title}
            </h6>
            <h3 className={cn(styles.heading, "gradient-text")}>
              {props?.SubTitle}
            </h3>
          </div>
        </TextRevel>

        <div className={styles.visionSection}>
          {props?.Philosophycard?.map((item, index) => (
            <div>
              <ImageCustom
                src={
                  item?.CardImage?.data?.attributes?.url
                    ? `${base_Uri}${item?.CardImage?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                alt=""
                width={90}
                height={90}
                className={styles.imageStyle}
              />
              <h4 className={styles.title}>{item?.Title}</h4>
              <p className={styles.description}>
                {item?.Description}
              </p>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default PhilosophyVision;
