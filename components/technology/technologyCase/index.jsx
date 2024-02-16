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
 
  return (
    <section
      className={`${styles.technologyCase} ${
        theme ? styles.technologyCaseDark : ""
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.headSection}>
          <div className={styles.caseTop}>
            <h4 className={cn(styles.caseTitle,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Title}`}}></h4>
            <h3 className={cn(styles.caseHeading,"gradient-text")} dangerouslySetInnerHTML={{ __html: `${props?.Description}`}}>
              
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
