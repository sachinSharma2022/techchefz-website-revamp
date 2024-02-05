import Goals from "@/components/caseStudy/Goals";
import CaseStudyBanner from "@/components/caseStudy/caseStudyBanner";
import Challenges from "@/components/caseStudy/challenges";
import Industry from "@/components/caseStudy/industry";
import RelatedCase from "@/components/relatedCase";
import Results from "@/components/caseStudy/results";
import Solutions from "@/components/caseStudy/solutions";
import LetsWork from "@/components/home/letsWork";
import React from "react";
import { getData } from "@/lib/fetchData";
import { api_Case_study_Page } from "@/lib/constants";

const CaseStudy = async() =>{
  
  const data = await getData(api_Case_study_Page)
  return (
    <>{data? <div>
      <CaseStudyBanner props={data.CaseStudyBanner}/>
      <Industry props={data.Industry} CMSImplementation={data.CMSImplementation}/>
      <Goals props={data.Goals} />
      <Challenges props={data.Challenges}/>
      <Solutions props={data.Solutions} />
      <Results props={data.Results} />
      <RelatedCase sliderClassName="mb-0" />
      <LetsWork  contact={data.ContactUs}/>
     
    </div>:<></>}
    </>
   
  );
};

export default CaseStudy;