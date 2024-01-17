import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const GlobalPresence = () => {
  return (
    <section className={styles.globalPresenceStyle}>
      <div className={styles.globalStackBox}>
        <div className={styles.globalRow}>
          <h2 className={styles.globalHeading}>Global Presence</h2>

          <p className={styles.globalText}>
            We have a presence in three strategic locations around the world to
            better serve our customers.
          </p>
        </div>
        <div className={styles.contactMap}>
          <ImageCustom
            src="/images/Group 1000002166.png"
            width={1200}
            height={466}
            alt=""
          />
        </div>
        {/* <div className={styles.locationPopoverCard}>
        <div className={styles.popoverMapIcon}>
          <ImageCustom
            src="/images/united-state-flag.png"
            width={40}
            height={26}
            alt=""
          />
        </div>
          <h1 className={styles.locationHeading}>United States</h1>
          <p className={styles.locationAreaText}>100 Smith Street Collingwood VIC 3066 AU</p>
        </div> */}
      </div>
    </section>
  );
};

export default GlobalPresence;
