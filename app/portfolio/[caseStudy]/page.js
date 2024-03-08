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
  let index = 0;
  console.log(params, "-----------------");
  for (const i in data) {
    if (data[i].id == params.caseStudy) {
      index = i;
    }
  }
  return (
    <>
      {data ? (
        <div>
          <CaseStudyBanner props={data[index].attributes.Banner} />
          <Industry
            props={data[index].attributes.Industry}
            CMSImplementation={data[index].attributes.CMSImplementation}
            Industryinner={data[index].attributes.Industryinner}
          />
          <Goals props={data[index].attributes.Goals} />
          <Challenges props={data[index].attributes.Challenges} />
          <Solutions props={data[index].attributes.Solutions} />
          <Results props={data[index].attributes.Results} />
          <RelatedCase
            className="tech-related-style"
            props={data}
            params={params}
          />
          <LetsWork contact={data[index].attributes.LetsWork} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default CaseStudy;
