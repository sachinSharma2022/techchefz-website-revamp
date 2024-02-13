"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { base_Uri } from "@/lib/constants";

const FounderDesk = ({ props }) => {
  const { theme } = useContext(MyContext);

  return (
    <section
      className={cn(styles.founderDesk, theme ? styles.founderDeskDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h6
            className={cn(styles.subHeading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
          ></h6>
          <h3
            className={cn(styles.heading, "gradient-text")}
            dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
          ></h3>
        </div>

        <div className={styles.contentSec}>
          <div className={styles.teamCards}>
            <div className={styles.teamCardBg}>
              <div className={styles.cardHead}>
                <div>
                  <h6
                    dangerouslySetInnerHTML={{ __html: `${props?.name}` }}
                  ></h6>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `${props?.Designation}`,
                    }}
                  ></p>
                </div>
              </div>
              <Link
                className={styles.linkedInIcon}
                href={props.link}
                target="_blank"
              >
                <Icons.Linkedin width={34} height={34} />
              </Link>
              <div className={styles.teamImg}>
                <ImageCustom
                  src={
                    props?.ProfileImage?.data?.attributes?.url
                      ? `${base_Uri}${props?.ProfileImage?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={240}
                  height={320}
                  alt="team-member"
                />
              </div>
            </div>
          </div>

          <div className={styles.paraSection}>
            <div className={styles.textWrapper}>
              <p
                dangerouslySetInnerHTML={{ __html: `${props?.Description}` }}
              ></p>
            </div>
            <div className={styles.buttonSection}>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDesk;
