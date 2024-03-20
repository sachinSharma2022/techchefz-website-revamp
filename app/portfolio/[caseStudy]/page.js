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
import { getDataDynamic } from "@/lib/fetchData";
import { api_Case_study_Page } from "@/lib/constants";

const CaseStudy = async ({ params }) => {
  const data = await getDataDynamic(api_Case_study_Page);
  const [page] = data.filter((value) => value.id == params.caseStudy);
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
