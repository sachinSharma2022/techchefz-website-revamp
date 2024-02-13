"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

function SiteMapLinks({props}) {
  console.log("sm",props);
  const { theme } = useContext(MyContext);
  return (
    <section
      className={`${styles.sitemapPages} ${
        theme ? styles.sitemapPagesDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.sitemapPage}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[0].Title}`}}></h6>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[1].Title}`}}></h6>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[2].Title}`}}></h6>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[3].Title}`}}></h6>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[4].Title}`}}></h6>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[5].Title}`}}></h6>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.tags1[6].Title}`}}></h6>
        </div>
        <div className={styles.sitemapContent}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title2}`}}></h6>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags2[0].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags2[1].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags2[2].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags2[3].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags2[4].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags2[5].Title}`}}></p>
        </div>
        <div className={styles.sitemapContent}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title3}`}}></h6>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags3[0].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags3[1].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags3[2].Title}`}}></p>
          <p dangerouslySetInnerHTML={{ __html: `${props?.tags3[3].Title}`}}></p>
        </div>
      </div>
    </section>
  );
}

export default SiteMapLinks;
