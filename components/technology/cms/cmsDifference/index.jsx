"use client"
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";

const CmsDifference = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section className={`${styles.cmsDifferenceStyle} ${theme ? styles.cmsDifferenceDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <h6 className={cn(styles.projectHighlight,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
                </h6>
            </div>

            <div className="col-md-8 col-12">
              <h2 className={cn(styles.datingText,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}`}}>
              </h2>
            </div>
            <div className={`${styles.careerBtn} col-md-4 col-12`}>
              <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
              {props?.Button} <Icons.ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.gridNumberMain}>
          <div className={`${styles.differenceGridCards} `}>
            {props?.TechnologyInner.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.differenceCmsBox}>
                  <h2 className={styles.sbTitle}>{data?.Title}</h2>
                  <p className={styles.sbText}>{data?.Description}</p>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={data?.Image.data.attributes.url?`${base_Uri}${data?.Image.data.attributes.url}`:`${base_Uri}/`}
                      width={330}
                      height={162}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmsDifference;