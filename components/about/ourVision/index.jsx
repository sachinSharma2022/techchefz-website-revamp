"use client";

import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import VideoCustom from "@/components/ui/videoCustom";
import { cn } from "@/lib/utils";

const OurVision = ({ props }) => {

  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.ourVision} ${theme ? styles.ourVisionDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h3 className={styles.aboutHeading} dangerouslySetInnerHTML={{ __html: `${props[0]?.title}` }}>

          </h3>

          <div>
            {props && props[0].OurVisionMissioninner.map((item, index) => {
              return (
                <div key={index}>
                  <h6 className={styles.aboutSubHeading}>{item.title}</h6>
                  <p className={styles.aboutParagraph}>
                    {item.description}
                  </p>
                </div>
              )

            })}

          </div>
        </div>

        <div className={styles.videoWrapper}>
          <VideoCustom src={"about.mp4"} width={1200} height={500} />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
