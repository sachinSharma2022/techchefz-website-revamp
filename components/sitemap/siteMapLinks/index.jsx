"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import Link from "next/link";
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
        {props?.tags1?.map((data, index) => (
        <Link href= {data?.Links}>
          <h6 dangerouslySetInnerHTML={{ __html: `${data?.Title}`}}></h6>
        </Link>
         ))}
         
        </div>
        <div className={styles.sitemapContent}>
        <Link href= {props?.Link2}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title2}`}}></h6></Link>
          {props?.tags2?.map((data, index) => (
          <Link href= {data?.Links}>
          <p dangerouslySetInnerHTML={{ __html: `${data?.Title}`}}></p></Link>
           ))}
        </div>
        <div className={styles.sitemapContent}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title3}`}}></h6>
          {props?.tags3?.map((data, index) => (
          <Link href= {data?.Links}>
          <p dangerouslySetInnerHTML={{ __html: `${data?.Title}`}}></p></Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SiteMapLinks;
