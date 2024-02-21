"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import MobileSlider from "@/components/common/mobileSlider";
import { useMediaQuery } from "react-responsive";
import { base_Url } from "@/lib/constants";
import { ImageCustom } from "@/components/ui/imageCustom";

import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Results = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section className={cn(styles.results, theme ? styles.resultsDark : "")}>
      <div className={cn("primary-container")}>
        <div className={styles.contentSection}>
          <h6
            className={cn(styles.resultTitle, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props.Title}` }}
          ></h6>
          <div>
            <h3
              className={cn(styles.resultHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
            <p
              className={styles.resultText}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>

            <div className={styles.goalsList}>
              {props.Viewcard.map((data, index) => (
                <>
                  <div key={index} className={styles.goalsTextWrapper}>
                    <div className={styles.goalsIcons}>
                      <ImageCustom
                        src={
                          data?.image?.data?.attributes?.url
                            ? `${base_Url}${data?.image?.data?.attributes?.url}`
                            : `${base_Url}/`
                        }
                        width={27}
                        height={16}
                      />
                    </div>
                    <p className={styles.goalsText}>{data.title}</p>
                  </div>
                </>
              ))}
            </div>

            {!isMobileScreen && (
              <div className={styles.resultCards}>
                {props.ITSolutionsCards.map((data, index) => (
                  <div key={index} className={styles.resultCard}>
                    <h3>{data.Title} </h3>
                    <h4>{data.Description} </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobileScreen && (
        <div className={styles.mobileSliderCard}>
          <div className={styles.resultCards}>
            <MobileSlider slidesToShow={1.3}>
              {props.ITSolutionsCards.map((data, index) => (
                <div key={index} className={styles.resultCard}>
                  <h3>{data.Title} </h3>
                  <h4>{data.Description} </h4>
                </div>
              ))}
            </MobileSlider>
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
