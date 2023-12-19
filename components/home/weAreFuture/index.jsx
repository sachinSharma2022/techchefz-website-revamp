import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const WeAreFuture = () => {
  return (
    <>
      <div className={styles.futureTitle}>
        <p className={styles.text}>We are a</p>
        <h2 className={styles.title}>
          Pioneering <br /> Future{" "}
          <ImageCustom src="vercel.svg" width="60" height="60" alt="" /> Global{" "}
          <br />
          <span className={styles.titleHighlight}>Technology Company.</span>
        </h2>
      </div>
    </>
  );
};

export default WeAreFuture;
