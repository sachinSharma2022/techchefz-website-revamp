"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { SvgLoader } from "@/components/ui/svgCircleLoader/svgLoader";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useState } from "react";

import MobileSlider from "@/components/common/mobileSlider";
import TextRevel from "@/components/ui/sectionAnimation";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";

const SolutionTheProcess = ({ props }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1200px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 690px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 690px)" });
  const { theme } = useContext(MyContext);
  const radius = 235;
  const dashArray = radius * Math.PI * 2;
  const [dashOffset, setdashOffset] = useState(dashArray);
  const [prevdashOffset, prevsetdashOffset] = useState(dashArray);
  const [cardActive, setcardActive] = useState(true);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (isBigScreen) {
      const changeDot = (i) => {
        const ele = document.getElementsByClassName("dot");
        for (let i = 0; i < ele.length; i++) {
          ele[i].style.fill = "white";
        }
        document.getElementById(i).style.fill = "#26A0F8";
      };
      const changeImg = (i) => {
        const ele = document.getElementsByClassName(styles.stepperImg);
        for (let i = 0; i < ele.length; i++) {
          ele[i].style.display = "none";
        }

        document.getElementById(`${i}-img`).style.display = "block";
      };
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.headSection}`,
            scrub: 0.5,
            start: "top 11%",
            end: "bottom +=600",

            pin: true,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        const titles = gsap.utils.toArray(`.${styles.processCard}`);
        const fillcircle = (prevvalue, newvalue) => {
          gsap.fromTo(
            ".circleFil",
            {
              strokeDashoffset: prevvalue,
              // duration: 2,
              ease: "power1.inOut",
            },
            {
              strokeDashoffset: newvalue,
              // duration: 2,
              transition: "stroke-dashoffset 1s linear 0s",
              ease: "power1.inOut",
            }
          );
        };
        titles.forEach((text, i) => {
          gsap.to(text, {
            onStart: function () {
              if (i != 0) setcardActive(false);
              else setcardActive(true);
              setTimeout(() => {
                if (i != 0) changeDot(i);
                changeImg(i + 1);
              }, 100);

              setdashOffset((prev) => {
                prevsetdashOffset(prev);
                if (i == titles.length - 1) fillcircle(prev, 0);
                else
                  fillcircle(prev, dashArray - (dashArray / titles.length) * i);
                return dashArray - (dashArray / titles.length) * i;
              });
            },
            onReverseComplete: function () {
              if (i == 0) {
                setcardActive(true);
                // fillcircle(
                //   dashArray - (dashArray / titles.length) * (i + 1),
                //   prevdashOffset
                // );
              }
              if (i == 1) {
                changeDot(i - 1);
              }
            },
            scrollTrigger: {
              trigger: text,
              start: "top 390rem",
              end: "center 232rem",
              markers: false,
              toggleActions: "play reset play reverse",
            },
            opacity: 1,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      className={`${styles.theProcessStyle} ${
        theme ? styles.theProcessDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <TextRevel>
            <div>
              <h6
                className={cn(styles.heading, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
              ></h6>
              <h3
                className={cn(styles.subHeading, "gradient-text")}
                dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
              ></h3>
            </div>
          </TextRevel>

          <div className={styles.ourNumbersImg}>
            <div className={styles.circularStepperContainer}>
              <SvgLoader
                circle={props?.ITSolutionsCards?.length}
                theme={theme}
                dashArray={dashArray}
              />

              <div id="1-img" className={cn(styles.stepperImg, "fadeinout")}>
                <ImageCustom
                  src={
                    props?.images[0]?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.images[0]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="2-img"
                className={cn(styles.stepperImg, "fadeinout")}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src={
                    props?.images[1]?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.images[1]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="3-img"
                className={cn(styles.stepperImg, "fadeinout")}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src={
                    props?.images[2]?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.images[2]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="4-img"
                className={cn(styles.stepperImg, "fadeinout")}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src={
                    props?.images[3]?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.images[3]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="5-img"
                className={cn(styles.stepperImg, "fadeinout")}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src={
                    props?.images[4]?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.images[4]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="6-img"
                className={cn(styles.stepperImg, "fadeinout")}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src={
                    props?.images[5]?.Image?.data?.attributes?.url
                      ? `${base_Uri}${props?.images[5]?.Image?.data?.attributes?.url}`
                      : `${base_Uri}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
            </div>
          </div>
        </div>

        {!isMobileScreen && (
          <div className={`${styles.processCardSection}`}>
            {props?.ITSolutionsCards?.map((data, index) => (
              <div
                key={index}
                className={`${styles.processCard} ${data.current} ${
                  index == 0 && cardActive && styles.cardActive
                }`}
              >
                <div className={styles.textGradient}>{data.Title}</div>
                <h4 className={styles.title}>{data?.Description}</h4>
                <p className={styles.description}>{data.secoundDescription}</p>
              </div>
            ))}
          </div>
        )}

        {isMobileScreen && (
          <div className={`${styles.processCardSection}`}>
            <MobileSlider slidesToShow={1}>
              {props?.ITSolutionsCards?.map((data, index) => (
                <div
                  key={index}
                  className={`${styles.processCard} ${data.current}`}
                >
                  <div className={styles.textGradient}>{data.Title}</div>
                  <h4 className={styles.title}>{data?.Description}</h4>
                  <p className={styles.description}>
                    {data.secoundDescription}
                  </p>
                </div>
              ))}
            </MobileSlider>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionTheProcess;
