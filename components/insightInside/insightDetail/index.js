"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const InsightDetail = ({ props, BlockTitle, index }) => {
  const { theme, setTheme } = useContext(MyContext);

  const url = `http://localhost:3000/insights/${index}`;

  // const iconMediaData = [
  //   { iconPath: <Icons.Linkedin size={30} /> },
  //   { iconPath: <Icons.facebookInsight size={30} /> },
  //   { iconPath: <Icons.twitter color="#000000" size={26} /> },
  //   { iconPath: <Icons.MailIcon size={27} /> },
  //   { iconPath: <Icons.chat size={27} /> },
  // ];
  const handleClick = (event) => {
    navigator.clipboard.writeText(url);
  };
  return (
    <section
      className={theme ? styles.insightDetailContainer : styles.lightMode}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.insightDetailFlex}>
          <div className={styles.socialMediaFlex}>
            <div className={styles.iconDiv}>
              <div>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                >
                  <Icons.Linkedin size={30} />
                </a>
              </div>
            </div>
            <div className={styles.iconDiv}>
              <div>
                <a href={`https://www.facebook.com/share.php?u=${url}`}>
                  <Icons.facebookInsight size={30} />
                </a>
              </div>
            </div>
            <div className={styles.iconDiv}>
              <div>
                <a
                  href={`http://twitter.com/share?&url=${url}&text=${encodeURIComponent(
                    "Hey, I found this article"
                  )}`}
                >
                  <Icons.twitter color="#000000" size={26} />
                </a>
              </div>
            </div>
            <div className={styles.iconDiv}>
              <div>
                <a
                  href={`mailto:?subject=I wanted you to see this site&amp;body=Check out this site ${url}`}
                  title="Share by Email"
                >
                  <Icons.MailIcon size={27} />
                </a>
              </div>
            </div>
            <div
              className={styles.iconDiv}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <div>
                <Icons.chat size={27} />
              </div>
            </div>
          </div>

          <div className={styles.insightDetailPara}>
            <h3> {BlockTitle?.Title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: `${BlockTitle?.Description}` }}
            ></p>

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
                  className={styles.linkTag}
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
