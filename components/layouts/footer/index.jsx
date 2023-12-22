import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import Link from "next/link";
import { Icons } from "@/components/icons";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="row">
        <div className="col-md-5">
          <div className={styles.footLeftPanel}>
            <div className={styles.footlogo}>
              <ImageCustom
                src="/images/logo-white.svg"
                width={143}
                height={48}
                alt=""
              />
            </div>
            <p>
              Stay at the forefront of innovation, trends, and industry insights
              by subscribing to our newsletter.
            </p>

            <div className={styles.partenerCard}>
              <div className={styles.partnerCols}>
                <Link href="/">Become our Partner </Link>
                <p>Join our partnership network now!</p>
              </div>
              <ImageCustom src="/images/partner.jpg" width={294} height={198} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-7"></div>
      </div>
    </footer>
  );
};

export default Footer;
