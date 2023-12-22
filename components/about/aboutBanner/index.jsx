import React from "react";

import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className={styles.aboutBanner}>
      <h1 className={styles.bannerTitle}>
        Pioneering Technologies that can <span>Reshape the World</span>
      </h1>
      <div className={styles.bannerImg}>
        <ImageCustom
          src="/images/img/aboutBanner.png"
          width={1360}
          height={450}
          alt="bannerImg"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
