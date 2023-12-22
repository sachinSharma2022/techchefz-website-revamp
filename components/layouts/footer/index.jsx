import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="row">
        <div className="col-md-5">
          <div className={styles.footlogo}>
            <ImageCustom src="/images/logo-white.svg" width={143} height={48} alt="" />
          </div>
          <p>Stay at the forefront of innovation, trends, and industry insights by subscribing to our newsletter. </p>
        </div>
        <div className="col-md-7"></div>
      </div>
    </footer>
  );
};

export default Footer;
