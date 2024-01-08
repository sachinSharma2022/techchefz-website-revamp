import RelatedCase from "@/components/caseStudy/relatedCase";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import SolutionOurValues from "@/components/solutions/solutionOurValues";
import SolutionTechnologies from "@/components/solutions/solutionTechnologies";
import Faq from "@/components/technology/cms/faq";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";

import styles from "./style.module.scss";

const Solutions = () => {
  return (
    <div className={styles.solutionsPageStyle}>
      <SolutionHeroBanner />
      <SolutionOurValues />
      <SolutionTheProcess />
      <SolutionTechnologies />
      <RelatedCase />
      <Faq />
    </div>
  );
};

export default Solutions;
