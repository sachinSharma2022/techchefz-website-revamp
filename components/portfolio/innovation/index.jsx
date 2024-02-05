"use client";

import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext } from "react";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";

const Innovation = ({props}) => {
  const { theme, setTheme } = useContext(MyContext);

  // const innovationCardMap = [
  //   {
  //     link: "/insights",
  //     sbSubtitle: "Discover Perspectives",
  //     sbTitle: "Insights",
  //     imgSrc: "/images/innovation-printer.png",
  //   },
  //   {
  //     link: "/careers",
  //     sbSubtitle: "Join Us",
  //     sbTitle: "Career",
  //     imgSrc: "/images/career-hand.png",
  //     width: "",
  //     height: "",
  //   },
  //   {
  //     link: "/contact-us",
  //     sbSubtitle: "Lets's Work Together",
  //     sbTitle: "Contact Us",
  //     imgSrc: "/images/contact-us.png",
  //     width: "",
  //     height: "",
  //   },
  // ];
  return (
    <section className={!theme ? styles.innovationSpacing : styles.darkMode}>
      <div className={cn("primary-container")}>
        <div className={styles.innovationMain}>
          <p className={styles.text}>{props?.Title}</p>
          <h3 className={styles.title}>
          {props?.SubTitle}
          </h3>
        </div>

        <div className={`${styles.innovationCardsGrid}`}>
          {props?.Views?.map((data, index) => (
            <Link key={index} href={data?.ButtonLink} className={styles.innovationBox}>
              <div className={styles.textCardSpace}>
                <p className={styles.sbSubtitle}>{data?.Title}</p>
                <h4 className={styles.sbTitle}>{data?.Description}</h4>
              </div>
              <div className={styles.bgImage}>
                <ImageCustom
                  src={`${base_Uri}${data?.Image?.data.attributes.url}`}
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
