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
import { base_Uri } from "@/lib/constants";

const Card = ({ ...props }) => {
  const description = useRef(null);
  const isInView = useInView(description);
  // const tagSection = [
  //   "Web Design",
  //   "Dashboard Design",
  //   "UI",
  //   "UX",
  //   "Responsive",
  // ];

  const scale = useTransform(props.progress, props.range, [
    1,
    props.targetScale,
  ]);
  console.log("pro",props)
  return (
    <motion.div className={styles.cardSec} style={{ scale }}>
      <div className={styles.projectImg}>
        <ImageCustom
          src={props?.project?.Image?.data?.attributes?.url?`${base_Uri}${props?.project?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
          width={1360}
          height={300}
          alt="projectImg"
        />
      </div>

      <div className={styles.cardContentStyle}>
        <h3 className={styles.projectBrand}>
          {props?.project?.Title.split(" ").map((word, index) => {
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
        </h3>

        <p ref={description} className={styles.brandFromText}>
          {props?.project?.Description.split(" ").map((word, index) => {
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
          {props?.project?.Tag.map((tagItem) => (
            <Link key={tagItem} href="/portfolio" className={styles.badgeStyle}>
              {tagItem.Title}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = ({project,brands}) => {
  const { theme, setTheme } = useContext(MyContext);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  console.log(brands,"brands")
  // const projects = [
  //   {
  //     src: "/images/ICICI.png",
  //     summary:
  //       "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
  //     title: "International Motorcycle Brand.",
  //   },
  //   {
  //     src: "/images/project-re.png",
  //     summary:
  //       "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
  //     title: "International Motorcycle Brand.",
  //   },
  //   {
  //     src: "/images/Manipal.png",
  //     summary:
  //       "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
  //     title: "International Motorcycle Brand.",
  //   },
  // ];


  return (
    <section
      className={`${styles.projectsStyle} ${
        theme ? styles.projectsStyleDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={cn("row", styles.rowSection)}>
          <div className="col-md-12 col-12">
            <p className={styles.projectHighlight}>{project[0]?.Title}</p>
          </div>
          <div className="col-md-5 col-12">
            <h3 className={styles.datingText}>
              {project[0]?.SubTitle}
            </h3>
          </div>
          <div className="col-md-7 col-12">
            <p className={styles.aboutText}>
            {project[0]?.Description}
            </p>

            <Link href="/portfolio">
              <Button variant="outline" size="md">
                Check Our Portfolio <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
        <div ref={container} className={styles.cards}>
          {brands.map((project, i) => {
            const targetScale = 1 - (brands.length - i) * 0.05;
            console.log(project,"projects")
            return (
              <Card
                key={`p_${i}`}
                i={i}
                project={project}
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
