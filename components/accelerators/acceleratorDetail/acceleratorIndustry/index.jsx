"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import Link from "next/link";

const AcceleratorIndustry = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.industry} ${theme ? styles.industryDark : ""} `}
    >
      <div className="primary-container">
        <div className={styles.gridSection}>
          <div className={styles.industryLeft}>
            <div className="mb-4">
              <h6>{props?.Title}</h6>
              <h4 className={styles.heading}>{props?.SubTitle}</h4>
            </div>

            <h6>{props?.Description}</h6>
            <div className={styles.serviceBtn}>
              <button variant="outline" size="xs">
                {props?.DescriptionInner[0].Tags}
              </button>
            </div>
          </div>
          <div>
            <div className={styles.industryRight}>
              <h3
                className={styles.industryHeading}
                dangerouslySetInnerHTML={{
                  __html: `${props?.DescriptionInner[0].Title}`,
                }}
              ></h3>
              <p
                className={styles.industryText}
                dangerouslySetInnerHTML={{
                  __html: `${props?.DescriptionInner[0].Description}`,
                }}
              ></p>
              <Link href={props?.DescriptionInner[0].BtnLink}>
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  className="info"
                  size="md"
                >
                  {props?.DescriptionInner[0].Btn}{" "}
                  <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.industryImg}>
          <ImageCustom
            src={
              props?.Image?.data?.attributes?.url
                ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                : `${base_Uri}/`
            }
            width={2560}
            height={1068}
            alt="website-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AcceleratorIndustry;
