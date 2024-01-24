import Faq from "@/components/common/faq";
import RelatedCase from "@/components/relatedCase";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import SolutionOurValues from "@/components/solutions/solutionOurValues";
import SolutionTechnologies from "@/components/solutions/solutionTechnologies";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";

import styles from "./style.module.scss";

const Solutions = () => {
  return (
    <div className={styles.solutionsPageStyle}>
      <SolutionHeroBanner />
      <SolutionOurValues />
      <SolutionTheProcess />
      <SolutionTechnologies />
      <div className="mt-120">
        <RelatedCase />
      </div>
      <Faq />
    </div>
  );
};

export default Solutions;
