"use client";
import { MyContext } from "@/context/theme";
import { useState, useContext, useEffect,useRef } from "react";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import CircularStepper from "./circularStepper";

  const accordionData = [
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      // current: styles.active,
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
const SolutionTheProcess = () => {
  const { theme, setTheme } = useContext(MyContext);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const processCardSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (processCardSectionRef.current) {
        const totalCards = accordionData.length;
        const cardHeight = processCardSectionRef.current.offsetHeight / totalCards;
  
        const scrollPosition = processCardSectionRef.current.scrollTop;
        const newActiveCardIndex = Math.floor(scrollPosition / cardHeight);
  
        // Update the active card index only if it has changed
        if (newActiveCardIndex !== activeCardIndex) {
          setActiveCardIndex(newActiveCardIndex);
        }
      }
    };
  
    if (processCardSectionRef.current) {
      processCardSectionRef.current.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (processCardSectionRef.current) {
        processCardSectionRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [accordionData, activeCardIndex]);
  

  return (
    <section
      className={`${styles.theProcessStyle} ${
        theme ? styles.theProcessDark : ""
      }`}
    >
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <div>
            <h6 className={styles.heading}>The Process</h6>
            <h3 className={styles.subHeading}>Dive into Our Approach</h3>
          </div>

          <div className={styles.circularStepperContainer}>
            <CircularStepper activeIndex={activeCardIndex} totalSteps={accordionData.length} circleWidth="400" />
          </div>
        </div>
        <div className={`${styles.processCardSection}`} ref={processCardSectionRef}>
          {accordionData.map((data, index) => (
            <div
              key={index}
              className={`${styles.processCard} ${index === activeCardIndex ? styles.active : ''}`}
            >
              <div className={styles.textGradient}>{index + 1}</div>
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
