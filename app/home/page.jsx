import React from "react";
import LandingBanner from "@/components/home/landingBanner";
import styles from "./style.module.scss";
import LandingPlayer from "@/components/home/landingPlayer";
import WeAreFuture from "@/components/home/weAreFuture";

const HomePage = () => {
  return (
    <div>
      <section className={styles.sectionSpace}>
        <LandingBanner />
      </section>
      
      <section>
        <LandingPlayer />
      </section>

      <section className={styles.sectionSpace}>
        <WeAreFuture />
      </section>
    </div>
  );
};

export default HomePage;
