import NotFound from "@/app/not-found";
import Faq from "@/components/common/faq";
import LetsWork from "@/components/home/letsWork";
import SolutionHeroBanner from "@/components/solutions/solutionHeroBanner";
import OurValues from "@/components/about/ourValues";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import CoeService from "@/components/coe/coeService";
import TechnologyValues from "@/components/technology/technologyValues";
import CmsType from "@/components/technology/cms/cmsType";
import RelatedCase from "@/components/relatedCase";

import {
  api_Case_study_Page,
  api_tech_solution_Page,
} from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";

export async function generateMetadata() {
  const data = await getData(api_tech_solution_Page);

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

const Tech_Solution = async () => {
  const data = await getData(api_tech_solution_Page);
 
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div>
           <SolutionHeroBanner props={data.Banner} />
           <OurValues props={data.Design} />
           <SolutionTheProcess props={data.Process} />
           <CoeService props={data.Service} />
           <TechnologyValues
            wrapperStyle="technology-styles"
            props={data.Technology}
          />
          <CmsType props={data.CmsType} />
          <Faq props={data.Faq} />
          <RelatedCase
            className="cms-related-style"
            props={data_related_cases}
            RelatedInsight={data.RelatedInsight}
          />
         
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Tech_Solution;
