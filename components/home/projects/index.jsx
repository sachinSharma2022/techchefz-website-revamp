"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import styles from "./style.module.scss";

const Projects = () => {
  const { theme, setTheme } = useContext(MyContext);

  const tagSection = [
    "Web Design",
    "Dashboard Design",
    "UI",
    "UX",
    "Responsive",
  ];
  return (
    <section
      className={`${styles.projectsStyle} ${
        theme ? styles.projectsStyleDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className="row">
          <div className="col-md-12 col-12">
            <p className={styles.projectHighlight}>Projects</p>
          </div>
          <div className="col-md-5 col-12">
            <h3 className={styles.datingText}>
              Unveiling Spotlight on Select Case Studies.
            </h3>
          </div>
          <div className="col-md-7 col-12">
            <p className={styles.aboutText}>
              Delve into our case studies to witness firsthand how we&apos;ve
              tackled challenges, delivered solutions, and achieved measurable
              success. Each story is a testament to our commitment, expertise,
              and the transformative impact.
            </p>

            <Button variant="outline" size="md">
              Check Our Portfolio <Icons.ArrowRight size={18} />
            </Button>
          </div>

          <div className={styles.cardSec}>
            <div className={styles.projectImg}>
              <ImageCustom
                src="/images/project-re.png"
                width={1360}
                height={300}
                alt="projectImg"
              />
            </div>

            <div className={styles.cardContentStyle}>
              <h4 className={styles.projectBrand}>
                International Motorcycle Brand.
              </h4>

              <p className={styles.brandFromText}>
                Royal Enfield is a global brand since 1901, has a geographical
                presence in over 70 countries. The brand delivers consistent,
                omnichannel customer experiences, achieves scalability,
                diversifying into countries, and continents.
              </p>
              <div className={styles.projectButton}>
                {tagSection.map((item, index) => (
                  <Button key={index} variant="outline" size="xs">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
