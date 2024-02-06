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
      className={`${styles.solutions} ${theme ? styles.solutionsDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3">
            <h6 className={styles.solutionTitle}>{props.Title}</h6>
          </div>
          <div className="col-md-7 col-lg-8">
            <h3 className={styles.solutionHeading}>
             {props.SubTitle}
            </h3>
            <p className={styles.solutionText}>
              {props.Description}
            </p>
          </div>
        </div>

        <div className={styles.solutionImgs}>
          <div className="row justify-content-center ">
            <div className="col-md-12 col-lg-12">
              <ImageCustom
                src= {props?.gallaryImages[0].Image.data[0].attributes.url?`${base_Uri}${props?.gallaryImages[0].Image.data[0].attributes.url}`:`${base_Uri}/`}
               
                width={1060}
                height={500}
                alt="content-img"
              />
            </div>
          </div>
          <div className={styles.solutionBottomImgs}>
            <div>
              <ImageCustom
                src={props?.gallaryImages[1].Image.data[0].attributes.url?`${base_Uri}${props?.gallaryImages[1].Image.data[0].attributes.url}`:`${base_Uri}/`}
                width={500}
                height={400}
                alt="content-img"
              />
            </div>
            <div>
              <ImageCustom
                src={props?.gallaryImages[2].Image.data[0].attributes.url?`${base_Uri}${props?.gallaryImages[2].Image.data[0].attributes.url}`:`${base_Uri}/`}
                width={500}
                height={400}
                alt="content-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
