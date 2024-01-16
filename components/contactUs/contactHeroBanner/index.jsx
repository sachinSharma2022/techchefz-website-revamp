import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const ContactHeroBanner = () => {
  return (
    <section className={`${styles.contactHeroBannerStyle}`}>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>
          Let’s discuss about your next
          <span className={styles.titleHighlight}>Digital Campaign.</span>
        </h1>
      </div>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src="/images/contact-us-banner.png"
          width={1440}
          height={650}
          alt="contactBannerImg"
        />
      </div>
    </section>
  );
};

export default ContactHeroBanner;
