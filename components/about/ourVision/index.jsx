"use client";

import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import VideoCustom from "@/components/ui/videoCustom";
import { cn } from "@/lib/utils";

const OurVision = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.ourVision} ${theme ? styles.ourVisionDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h3 className={styles.aboutHeading}>
            Our guiding lights in the dynamic tech landscape, fueling our
            <span> dedication to innovation, excellence</span>, and a brighter
            technological tomorrow.
          </h3>

          <div>
            <div>
              <h6 className={styles.aboutSubHeading}>Our Vision</h6>
              <p className={styles.aboutParagraph}>
                Be a partner for industry verticals on the inevitable journey
                towards enterprise transformation and future readiness, by
                harnessing the growing power of Artificial Intelligence, Machine
                Learning, Data Science and emerging methodologies, with
                immediacy of impact and swiftness of outcome.
              </p>
            </div>
            <div>
              <h6 className={styles.aboutSubHeading}>Our Mission</h6>
              <p className={styles.aboutParagraph}>
                To decode data, and code new intelligence into products and
                automation, engineer, develop and deploy systems and
                applications that redefine experiences and realign business
                growth.
              </p>
            </div>
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
