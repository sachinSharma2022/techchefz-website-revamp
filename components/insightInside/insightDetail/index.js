"use client";

import React, { useContext } from "react";
import styles from "./style.module.scss";
import { MyContext } from "@/context/theme";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";

const InsightDetail = () => {
  const { theme, setTheme } = useContext(MyContext);

  const iconMediakData = [
    { iconPath: <Icons.Linkedin /> },
    { iconPath: <Icons.facebook color="#1877F2"/> },
    { naiconPathme: <Icons.twitter /> },
    { iconPath: <Icons.MailIcon /> },
    { iconPath: <Icons.chat /> },
  ];
  return (
    <>
      <div className={theme ? styles.insightDetailContainer : styles.lightMode}>
        <div className={styles.insightDetailFlex}>
          <div className={styles.socialMediaFlex}>
            {iconMediakData.map((key) => (
              <>
                <div className={styles.iconDiv}>
                {key.iconPath}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightDetail;
