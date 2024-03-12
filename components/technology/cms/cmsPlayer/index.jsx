import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import { base_Uri } from "@/lib/constants";


const CmsPlayer = ({ props }) => {
  console.log("cms", props);
  return (
    <ImageCustom
      src={
        props?.Image?.data?.attributes?.url
          ? `${base_Uri}${props?.Image?.data?.attributes?.url}`
          : `${base_Uri}/`
      }
      width={2560}
      height={1068}
      alt="bannerImg"
      className={styles.landingPlayerStyle}
    />
  );
};

export default CmsPlayer;
