"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Solutions = ({props}) => {

  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={cn(styles.solutions, theme ? styles.solutionsDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h6 className={styles.solutionTitle}>{props.Title}</h6>
          <div>
            <h3 className={styles.solutionHeading}>
             {props.SubTitle}
            </h3>
            <p className={styles.solutionText}>
              {props.Description}
            </p>
          </div>
        </div>

        <div className={styles.solutionImages}>
          <ImageCustom
            src= {props?.gallaryImages[0].Image?.data?.attributes?.url?`${base_Uri}${props?.gallaryImages[0].Image.data?.attributes.url}`:`${base_Uri}/`}
            width={1060}
            height={500}
            alt="content-img"
            className={styles.goalInnerImage}
          />
          <ImageCustom
            src={props?.gallaryImages[1].Image.data?.attributes.url?`${base_Uri}${props?.gallaryImages[1].Image.data?.attributes.url}`:`${base_Uri}/`}
            width={500}
            height={400}
            alt="content-img"
            className={styles.goalInnerImage}
          />
          <ImageCustom
             src={props?.gallaryImages[2].Image.data?.attributes.url?`${base_Uri}${props?.gallaryImages[2].Image.data?.attributes.url}`:`${base_Uri}/`}
            width={500}
            height={400}
            alt="content-img"
            className={styles.goalInnerImage}
          />
        </div>
      </div>
    </section>
  );
}

export default Solutions;
