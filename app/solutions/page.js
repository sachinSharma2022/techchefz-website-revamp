'use client'
import Faq from "@/components/common/faq";
import RelatedCase from "@/components/relatedCase";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import SolutionOurValues from "@/components/solutions/solutionOurValues";
import SolutionTechnologies from "@/components/solutions/solutionTechnologies";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";

import styles from "./style.module.scss";
import SolutionCaseStudy from "@/components/solutions/solutionCaseStudy";
import Lenis from '@studio-freight/lenis'
import {useEffect} from 'react'

const Solutions = () => {
  useEffect( () => {
    
    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {duration: 0.2,}});

      }

    )()

   

  }, [])
  return (
    <div className={styles.solutionsPageStyle}>
      <SolutionHeroBanner />
      <SolutionOurValues />
      <SolutionTheProcess />
      <SolutionTechnologies />
      <SolutionCaseStudy />
      <Faq />
    </div>
  );
};

export default Solutions;
