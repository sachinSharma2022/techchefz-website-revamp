import React from "react";
import LandingBanner from "@/components/home/landingBanner";
import styles from "./style.module.scss";
import LandingPlayer from "@/components/home/landingPlayer";
import WeAreFuture from "@/components/home/weAreFuture";
import Service from "@/components/home/service";

const HomePage = () => {
  return (
    <div>
      <LandingBanner />

      <section>
        <LandingPlayer />
      </section>

      <section className={styles.sectionSpace}>
        <WeAreFuture />
      </section>

      {/* <section className={styles.sectionSpace}>
        <Service />
      </section> */}
    </div>
  );
};

export default HomePage;
