import React from "react";
import styles from "./style.module.scss";

const LandingPlayer = () => {
  return (
    <div className={styles.landingPlayerStyle}>
      <video className={styles.playerBox} width="100%" height="500" controls>
        <source src="global.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LandingPlayer;
