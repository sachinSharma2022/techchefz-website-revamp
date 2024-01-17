import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import Link from "next/link";

const TechnologyBanner = () => {
  return (
    <section className={`${styles.landingBannerStyle}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <h1 className={styles.title}>
          Innovating
          <span className={styles.titleHighlight}> Technology</span> <br />
          <span className={styles.titleHighlight}>Landscape</span> for the
          <br />
          future.
        </h1>
        <div className={styles.contentSec}>
          <p className={styles.leadText}>
            We&apos;re a worldwide presence, serving clients on four continents.
            Our international expertise ensures innovative solutions tailored to
            diverse global needs.
          </p>
          <Link href="/contact-us">
            <Button variant="blueBtn" className={styles.headerBtn} size="md">
              Let’s Work Together{" "}
              <Icons.ArrowRight size={20} className="ms-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyBanner;
