"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

function SitMapBanner({ props }) {
   const { theme } = useContext(MyContext);
   return (
      <section className={`${styles.siteMapBanner} ${theme ? styles.siteMapBannerDark : ""}`}>
         <TextRevel>
            <div className={cn("primary-container")}>
               <div className={styles.sitemap}>
                  <h1 className={styles.bannerHeading} dangerouslySetInnerHTML={{ __html: `${props?.title}` }}></h1>
                  <p className={styles.bannerText} dangerouslySetInnerHTML={{ __html: `${props?.subtitle}` }}></p>
               </div>
            </div>
         </TextRevel>
      </section>
   );
}

export default SitMapBanner;
