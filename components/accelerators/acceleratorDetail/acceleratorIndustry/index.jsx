"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { useContext } from "react";
import styles from "./style.module.scss";

const AcceleratorIndustry = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <section
      className={`${styles.industry} ${theme ? styles.industryDark : ""} `}
    >
      <div className="primary-container">
        <div className={styles.gridSection}>
          <div className={styles.industryLeft}>
            <div className="mb-4">
              <h6>{props?.Title}</h6>
              <h4 className={styles.heading}>{props?.SubTitle}</h4>
            </div>
            <h6>{props?.Description}</h6>
          </div>
          <div>
            <div className={styles.industryRight}>
              <h3
                className={styles.industryHeading}          
              
              > {props?.DescriptionInner[0].Title}</h3>
              <p
                className={styles.industryText}
               
              >{props?.DescriptionInner[0].Description}</p>
              {/* <Link href={props?.DescriptionInner[0].BtnLink}>
                <Button
                  variant={theme ? "lightBlueOutline" : "outline"}
                  className="info"
                  size="md"
                >
                  {props?.DescriptionInner[0].Btn}{" "}
                  <Icons.ArrowRight size={18} />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
        {props?.Image?.data?.attributes?.url !== undefined &&
        props?.Image?.data?.attributes?.url !== "" && (
        <div className={styles.industryImg}>
          <ImageCustom
            src={
              props?.Image?.data?.attributes?.url
                ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
                : `${base_Uri}/`
            }
            width={2560}
            height={1068}
            alt = {props?.Image?.data?.attributes?.alternativeText}
          />
        </div>
        )}
      </div>
    </section>
  );
};

export default AcceleratorIndustry;
