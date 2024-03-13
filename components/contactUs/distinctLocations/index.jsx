"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import { base_Uri } from "@/lib/constants";
import TextRevel from "@/components/ui/sectionAnimation";

const DistinctLocations = ({ props }) => {
  console.log("us", props);
  const { theme, setTheme } = useContext(MyContext);

  return (
    <section
      className={`${styles.distinctLocationsStyle} ${
        theme ? styles.distinctLocationsBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.careerRow}>
            <h6
              className={cn(styles.projectHighlight, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h2
              className={cn(styles.datingText, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h2>
            <p
              className={styles.descriptionText}
              dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
            ></p>
          </div>
        </TextRevel>
        <div className={styles.gridNumberMain}>
          <div className={`${styles.locationGridCards} `}>
            {props?.slider?.map((data, index) => (
              <div key={index} className={styles.cardStyle}>
                <div className={styles.locationBox}>
                  <div className={styles.backgroundImg}>
                    <ImageCustom
                      src={
                        data?.brandImg?.data?.attributes?.url
                          ? `${base_Uri}${data?.brandImg?.data?.attributes?.url}`
                          : `${base_Uri}/`
                      }
                      width={330}
                      height={162}
                      alt="image"
                    />
                  </div>
                  <div className={styles.countryFlag}>
                    <h2 className={styles.sbTitle}>{data.Title}</h2>
                    <div className={styles.flag}>
                      <ImageCustom
                        src={
                          data?.countryFlagImg?.data?.attributes?.url
                            ? `${base_Uri}${data?.countryFlagImg?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={100}
                        height={24}
                        alt="flag"
                      />
                    </div>
                  </div>
                  <p className={styles.sbText}>{data.SubTitle}</p>
                  <div className={styles.addressArea}>
                    <Icons.ContactLocation width={20} height={20} />
                    <p className={styles.addressText}>{data.location}</p>
                  </div>

                  <div className={styles.addressArea}>
                    <Icons.ContactPhone width={20} height={20} />
                    <p className={styles.addressText}>{data.phoneNumber}</p>
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

export default DistinctLocations;
