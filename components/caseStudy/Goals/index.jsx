"use client";
import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import styles from "./style.module.scss";

const Goals = ({props}) => {

  const { theme, setTheme } = useContext(MyContext);
  // const listData = [
  //   {
  //     content:
  //       "Create a user-friendly mobile application for storing and monitoring test results, planning visits to medical specialists on the calendar, as well as saving recommendations and doctor’s prescriptions;",
  //   },
  //   {
  //     content:
  //       "Create a user-friendly mobile application for storing and monitoring test results, planning visits to medical specialists on the calendar, as well as saving recommendations and doctor’s prescriptions;",
  //   },
  //   {
  //     content:
  //       "Optimize the first release of the project by launching the MVP in the shortest possible time;",
  //   },
  // ];
  return (
    <section className={`${styles.goals} ${theme ? styles.goalsDark : ""}`}>
      <div className={cn("primary-container")}>
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3">
            <h5 className={styles.goalsTitle}>{props[0].Title}</h5>
          </div>
          <div className="col-md-7 col-lg-8">
            <h3 className={styles.goalsHeading}>
              {props[0].SubTitle}
            </h3>
            <p className={styles.goalsContent} dangerouslySetInnerHTML={{ __html: `${props[0]?.Description}` }}>
              
            </p>
            {/* <p className={styles.goalsContent}>
              This is why the client’s web service should have been checked for
              vulnerabilities that may lead to user data losses, confidentiality
              violations, breach of confidentiality, or unauthorized access to
              the system.
            </p> */}

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
          <div className="row justify-content-center ">
            <div className="col-md-12 col-lg12">
              <ImageCustom
                src={props[0].gallaryImages[0].Image.data[0].attributes.url?`${base_Uri}${props[0].gallaryImages[0].Image.data[0].attributes.url}`:`${base_Uri}/`}
                
                width={1060}
                height={500}
                alt="content-img"
              />
            </div>
          </div>
          <div className={styles.goalsBottomImg}>
            <div>
              <ImageCustom
                src={props[0].gallaryImages[1].Image.data[0].attributes.url?`${base_Uri}${props[0].gallaryImages[1].Image.data[0].attributes.url}`:`${base_Uri}/`}
                
                width={500}
                height={400}
                alt="content-img"
              />
            </div>
            <div>
              <ImageCustom
                src={props[0].gallaryImages[2].Image.data[0].attributes.url?`${base_Uri}${props[0].gallaryImages[2].Image.data[0].attributes.url}`:`${base_Uri}/`}
               
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
};

export default Goals;
