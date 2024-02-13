"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { MyContext } from "@/context/theme";
import { useContext, useEffect } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";

const TechnologyStack = ({technology}) => {
  const { theme, setTheme } = useContext(MyContext);

  // const countsCard = [
  //   {
  //     count: "930+",
  //     countText: "Partners",
  //   },
  //   {
  //     count: "3000+",
  //     countText: "Integrations",
  //   },
  //   {
  //     count: "500+",
  //     countText: "System Integrations",
  //   },
  // ];

  function move(e) {
    const el = document.getElementById("tech-Stack");
    var movementStrength = 75;
    var height = movementStrength / window.innerHeight;
    var width = movementStrength / window.innerWidth;
    var pageX = e.pageX - window.innerWidth / 2;
    var pageY = e.pageY - window.innerHeight / 2;
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    el.style.backgroundPosition= newvalueX+"px     "+newvalueY+"px";
}
  useEffect(() => {
    const ele = document.getElementById("tech-Stack");
    ele.addEventListener("mousemove", move);
  }, []);
  return (
    <section
      className={cn(
        styles.technologyStyle,
        theme ? styles.technologyStyleDark : ""
      )}
      id="tech-Stack"
    >
      <div className={cn("primary-container")}>
        <div className={styles.technologyStackBox}>
          <div className={styles.careerRow}>
            <h6 className={cn(styles.projectHighlight, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${technology[0]?.Title}`}}>

            </h6>
            <h3 className={cn(styles.techHeading, "gradient-text")} dangerouslySetInnerHTML={{ __html: `${technology[0]?.SubTitle}`}}> 
            </h3>
            <p className={styles.techText}>
            {technology[0]?.Description}
            </p>
            <div className={styles.partnerCounter}>
              {technology[0]?.Ratings.map((data, index) => (
                <div key={index} className={styles.counterCard}>
                  <h3 className={styles.counts}>{data.Rating}</h3>
                  <p className={styles.countsText}>{data.Title}</p>
                </div>
              ))}
            </div>
            <Link href="/technology">
              <Button
                variant={theme ? "lightBlueOutline" : "outline"}
                size="md"
              >
                {technology[0]?.Btn} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
