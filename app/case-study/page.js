import Goals from "@/components/caseStudy/Goals";
import CaseStudyBanner from "@/components/caseStudy/caseStudyBanner";
import Challenges from "@/components/caseStudy/challenges";
import Industry from "@/components/caseStudy/industry";
import RelatedCase from "@/components/relatedCase";
import Results from "@/components/caseStudy/results";
import Solutions from "@/components/caseStudy/solutions";
import LetsWork from "@/components/home/letsWork";
import React from "react";
import { api_case_studies_Page } from "@/lib/constants";
import axios, { Axios } from "axios";

async function CaseStudy() {
  const data = await getData()

  return (
    <div>
      <CaseStudyBanner />
      <Industry />
      <Goals />
      <Challenges />
      <Solutions />
      <Results />
      <RelatedCase sliderClassName="mb-0" />
      <LetsWork  contact={data.ContactUs}/>
    </div>
  );
}

export default CaseStudy;
async function getData() {
  try{
    const response = await axios.get(api_case_studies_Page);
    return response.data?.data[0]?.attributes
  }catch(error){
    console.log(error)
    return null
  }
  
}