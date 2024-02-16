"use client";

import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
import { base_Url } from "@/lib/constants";

const Innovation = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);

  
  return (
    <section className={!theme ? styles.innovationSpacing : styles.darkMode}>
      <div className={cn("primary-container")}>
        <div className={styles.innovationMain}>
          <p
            className={cn(styles.text, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></p>
          <h3
            className={cn(styles.title, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
          ></h3>
        </div>

        <div className={`${styles.innovationCardsGrid}`}>
          {props?.Views?.map((data, index) => (
            <Link
              key={index}
              href={data?.ButtonLink}
              className={styles.innovationBox}
            >
              <div className={styles.textCardSpace}>
                <p
                  className={cn(styles.sbSubtitle, "gradient-text")}
                  dangerouslySetInnerHTML={{ __html: `${data?.Title}` }}
                ></p>
                <h4
                  className={cn(styles.sbTitle, "gradient-text")}
                  dangerouslySetInnerHTML={{ __html: `${data?.Description}` }}
                ></h4>
              </div>
              <div className={styles.bgImage}>
                <ImageCustom
                  src={
                    data?.Image?.data?.attributes?.url
                      ? `${base_Url}${data?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
                  }
                  width="500"
                  height="500"
                  alt="Innovation"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
