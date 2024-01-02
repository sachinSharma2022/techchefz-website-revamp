import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const Innovation = () => {
  const innovationCardMap = [
    {
      sbSubtitle: "Discover Perspectives",
      sbTitle: "Insights",
      imgSrc: "/images/innovation-printer.png",
    },
    {
      sbSubtitle: "Join Us",
      sbTitle: "Career",
      imgSrc: "/images/career-hand.png",
      width: "",
      height: "",
    },
    {
      sbSubtitle: "Lets's Work Together",
      sbTitle: "Contact Us",
      imgSrc: "/images/contact-us.png",
      width: "",
      height: "",
    },
  ];
  return (
    <section className={styles.innovationSpacing}>
      <div className={styles.innovationMain}>
        <p className={styles.text}>Innovation</p>
        <h2 className={styles.title}>
          Driving Technological Advancements for the Future
        </h2>
      </div>

      <div className={`${styles.innovationCardsGrid}`}>
        {innovationCardMap.map((data, index) => (
          <div key={index} className={styles.innovationBox}>
            <div className={styles.textCardSpace}>
              <p className={styles.sbSubtitle}>{data.sbSubtitle}</p>
              <h4 className={styles.sbTitle}>{data.sbTitle}</h4>
            </div>
            <div className={styles.bgImage}>
              <ImageCustom
                src={data.imgSrc}
                width="500"
                height="500"
                alt="Innovation"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Innovation;
