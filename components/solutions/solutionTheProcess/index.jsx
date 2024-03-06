"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useState } from "react";
import { base_Uri, base_Url } from "@/lib/constants";
import { SvgLoader } from "@/components/ui/svgCircleLoader/svgLoader";

import styles from "./style.module.scss";
import TextRevel from "@/components/ui/sectionAnimation";

const SolutionTheProcess = ({ props }) => {
  const { theme } = useContext(MyContext);
  const radius = 235;
  const dashArray = radius * Math.PI * 2;
  const [dashOffset, setdashOffset] = useState(dashArray);
  const [prevdashOffset, prevsetdashOffset] = useState(dashArray);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
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

      titles.forEach((text, i) => {
        gsap.to(text, {
          onStart: function () {
            setTimeout(() => {
              changeDot(i + 1);
              changeImg(i + 1);
            }, 100);

            setdashOffset((prev) => {
              prevsetdashOffset(prev);
              return dashArray - (dashArray / titles.length) * (i + 1);
              //return (100 / titles.length) * (i + 1);
            });
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
      console.log(dashOffset, prevdashOffset, "dashofsett");

      gsap.fromTo(
        ".circleFil",
        {
          strokeDashoffset: prevdashOffset,
          duration: 3,
          ease: "power1.inOut",
        },
        //   {
        //     "--p": `${dashOffset}%`,
        //     //  duration: 4,
        //     //  ease: "expo.out",
        //   }
        {
          strokeDashoffset: dashOffset,
          transition: "stroke-dashoffset 1.6s linear 0s",
          duration: 9,
          ease: "power1.inOut",
        }
        //   {
        //     "--p": `${dashOffset}%`,
        //     duration: 4,
        //     ease: "expo.out",
        //   }
      );
    });
    return () => ctx.revert();
  }, [dashOffset, prevdashOffset]);

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
              {/* <div class="circular-pbar">
                <span class="_circle_inner"></span>
              </div> */}

              <div id="1-img" className={cn(styles.stepperImg, "fadeinout")}>
                <ImageCustom
                  src={
                    props?.images[0]?.Image?.data?.attributes?.url
                      ? `${base_Url}${props?.images[0]?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
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
                      ? `${base_Url}${props?.images[1]?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
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
                      ? `${base_Url}${props?.images[2]?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
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
                      ? `${base_Url}${props?.images[3]?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
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
                      ? `${base_Url}${props?.images[4]?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
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
                      ? `${base_Url}${props?.images[5]?.Image?.data?.attributes?.url}`
                      : `${base_Url}/`
                  }
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.processCardSection}`}>
          {props?.ITSolutionsCards?.map((data, index) => (
            <div
              key={index}
              className={`${styles.processCard} ${data.current}`}
            >
              <div className={styles.textGradient}>{data.Title}</div>
              <h4 className={styles.title}>{data?.Description}</h4>
              <p className={styles.description}>{data.secoundDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTheProcess;
