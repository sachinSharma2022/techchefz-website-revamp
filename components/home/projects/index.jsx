"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useContext, useRef } from "react";
import { useMediaQuery } from "react-responsive";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
import { base_Uri } from "@/lib/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Card = ({ ...props }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
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
  return (
    <motion.div
      className={styles.cardSec}
      style={isMobileScreen ? "" : { scale }}
    >
      <Link href="/case-study" className={styles.projectImg}>
        <ImageCustom
          src={
            props?.project?.Image?.data?.attributes?.url
              ? `${base_Uri}${props?.project?.Image?.data?.attributes?.url}`
              : `${base_Uri}/`
          }
          width={1360}
          height={300}
          alt="projectImg"
        />
      </Link>

      <div className={styles.cardContentStyle}>
        <h3 className={styles.projectBrand}>
          {props?.project?.Title.split(" ").map((word, index) => {
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

const Projects = ({ project, brands }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const { theme, setTheme } = useContext(MyContext);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const projects = [
    {
      src: "https://images.unsplash.com/photo-1622185135505-2d795003994a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary:
        "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
      title: "International Motorcycle Brand.",
    },
    {
      src: "https://images.unsplash.com/photo-1573013043679-4d44547b78a2?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary:
        "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
      title: "International Motorcycle Brand.",
    },
    {
      src: "https://images.unsplash.com/photo-1633527908145-bb4e3f41b3a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      summary:
        "Royal Enfield is a global brand since 1901, has a geographical presence in over 70 countries. The brand delivers consistent, omnichannel customer experiences, achieves scalability, diversifying into countries, and continents.",
      title: "International Motorcycle Brand.",
    },
  ];

  return (
    <section
      className={cn(
        styles.projectsStyle,
        theme ? styles.projectsStyleDark : "",
        "project-slider"
      )}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={cn(styles.rowSection)}>
            <div>
              <p
                className={cn(styles.projectHighlight, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${project[0]?.Title}` }}
              ></p>
              <h3
                className={cn(styles.datingText, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${project[0]?.SubTitle}` }}
              ></h3>
            </div>
            <div className={styles.paraSec}>
              <p className={styles.aboutText}>{project[0]?.Description}</p>

              <Link href="/portfolio">
                <Button
                  variant={!theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  {project[0]?.Btn}  <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>
        {!isMobileScreen ? (
          <div ref={container} className={styles.cards}>
            {brands.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
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
        ) : (
          <div ref={container} className={styles.cards}>
            <Swiper
              pagination={pagination}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {brands.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                  <SwiperSlide key={`p_${i}`}>
                    <Card
                      i={i}
                      project={project}
                      progress={scrollYProgress}
                      range={[i * 0.25, 1]}
                      targetScale={targetScale}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
