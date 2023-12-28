import ImageCaptionCard from "@/components/portfolio/imageCaptionCard";
import Innovation from "@/components/portfolio/innovation";
import LandingBanner from "@/components/portfolio/landingBanner";
import PrimaryDropdown from "@/components/ui/Primarydropdown";
import styles from "./style.module.scss";

const Portfolio = () => {
  return (
    <>
      <LandingBanner />
      <section className={`${styles.dropdownStyle}`}>
        <div className="row">
          <div className={`${styles.inputDropPadding} col-md-4`}>
            <PrimaryDropdown />
          </div>
          <div className={`${styles.inputDropPadding} col-md-4`}>
            <PrimaryDropdown />
          </div>
          <div className={`${styles.inputDropPadding} col-md-4`}>
            <PrimaryDropdown />
          </div>
        </div>
      </section>

      <ImageCaptionCard />
      <Innovation />
    </>
  );
};

export default Portfolio;
