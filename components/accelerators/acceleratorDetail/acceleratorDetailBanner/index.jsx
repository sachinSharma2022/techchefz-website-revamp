"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import Link from "next/link";

const DetailBanner = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <>
    <section className={`${styles.banner} ${theme ? styles.bannerDark : ""} header-container`}>
      <div className="primary-container">
        <div className={cn(styles.bannerContent, "grid-col-2")}>
          <h1
            className={cn(styles.bannerTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h1>
          <div className={styles.bannerRight}>
            <p
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>
            <a target="_blank" href={props?.BtnLink} rel="noopener noreferrer">
              <Button
                variant={theme ? "blueBtnDark" : "blueBtn"}
                className={styles.headerBtn}
                size="md"
              >
                {props?.Btn} <Icons.ArrowRight size={20} className="ms-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    {props?.Image?.data?.attributes?.url !== undefined &&
      props?.Image?.data?.attributes?.url !== "" && (
        <div className={styles.imgBox}>
          <ImageCustom
            src={
              props?.Image?.data?.attributes?.url
                ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                : `${base_Uri}/`
            }
            width={1500}
            height={1500}
            alt={props?.Image?.data?.attributes?.alternativeText}
          />
        </div>
      )}
      </>
  );
};

export default DetailBanner;
