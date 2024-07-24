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
    title: data?.SeoData?.metaTitle,
    description: data?.SeoData?.metaDescription,
    keywords: data?.SeoData?.keywords,
    metaRobots: data?.SeoData?.metaRobots,
    structuredData: data?.SeoData?.structuredData,
    metaViewport: data?.SeoData?.metaViewport,
    canonicalURL: data?.SeoData?.canonicalURL,
    metaSocialTitle: data?.SeoData?.metaSocial?.socialNetwork?.title,
    metaSocialDescription: data?.SeoData?.metaSocial?.socialNetwork?.description,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_STRAPIE_BASE_URL}${data?.SeoData?.metaSocial?.socialNetwork?.image?.data?.attributes?.url}`, // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
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
          <RelatedCase props={data_related_cases} RelatedInsight={data.RelatedInsight}/>
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
