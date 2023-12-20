import LandingBanner from "@/components/home/landingBanner";
import LandingPlayer from "@/components/home/landingPlayer";
import WeAreFuture from "@/components/home/weAreFuture";

import styles from "./style.module.scss";

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
