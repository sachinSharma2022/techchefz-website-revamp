import Faq from "@/components/common/faq";
import RelatedCase from "@/components/relatedCase";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import SolutionOurValues from "@/components/solutions/solutionOurValues";
import SolutionTechnologies from "@/components/solutions/solutionTechnologies";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import { api_Solutions_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

import styles from "./style.module.scss";

const Solutions = async() => {
  const data = await getData(api_Solutions_Page)
return (
    <div className={styles.solutionsPageStyle}>
      <SolutionHeroBanner props={data.Banner} />
      <SolutionOurValues props={data.ourValues} />
      <SolutionTheProcess props={data.OurProcess} />
      <SolutionTechnologies props={data.Technology} />
      <RelatedCase sliderClassName="mb-0" props={data.CaseStudy} />
      <Faq props ={data.Faq} />
    </div>
  );
};

export default Solutions;