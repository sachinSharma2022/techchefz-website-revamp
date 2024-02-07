"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

const Industry = ({props, CMSImplementation, Industryinner}) => {

  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.industry} ${theme ? styles.industryDark : ""}`}
    >
      <div className={cn("primary-container")}>
        <div className="row justify-content-between">
          <div className="col-md-4 col-lg-4">
         
            <div className={styles.industryLeft}>
              <div className="mb-4">
                <h6>{props[0].Title}</h6>
                <h5>{props[0].Description}</h5>
              </div>
              <div className="mb-4">
                <h6> {props[0].SubTitle}</h6>
                <h5>{props[0].Description2}</h5>
              </div>
          
              <h6> {Industryinner[0].Title}</h6>
              <div className={styles.serviceBtn}>
              {Industryinner[0]?.techStacktags?.map((data, index) => (
              
                <button variant="outline" size="xs">
                  {data?.Title}
                </button>
                
              
              ))}
              </div>
            </div>
          
          </div>
          <div className="col-md-7 col-lg-7">
            <div className={styles.industryRight}>
              <h3 className={styles.industryHeading}>
                {CMSImplementation[0].Title}
              </h3>
              <p className={styles.industryText}>
                {CMSImplementation[0].Description}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.industryImg}>
          <ImageCustom
            src={`${base_Uri}${CMSImplementation[0]?.Image.data.attributes.url}`}
            width={1300}
            height={500}
            alt="website-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Industry;
