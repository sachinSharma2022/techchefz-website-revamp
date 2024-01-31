"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const Industry = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.industry} ${theme ? styles.industryDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className="row justify-content-between">
          <div className="col-md-4 col-lg-4">
            <div className={styles.industryLeft}>
              <div className="mb-4">
                <h6>Industry</h6>
                <h5>Automobile</h5>
              </div>
              <div className="mb-4">
                <h6> Platform</h6>
                <h5>Web, Responsive</h5>
              </div>

              <h6> Services</h6>
              <div className={styles.serviceBtn}>
                <button variant="outline" size="xs">
                  Web Design
                </button>
                <button variant="outline" size="xs">
                  CMS
                </button>
                <button variant="outline" size="xs">
                  React
                </button>
                <button variant="outline" size="xs">
                  AEM
                </button>
                <button variant="outline" size="xs">
                  Retail
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7">
            <div className={styles.industryRight}>
              <h3 className={styles.industryHeading}>
                CMS Implementation for the largest car manufacturer and exporter
              </h3>
              <p className={styles.industryText}>
                Manufacturing quality cars for everyone. Manufacturing quality
                cars for everyone. One of the largest car manufacturers and car
                exporters from India since its inception. Exporting to more than
                80 countries, 400+ dealers and 1000+ service points in India.
                The brand is known for its advanced production, quality and
                testing capabilities with fully integrated state-of-the-art
                manufacturing plants. TechChefz implemented a CMS platform with
                seamless integration of much-needed modules.
              </p>
            </div>
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
