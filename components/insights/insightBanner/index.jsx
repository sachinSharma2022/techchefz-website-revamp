import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const InsightBanner = () => {
  return (
    <section className={cn(styles.landingBannerStyle)}>
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Check out our latest news,announcements, and{" "}
            <span className={styles.titleHighlight}>featured </span>articles.
          </h1>
          <div className={styles.contentRight}>
            <p className={styles.leadText}>
              We’re a worldwide presence, serving clients on four continents.
              Our international expertise ensures innovative solutions tailored
              to diverse global needs.
            </p>
            <Button variant="blueBtn" className={styles.headerBtn} size="md">
              Let’s Work Together{" "}
              <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightBanner;
