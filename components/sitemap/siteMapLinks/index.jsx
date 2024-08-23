"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import styles from "./style.module.scss";

function SiteMapLinks({ props }) {
 
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
            <Link key={index} href={data?.Links}>
              <h6 dangerouslySetInnerHTML={{ __html: `${data?.Title}` }}></h6>
            </Link>
          ))}
        </div>
        <div className={styles.sitemapContent}>
          <Link href={props?.Link2}>
            <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title2}` }}></h6>
          </Link>
          {props?.tags2?.map((data, index) => (
            <Link key={index} href={data?.Links}>
              <p dangerouslySetInnerHTML={{ __html: `${data?.Title}` }}></p>
            </Link>
          ))}
        </div>
        <div className={styles.sitemapContent}>
        <Link href={props?.Links3}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title3}` }}></h6>
          </Link>
          {props?.tags3?.map((data, index) => (
            <Link key={index} href={data?.Links}>
              <p dangerouslySetInnerHTML={{ __html: `${data?.Title}` }}></p>
            </Link>
          ))}
        </div>
        <div className={styles.sitemapContent}>
          <h6 dangerouslySetInnerHTML={{ __html: `${props?.Title4}` }}></h6>
          {props?.tags4?.map((data, index) => (
            <Link key={index} href={data?.Links}>
              <p dangerouslySetInnerHTML={{ __html: `${data?.Title}` }}></p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SiteMapLinks;
