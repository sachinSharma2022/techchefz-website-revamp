"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useContext, useRef } from "react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const Card = ({ ...props }) => {
  const description = useRef(null);
  const isInView = useInView(description);
  const tagSection = [
    "Web Design",
    "Dashboard Design",
    "UI",
    "UX",
    "Responsive",
  ];

  const scale = useTransform(props.progress, props.range, [
    1,
    props.targetScale,
  ]);
  console.log(scale);
  return (
    <motion.div className={styles.cardSec} style={{ scale }}>
      <div className={styles.projectImg}>
        <ImageCustom
          src={props.src}
          width={1360}
          height={300}
          alt="projectImg"
        />
      </div>

      <div className={styles.cardContentStyle}>
        <h2 className={styles.projectBrand}>
          {props.title.split(" ").map((word, index) => {
            return (
              <div key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </div>
            );
          })}
        </h2>

        <p ref={description} className={styles.brandFromText}>
          {props.summary.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.div
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className={styles.projectBtn}
        >
          {tagSection.map((tagItem) => (
            <Link key={tagItem} href="/portfolio" className={styles.badgeStyle}>
              {tagItem}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { theme, setTheme } = useContext(MyContext);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const projects = [
    {
      src: "/images/ICICI.png",
      summary:
        "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
      title: "International Motorcycle Brand.",
    },
    {
      src: "/images/project-re.png",
      summary:
        "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
      title: "International Motorcycle Brand.",
    },
    {
      src: "/images/Manipal.png",
      summary:
        "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
      title: "International Motorcycle Brand.",
    },
  ];

  return (
    <section
      className={`${styles.projectsStyle} ${
        theme ? styles.projectsStyleDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
     <TextRevel>

     
        <div className={cn("row", styles.rowSection)}>
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

            <Link href="/portfolio">
              <Button variant="outline" size="md">
                Check Our Portfolio <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
        </TextRevel>
        <div ref={container} className={styles.cards}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
