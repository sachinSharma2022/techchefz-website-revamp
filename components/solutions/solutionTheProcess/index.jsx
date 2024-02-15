"use client";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useState } from "react";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";

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
          end: "bottom +=500",

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
            });
          },
          scrollTrigger: {
            trigger: text,
            start: "top 45%",
            end: "center 20%",
            markers: false,
            toggleActions: "play reset play reverse",
          },
          opacity: 1,
        });
      });
      gsap.fromTo(
        ".circleFil",
        {
          strokeDashoffset: prevdashOffset,
          duration: 3,
          ease: "power1.inOut",
        },
        {
          strokeDashoffset: dashOffset,
          transition: "stroke-dashoffset 1.6s linear 0s",
          duration: 3,
          ease: "power1.inOut",
        }
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
          <div>
            <h6
              className={cn(styles.heading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={styles.subHeading}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
          </div>

          <div className={styles.ourNumbersImg}>
            <div className={styles.circularStepperContainer}>
              <svg
                width="470"
                height="510"
                viewBox="0 0 470 510"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="235"
                  cy="255"
                  r="235"
                  fill={theme ? "#111111" : "#f1f1f1"}
                />
                <circle
                  cx="235"
                  cy="255"
                  r="230"
                  stroke={theme ? "#707070" : "#979797"}
                  stroke-opacity="0.4"
                  stroke-width="10"
                />
                <circle
                  className="circleFil"
                  cx="235"
                  cy="255"
                  r="230"
                  stroke="url(#paint4_linear_1035_26193)"
                  stroke-width="10"
                  style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashArray,
                  }}
                  transform={`rotate(-90 ${470 / 2} ${510 / 2})`}
                />
                <g filter="url(#filter0_i_1035_26193)">
                  <circle
                    cx="234.5"
                    cy="254.5"
                    r="193.5"
                    fill={theme ? "#202020" : "#ffffff"}
                  />
                </g>
                <g>
                  <circle
                    className="dot"
                    id="6"
                    cx="235"
                    cy="20"
                    r="20"
                    fill="#26A0F8"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="235"
                    y="20"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    1
                  </text>
                </g>
                <g>
                  <circle
                    className="dot"
                    id="5"
                    cx="31"
                    cy="138"
                    r="20"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="31"
                    y="138"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    6
                  </text>
                </g>
                <g>
                  <circle
                    className="dot"
                    id="4"
                    cx="31"
                    cy="373"
                    r="20"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="31"
                    y="373"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    5
                  </text>
                </g>
                <g>
                  <circle
                    className="dot"
                    id="3"
                    cx="235"
                    cy="490"
                    r="20"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="235"
                    y="490"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    4
                  </text>
                </g>
                <g>
                  <circle
                    className="dot"
                    id="2"
                    cx="439"
                    cy="373"
                    r="20"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="439"
                    y="373"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    3
                  </text>
                </g>
                <g>
                  <circle
                    className="dot"
                    id="1"
                    cx="439"
                    cy="138"
                    r="19"
                    fill="white"
                    stroke-width="2"
                    stroke="#26A0F8"
                  />
                  <text
                    x="439"
                    y="138"
                    text-anchor="middle"
                    fill="white"
                    alignment-baseline="middle"
                    style={{}}
                  >
                    2
                  </text>
                </g>

                <defs>
                  <filter
                    id="filter0_i_1035_26193"
                    x="41"
                    y="61"
                    width="387"
                    height="393"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="6" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1035_26193"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1035_26193"
                    x1="181.035"
                    y1="229.182"
                    x2="243.219"
                    y2="255.919"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1E8AF2" />
                    <stop offset="1" stop-color="#05BED7" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1035_26193"
                    x1="130.482"
                    y1="230.612"
                    x2="203.917"
                    y2="302.296"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1E8AF2" />
                    <stop offset="1" stop-color="#05BED7" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1035_26193"
                    x1="252.169"
                    y1="284.925"
                    x2="263.461"
                    y2="290.914"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1E8AF2" />
                    <stop offset="1" stop-color="#05BED7" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1035_26193"
                    x1="196.812"
                    y1="210.37"
                    x2="208.104"
                    y2="216.359"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1E8AF2" />
                    <stop offset="1" stop-color="#05BED7" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1035_26193"
                    x1="5.48334"
                    y1="165.7"
                    x2="252.068"
                    y2="296.342"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1E8AF2" />
                    <stop offset="1" stop-color="#05BED7" />
                  </linearGradient>
                  <clipPath id="clip0_1035_26193">
                    <rect
                      width="258"
                      height="258"
                      fill="white"
                      transform="translate(106 126)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div id="1-img" className={styles.stepperImg}>
                <ImageCustom
                  src="/images/shield.png"
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="2-img"
                className={styles.stepperImg}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src="/images/icon 4.svg"
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="3-img"
                className={styles.stepperImg}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src="/images/icon 5.svg"
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="4-img"
                className={styles.stepperImg}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src="/images/icon 4.svg"
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="5-img"
                className={styles.stepperImg}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src="/images/icon 5.svg"
                  width={258}
                  height={258}
                  alt="bannerImg"
                />
              </div>
              <div
                id="6-img"
                className={styles.stepperImg}
                style={{ display: "none" }}
              >
                <ImageCustom
                  src="/images/icon 4.svg"
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
