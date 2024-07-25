import Goals from "@/components/caseStudy/Goals";
import CaseStudyBanner from "@/components/caseStudy/caseStudyBanner";
import Challenges from "@/components/caseStudy/challenges";
import Industry from "@/components/caseStudy/industry";
import RelatedCase from "@/components/relatedCase";
import Results from "@/components/caseStudy/results";
import Solutions from "@/components/caseStudy/solutions";
import LetsWork from "@/components/home/letsWork";
import React from "react";
import NotFound from "@/app/not-found";
import { getDataDynamic, getData } from "@/lib/fetchData";
import { api_Case_study_Page, api_portfolios_Page } from "@/lib/constants";
import { generateSlug } from "@/lib/utils";

export async function generateMetadata() {
  const data = await getData(api_About_Page);

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

const CaseStudy = async ({ params }) => {
  const data = await getDataDynamic(api_Case_study_Page);
  const data1 = await getData(api_portfolios_Page);
  const [page] = data.filter(
    (value) =>
      generateSlug(value?.attributes?.Banner?.PortfolioTitle) ==
      params.caseStudy
  );

  
  return (
    <>
      {data ? (
        <div>
          <CaseStudyBanner props={page.attributes.Banner} />
          <Industry
            props={page.attributes.Industry}
            CMSImplementation={page.attributes.CMSImplementation}
            Industryinner={page.attributes.Industryinner}
          />
          <Goals props={page.attributes.Goals} />
          <Challenges props={page.attributes.Challenges} />
          <Solutions props={page.attributes.Solutions} />
          <Results props={page.attributes.Results} />
          <RelatedCase
            className="tech-related-style"
            props={data}
            params={params}
            RelatedInsight={data1.RelatedInsight}
          />
          <LetsWork contact={page.attributes.LetsWork} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default CaseStudy;
