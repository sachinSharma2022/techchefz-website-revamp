"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";

const Goals = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.goals} ${theme ? styles.goalsDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3">
            <h5
              className={cn(styles.goalsTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0].Title}` }}
            ></h5>
          </div>
          <div className="col-md-7 col-lg-8">
            <h3
              className={cn(styles.goalsHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props[0].SubTitle}` }}
            ></h3>
            <p
              className={styles.goalsContent}
              dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}` }}
            ></p>

            <div className={styles.goalsList}>
              {props[0].Views.map((data, index) => (
                <>
                  <div key={index} className={styles.goalsTextWrapper}>
                    <div className={styles.goalsIcons}>
                      <Icons.BikeIcon
                        className={styles.goalsIcon}
                        width={27}
                        height={16}
                      />
                    </div>
                    <p className={styles.goalsText}>{data.Title}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.goalImage}>
          <ImageCustom
            src={
              props[0]?.gallaryImages[0]?.Image?.data?.attributes?.url
                ? `${base_Uri}${props[0].gallaryImages[0].Image.data?.attributes.url}`
                : `${base_Uri}/`
            }
            width={1060}
            height={500}
            alt="content-img"
            className={styles.goalInnerImage}
          />
          {/* <ImageCustom
            src={
              props[0].gallaryImages[1].Image?.data?.attributes?.url
                ? `${base_Uri}${props[0].gallaryImages[1].Image?.data?.attributes.url}`
                : `${base_Uri}/`
            }
            width={500}
            height={400}
            alt="content-img"
            className={styles.goalInnerImage}
          />
          <ImageCustom
            src={
              props[0].gallaryImages[2].Image?.data?.attributes?.url
                ? `${base_Uri}${props[0].gallaryImages[2].Image.data.attributes.url}`
                : `${base_Uri}/`
            }
            width={500}
            height={400}
            alt="content-img"
            className={styles.goalInnerImage}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Goals;
