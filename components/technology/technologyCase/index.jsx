"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import CaptionCard from "@/components/ui/captionCard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { base_Uri } from "@/lib/constants";

import styles from "./styles.module.scss";

const TechnologyCase = ({props}) => {

  const { theme, setTheme } = useContext(MyContext);
  // const caseCardData = [
  //   {
  //     imgSrc:
  //       "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
  //     title: "Revolutionizing Retail: A Digital Transition",
  //   },
  //   {
  //     imgSrc:
  //       "https://images.unsplash.com/photo-1552155634-312b6355173b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D",
  //     title: "CMS Implementation for the Motorcycle Brand",
  //   },
  //   {
  //     imgSrc:
  //       "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGx1eGVyeSUyMGhvdGVsfGVufDB8fDB8fHww",
  //     title: "Framework for Web Portal of the luxury hotel chain",
  //   },
  // ];
  return (
    <section
      className={`${styles.technologyCase} ${
        theme ? styles.technologyCaseDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <div className={styles.caseTop}>
            <h4 className={styles.caseTitle} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}></h4>
            <h3 className={styles.caseHeading} dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
              
            </h3>
          </div>
          <div className={styles.btnSection}>
            <Link href="/case-study">
              <Button variant={theme ? "lightBlueOutline" : "outline"} size="md">
                {props?.Button} <Icons.ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.technologyCaseCards}>
          {props?.CaseStudyCard?.map((data, index) => (
            <CaptionCard key={index} 
            imgSrc={data?.Image?.data?.attributes?.url?`${base_Uri}${data?.Image?.data?.attributes?.url}`:`${base_Uri}/`}
            title={data.Title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCase;
