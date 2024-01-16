import ImageCaptionCard from "@/components/portfolio/imageCaptionCard";
import Innovation from "@/components/portfolio/innovation";
import LandingBanner from "@/components/portfolio/landingBanner";
import styles from "./style.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.portfolioPageStyle}>
      <LandingBanner />
      <ImageCaptionCard />
      <Innovation />
    </div>
  );
};

export default Portfolio;
