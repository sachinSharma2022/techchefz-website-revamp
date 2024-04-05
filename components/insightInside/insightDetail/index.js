"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";
import { rootURl } from "@/lib/constants";
import Link from "next/link";

const InsightDetail = ({ props, BlockTitle, index }) => {
  const { theme, setTheme } = useContext(MyContext);
  const url = `${rootURl}/insights/${index}`;
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
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
              target="_blank"
            >
              <div className={styles.iconDiv}>
                <div>
                  <Icons.Linkedin size={28} />
                </div>
              </div>
            </Link>
            <Link
              href={`https://www.facebook.com/share.php?u=${url}`}
              target="_blank"
            >
              <div className={styles.iconDiv}>
                <div>
                  <Icons.facebookInsight size={25} />
                </div>
              </div>
            </Link>
            <Link
              href={`http://twitter.com/share?&url=${url}&text=${encodeURIComponent(
                "Hey, I found this article"
              )}`}
              target="_blank"
            >
              <div className={styles.iconDiv}>
                <div>
                  <Icons.twitter color="#000000" size={21} />
                </div>
              </div>
            </Link>

            <Link
              href={`mailto:?subject=I wanted you to see this site&amp;body=Check out this site ${url}`}
              target="_blank"
              title="Share by Email"
            >
              <div className={styles.iconDiv}>
                <div>
                  <Icons.MailIcon size={24} />
                </div>
              </div>
            </Link>
            <div
              className={styles.iconDiv}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <div>
                <Icons.chat size={24} />
              </div>
            </div>
          </div>

          <div className={styles.insightDetailPara}>
            <h3> {BlockTitle?.Title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: `${BlockTitle?.Description}`,
              }}
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
