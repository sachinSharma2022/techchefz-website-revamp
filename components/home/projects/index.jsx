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
import { base_Uri } from "@/lib/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Card = ({ ...props }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const description = useRef(null);
  const isInView = useInView(description);

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
          width={1440}
          height={900}
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
        {/* <motion.div
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className={styles.projectBtn}
        >
          {props?.project?.Tag.map((tagItem) => (
            <Link key={tagItem} href="/portfolio" className={styles.badgeStyle}>
              {tagItem.Title}
            </Link>
          ))}
        </motion.div> */}
      </div>
    </motion.div>
  );
};

const Projects = ({ project, brands }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1199px)" });
  const { theme, setTheme } = useContext(MyContext);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

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
              <h6
                className={cn(styles.projectHighlight, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${project[0]?.Title}` }}
              ></h6>
              <h3
                className={cn(styles.datingText, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${project[0]?.SubTitle}` }}
              ></h3>
            </div>
            <div className={styles.paraSec}>
              <p className={styles.aboutText}>{project[0]?.Description}</p>

              <Link href={project[0]?.BtnLink}>
                <Button
                  variant={!theme ? "lightBlueOutline" : "outline"}
                  size="md"
                >
                  {project[0]?.Btn} <Icons.ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </TextRevel>
        {!isMobileScreen ? (
          <div ref={container} className={styles.cards}>
            {brands.map((project, i) => {
              const targetScale = 1 - (brands.length - i) * 0.05;
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
                const targetScale = 1 - (brands.length - i) * 0.1;
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
