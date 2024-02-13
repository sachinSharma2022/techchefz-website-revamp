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
  // const differenceCard = [
  //   {
  //     sbTitle: "Headless CMS",
  //     sbText:
  //       "Seamlessly manage content and presentation in one unified platform, providing stability and ease-of-use.",
  //     brandImg:
  //       "https://images.unsplash.com/photo-1600673736081-50451fd6e9eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     sbTitle: "Traditional CMS",
  //     sbText:
  //       "Seamlessly manage content and presentation in one unified platform, providing stability and ease-of-use.",
  //     brandImg:
  //       "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     sbTitle: "Advanced CMS",
  //     sbText:
  //       "Seamlessly manage content and presentation in one unified platform, providing stability and ease-of-use.",
  //     brandImg:
  //       "https://images.unsplash.com/photo-1518563077661-23ad56581d77?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];

  return (
    <section className={`${styles.cmsDifferenceStyle} ${theme ? styles.cmsDifferenceDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div className="row">
            <div className="col-md-12 col-12">
              <p className={cn(styles.ProjectHighlight,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}>
                </p>
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