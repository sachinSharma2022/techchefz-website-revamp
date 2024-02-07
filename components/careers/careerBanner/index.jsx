"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import GridMarqueeGallery from "@/components/common/gridMarqueeGallery";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";

const CareerBanner = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.landingBannerStyle} ${
        theme ? styles.landingBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            Join one of the most
            <span className={styles.titleHighlight}> resourceful </span>tech
            teams in India.
          </h1>
          <div className={styles.desc}>
            <p className={styles.leadText}>
              Discover your future with us. Explore opportunities, values, and
              culture. Join a dynamic and innovative team at Techchefz.
            </p>
            <Link href="/careers-detail">
              <Button variant={theme ? "blueBtnDark" : "blueBtn"} className={styles.headerBtn} size="md">
                View Openings <Icons.ArrowRight size={20} className="ms-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <GridMarqueeGallery />
    </section>
  );
};

export default CareerBanner;
