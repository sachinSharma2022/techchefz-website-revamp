"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";

import styles from "./style.module.scss";

const Industry = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={cn(styles.industry, theme ? styles.industryDark : "")}>
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <div className={styles.industryLeft}>
            <div className="mb-4">
              <h6>Industry</h6>
              <h5>Automobile</h5>
            </div>
            <div className="mb-4">
              <h6>Platform</h6>
              <h5>Web, Responsive</h5>
            </div>

            <h6>Services</h6>
            <div className={styles.serviceBtn}>
              <button size="xs">Web Design</button>
              <button size="xs">CMS</button>
              <button size="xs">React</button>
              <button size="xs">AEM</button>
              <button size="xs">Retail</button>
            </div>
          </div>
          <div className={styles.industryRight}>
            <h3 className={styles.industryHeading}>
              CMS Implementation for the largest car manufacturer and exporter
            </h3>
            <p className={styles.industryText}>
              Manufacturing quality cars for everyone. Manufacturing quality
              cars for everyone. One of the largest car manufacturers and car
              exporters from India since its inception. Exporting to more than
              80 countries, 400+ dealers and 1000+ service points in India. The
              brand is known for its advanced production, quality and testing
              capabilities with fully integrated state-of-the-art manufacturing
              plants. TechChefz implemented a CMS platform with seamless
              integration of much-needed modules.
            </p>
          </div>
        </div>

        <div className={styles.industryImg}>
          <ImageCustom
            src="/images/industry-img.png"
            width={1300}
            height={500}
            alt="website-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
