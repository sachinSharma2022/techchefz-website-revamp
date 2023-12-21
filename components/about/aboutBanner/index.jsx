import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import Image from "next/image";
import styles from "./style.module.scss";

const AboutBanner = () => {
  return (
    <section className={styles.aboutBanner}>
      <h1 className={styles.bannerTitle}>
        Pioneering Technologies that can <span>Reshape the World</span>{" "}
      </h1>
      <div className={styles.bannerImg}>
        {/* <Image src="/Assets/img/aboutBanner.png" width="1360" height="450" alt='bannerImg' /> */}

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
