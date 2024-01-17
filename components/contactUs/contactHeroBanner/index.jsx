import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const ContactHeroBanner = () => {
  return (
    <section className={`${styles.contactHeroBannerStyle}`}>
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Let’s discuss about your next
            <span className={styles.titleHighlight}>Digital Campaign.</span>
          </h1>
        </div>
      </div>

      <div className={styles.landingPlayerStyle}>
        <ImageCustom
          src="/images/contact-us-banner.png"
          width={2000}
          height={2000}
          alt="contactBannerImg"
        />
      </div>
    </section>
  );
};

export default ContactHeroBanner;
