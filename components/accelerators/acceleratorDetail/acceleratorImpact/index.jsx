"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";
import Link from "next/link";

const AcceleratorImpact = ({ props }) => {
  console.log("ac", props);
  const { theme } = useContext(MyContext);
  return (
    <section className={`${styles.impact} ${theme ? styles.impactDark : ""}`}>
      <div className={cn("primary-container", styles.impactContainer)}>
        <div className="text-center text-sm-start">
          <h6
            className={cn(styles.subHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h6>
          <h3
            className={cn(styles.impactHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
          ></h3>
        </div>

        <div className={styles.impactTopSection}>
          <div className={styles.impactImage}>
            <ImageCustom
              src={
                props?.imagelinks[0]?.Image?.data?.attributes?.url
                  ? `${base_Uri}${props?.imagelinks[0]?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={1000}
              height={1000}
              alt="impact-img"
            />
          </div>
          <div className={styles.topSectionRight}>
            <h4
              dangerouslySetInnerHTML={{
                __html: `${props?.imagelinks[0].Title}`,
              }}
            ></h4>
            <ul
              dangerouslySetInnerHTML={{
                __html: `${props?.imagelinks[0].Description}`,
              }}
            ></ul>
            <a
              href={
                props?.imagelinks[0]?.Document?.data?.attributes?.url
                  ? `${base_Url}${props?.imagelinks[0]?.Document?.data?.attributes?.url}`
                  : `${base_Url}/`
              }
              target="_blank"
              download
            >
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="lg"
              >
                {props?.imagelinks[0].btn} <Icons.ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.impactTopSection}>
          <div className={styles.topSectionRight}>
            <h4
              dangerouslySetInnerHTML={{
                __html: `${props?.imagelinks[1].Title}`,
              }}
            ></h4>
            <p
              dangerouslySetInnerHTML={{
                __html: `${props?.imagelinks[1].Description}`,
              }}
            ></p>
            <a
              href={
                props?.imagelinks[1]?.Document?.data?.attributes?.url
                  ? `${base_Url}${props?.imagelinks[0]?.Document?.data?.attributes?.url}`
                  : `${base_Url}/`
              }
              target="_blank"
              download
            >
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="lg"
              >
                {props?.imagelinks[1].btn} <Icons.ArrowRight size={18} />
              </Button>
            </a>
          </div>
          <div className={styles.impactImage}>
            <ImageCustom
              src={
                props?.imagelinks[1]?.Image?.data?.attributes?.url
                  ? `${base_Uri}${props?.imagelinks[1]?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={1000}
              height={1000}
              alt="impact-img"
            />
          </div>
        </div>

        <div className={styles.impactTopSection}>
          <ImageCustom
            src={
              props?.imagelinks[2]?.Image?.data?.attributes?.url
                ? `${base_Uri}${props?.imagelinks[2]?.Image?.data?.attributes?.url}`
                : `${base_Uri}/`
            }
            width={1000}
            height={1000}
            className={styles.impactImage}
            alt="impact-img"
          />
          <div className={styles.topSectionRight}>
            <h4
              dangerouslySetInnerHTML={{
                __html: `${props?.imagelinks[2].Title}`,
              }}
            ></h4>
            <p
              dangerouslySetInnerHTML={{
                __html: `${props?.imagelinks[2].Description}`,
              }}
            ></p>
            <a
              href={
                props?.imagelinks[2]?.Document?.data?.attributes?.url
                  ? `${base_Url}${props?.imagelinks[0]?.Document?.data?.attributes?.url}`
                  : `${base_Url}/`
              }
              target="_blank"
              download
            >
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="lg"
              >
                {props?.imagelinks[2].btn} <Icons.ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorImpact;
