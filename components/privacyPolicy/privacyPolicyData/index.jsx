"use client";

import { cn } from "@/lib/utils";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";

const PrivacyPolicyData = ({props}) => {
  console.log("pp",props);
  const { theme } = useContext(MyContext);
  return (
    <section
      className={`${styles.privacyPolicyData} ${
        theme ? styles.privacyPolicyDataBannerDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
      {props?.map((data, index) => (
        <div className={styles.policyDivide}>
          <h4 className={cn(styles.title, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${data?.Title}`}}></h4>
          <p className={styles.leadText} dangerouslySetInnerHTML={{ __html: `${data?.FullDescription}`}}>
          
          </p>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicyData;
