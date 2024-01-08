import ImageCaptionCard from "@/components/portfolio/imageCaptionCard";
import Innovation from "@/components/portfolio/innovation";
import LandingBanner from "@/components/portfolio/landingBanner";
import CustomDropdown from "@/components/ui/customDropdown";
import styles from "./style.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.portfolioPageStyle}>
      <LandingBanner />

      {/* Dropdown Section */}
      <section className={`${styles.dropdownStyle}`}>
        <div className={`${styles.inputDropPadding}`}>
          <CustomDropdown
            title="Services"
            options={[
              "Data",
              "It Development",
              "Network Security",
              "Cloud Service",
            ]}
          />
        </div>
        <div className={`${styles.inputDropPadding}`}>
          <CustomDropdown
            title="Industry"
            options={["Hardware", "Software", "Systems Integrator"]}
          />
        </div>
        <div className={`${styles.inputDropPadding}`}>
          <CustomDropdown
            title="Technology"
            options={[
              "Web Content",
              "Frontend",
              "Backend",
              "Mobile Development",
              "Artificial Intelligence",
              "DevOps & Cloud",
            ]}
          />
        </div>
      </section>

      <ImageCaptionCard />
      <Innovation />
    </div>
  );
};

export default Portfolio;
