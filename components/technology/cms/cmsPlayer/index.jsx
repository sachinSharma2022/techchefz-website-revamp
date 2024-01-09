import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const CmsPlayer = () => {
  return (
    <div className={styles.landingPlayerStyle}>
      <ImageCustom
        src="/images/cms-section.jpg"
        width={1440}
        height={650}
        alt="bannerImg"
      />
    </div>
  );
};

export default CmsPlayer;
