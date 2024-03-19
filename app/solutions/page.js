import Faq from "@/components/common/faq";
import RelatedCase from "@/components/relatedCase";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import SolutionOurValues from "@/components/solutions/solutionOurValues";
import SolutionTechnologies from "@/components/solutions/solutionTechnologies";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import { api_Solutions_Page, api_Case_study_Page } from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";
import styles from "./style.module.scss";
import NotFound from "../not-found";



export async function generateMetadata() {
  const data = await getData(api_Solutions_Page); 
  
  return {
    title: data?.SeoData?.Title,
    description: data?.SeoData?.Description,
   
  };
}

const Solutions = async () => {
  const data = await getData(api_Solutions_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div className={styles.solutionsPageStyle}>
          <SolutionHeroBanner props={data.Banner} />
          <SolutionOurValues props={data.ourValues} />
          <SolutionTheProcess props={data.OurProcess} />
          <SolutionTechnologies props={data.Technology} />
          <RelatedCase
            className="solution-related-style"
            props={data_related_cases}
          />
          <Faq props={data.Faq} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Solutions;
