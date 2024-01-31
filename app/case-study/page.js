import Goals from "@/components/caseStudy/Goals";
import CaseStudyBanner from "@/components/caseStudy/caseStudyBanner";
import Challenges from "@/components/caseStudy/challenges";
import Industry from "@/components/caseStudy/industry";
import RelatedCase from "@/components/relatedCase";
import Results from "@/components/caseStudy/results";
import Solutions from "@/components/caseStudy/solutions";
import LetsWork from "@/components/home/letsWork";
import React from "react";

function CaseStudy() {
  return (
    <div>
      <CaseStudyBanner />
      <Industry />
      <Goals />
      <Challenges />
      <Solutions />
      <Results />
      <RelatedCase className="my-0 py-0" />
      <LetsWork />
    </div>
  );
}

export default CaseStudy;
