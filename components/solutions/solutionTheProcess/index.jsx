"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const SolutionTheProcess = () => {
  const { theme, setTheme } = useContext(MyContext);
  const accordionData = [
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => 
    {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.headSection}`,
          scrub: 1,
          start: "top 11%",
          end:"bottom +=500",
      
          pin: true,
          markers:false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      const titles = gsap.utils.toArray(`.${styles.processCard}`)

      titles.forEach((text, i) => {
        

        gsap.to(text, {
          scrollTrigger:{
            trigger: text,
            start: "top 45%",
            end:"center 20%",
            markers: false,
            toggleActions: "play reset play reverse",
          },
          opacity: 1,
        })
        
      });
        
      const tl_circle = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.processCardSection}`,
          scrub: 1,
          start: "top 11%",
          end:"bottom +=500",
          markers:true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      
      
    
       
    });
    return () => ctx.revert();
  }, []);
  const circleWidth=400
  const radius = 195;
  const dashArray = radius * Math.PI * 2;
  return (
    <section className={`${styles.theProcessStyle} ${theme ? styles.theProcessDark : ""}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <div>
            <h6 className={styles.heading}>The Process</h6>
            <h3 className={styles.subHeading}>Dive into Our Approach</h3>
          </div>

          <div className={styles.ourNumbersImg}>
          {/* <div className="circularStepper" >
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#1E8AF2" }} />
            <stop offset="100%" style={{ stopColor: "#05BED7" }} />
          </linearGradient>
          
        </defs>
        
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
          className="circle-background"
          filter="url(#inset-shadow)"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
          className="circle-progress"
          style={{
            stroke: "url(#progressGradient)",
            strokeDasharray: dashArray,
            strokeDashoffset: dashArray,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        
      </svg>

      <div className="stepperImg">
        <ImageCustom
          src="/images/shield.png"
          width={200}
          height={200}
          alt="bannerImg"
        />
      </div>
      <span className="one">01</span>
      <span className="two">02</span>
      <span className="three">03</span>
      <span className="four">04</span>
      <span className="five">05</span>
      <span className="six">06</span>
    </div> */}
     <ImageCustom
              src="/images/process.svg"
              width={410}
              height={570}
              alt="bannerImg"
            />
          </div>
        </div>

        <div className={`${styles.processCardSection}`}>
          {accordionData.map((data, index) => (
            <div
              key={index}
              className={`${styles.processCard} ${data.current}`}
            >
              <div className={styles.textGradient}>{index}</div>
              <h4 className={styles.title}>{data.title}</h4>
              <p className={styles.description}>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTheProcess;
