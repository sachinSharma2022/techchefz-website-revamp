"use client";

import { ImageCustom } from "@/components/ui/imageCustom";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const PhilosophyVision = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.philosophyVisionStyle} ${
        theme ? styles.philosophyVisionDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={cn(styles.flexContainer)}>
            <h6 className={cn(styles.subHeading, "gradient-text")}>
              Philosophy and Vision
            </h6>
            <h3 className={cn(styles.heading, "gradient-text")}>
              Together in every code. Discover the strength of our partnership.
            </h3>
          </div>
        </TextRevel>

        <div className={styles.visionSection}>
          <div>
            <ImageCustom
              src="/images/icons/philosophy.svg"
              alt=""
              width={90}
              height={90}
              className={styles.imageStyle}
            />
            <h4 className={styles.title}>Leadership Philosophy</h4>
            <p className={styles.description}>
              At Techchefz, our leadership philosophy centers on trust,
              integrity, and empowerment. We foster collaboration, inspire
              growth, and embrace innovation, ensuring ethical, transparent
              decisions that turn challenges into opportunities and drive
              meaningful impact.
            </p>
          </div>

          <div>
            <ImageCustom
              src="/images/icons/vision.svg"
              alt=""
              width={90}
              height={90}
              className={styles.imageStyle}
            />

            <h4 className={styles.title}>Leadership Vision</h4>
            <p className={styles.description}>
              Our vision is to drive innovation, sustainability, and
              transformative success. At Techchefz, we lead with purpose,
              empowering people, clients, and communities while setting
              benchmarks of excellence and creating lasting value in the B2B
              services industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyVision;
