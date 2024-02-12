"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import GridMarqueeGallery from "@/components/common/gridMarqueeGallery";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const CareerBanner = ({ props }) => {
  console.log("dataaa", props);
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.landingBannerStyle} ${theme ? styles.landingBannerDark : ""
        }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: `${props[0]?.Title}` }}>

          </h1>
          <div className={styles.desc}>
            <p className={styles.leadText}>
            {props[0]?.Description}
            </p>
            <Link href="/careers-detail">
              <Button
                variant={theme ? "blueBtnDark" : "blueBtn"}
                className={styles.headerBtn}
                size="md"
              >
              {props[0]?.Button} <Icons.ArrowRight size={20} className="ms-2" />
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
