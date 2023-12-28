import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const Innovation = () => {
  const innovationCardMap = [
    {
      sbSubtitle: "Discover Perspectives",
      sbTitle: "Insights",
      // imgSrc: "/images/innovation-printer.png",
      width: "",
      height: "",
    },
    {
      sbSubtitle: "Join Us",
      sbTitle: "Career",
      // imgSrc: "/images/innovation-printer.png",
      width: "",
      height: "",
    },
    {
      sbSubtitle: "Lets's Work Together",
      sbTitle: "Contact Us",
      // imgSrc: "/images/innovation-printer.png",
      width: "",
      height: "",
    },
  ];
  return (
    <>
      <div className={styles.innovationSpacing}>
        <div className={styles.innovationMain}>
          <p className={styles.text}>Innovation</p>
          <h2 className={styles.title}>
            Driving Technological Advancements for the Future
          </h2>
        </div>

        <div className={`${styles.innovationCardsGrid}`}>
          {innovationCardMap.map((data, index) => (
            <div key={index} className={styles.innovationBox}>
              <p className={styles.sbSubtitle}>{data.sbSubtitle}</p>
              <h4 className={styles.sbTitle}>{data.sbTitle}</h4>
              <div className={styles.bgImage}>
                <ImageCustom
                  src={data.imgSrc}
                  width={data.width}
                  height={data.height}
                  alt="Innovation"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Innovation;
