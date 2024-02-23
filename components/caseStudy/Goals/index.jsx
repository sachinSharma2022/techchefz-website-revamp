"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";
import { base_Url } from "@/lib/constants";

const Goals = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section className={`${styles.goals} ${theme ? styles.goalsDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h5
            className={cn(styles.goalsTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props[0].Title}` }}
          ></h5>
          <div>
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
                      <ImageCustom
                        src={
                          data?.Image?.data?.attributes?.url
                            ? `${base_Url}${data?.Image?.data?.attributes?.url}`
                            : `${base_Url}/`
                        }
                        width={40}
                        height={28}
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
        </div>
      </div>
    </section>
  );
};

export default Goals;
