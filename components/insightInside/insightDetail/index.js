"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const InsightDetail = ({ props, BlockTitle }) => {
  const { theme, setTheme } = useContext(MyContext);

  const iconMediaData = [
    { iconPath: <Icons.Linkedin size={25} /> },
    { iconPath: <Icons.facebookInsight /> },
    { iconPath: <Icons.twitter color="#000000" size={25} /> },
    { iconPath: <Icons.MailIcon size={25} /> },
    { iconPath: <Icons.chat /> },
  ];

  return (
    <section
      className={theme ? styles.insightDetailContainer : styles.lightMode}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.insightDetailFlex}>
          <div className={styles.socialMediaFlex}>
            {iconMediaData.map((key) => (
              <div key={key} className={styles.iconDiv}>
                <div>{key.iconPath}</div>
              </div>
            ))}
          </div>

          <div className={styles.insightDetailPara}>
            <h3> {BlockTitle?.Title}</h3>
            <p> {BlockTitle?.Description}</p>

            {BlockTitle?.Image?.data?.attributes?.url !== undefined &&
              BlockTitle?.Image?.data?.attributes?.url !== "" && (
                <div className={styles.insightImageDiv}>
                  <ImageCustom
                    src={
                      BlockTitle?.Image?.data?.attributes?.url
                        ? `${base_Uri}${BlockTitle?.Image?.data?.attributes?.url}`
                        : `${base_Uri}/`
                    }
                    width={850}
                    height={445}
                    alt="insight-img"
                  />
                </div>
              )}
            {props?.map((value, index) => (
              <div className={styles.insightSection} key={index}>
                <h3
                  className={styles.heading}
                  dangerouslySetInnerHTML={{ __html: `${value.Title}` }}
                ></h3>
                <p
                  dangerouslySetInnerHTML={{ __html: `${value.Description}` }}
                ></p>

                {value?.Image?.data?.attributes?.url !== undefined &&
                  value?.Image?.data?.attributes?.url !== "" && (
                    <div className={styles.insightImageDiv}>
                      <ImageCustom
                        src={
                          value?.Image?.data?.attributes?.url
                            ? `${base_Uri}${value?.Image?.data?.attributes?.url}`
                            : `${base_Uri}/`
                        }
                        width={690}
                        height={480}
                        alt="insight-img"
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightDetail;
