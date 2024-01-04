import React from "react";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import RelatedCase from "@/components/caseStudy/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsType from "@/components/technology/cms/cmsType";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import Faq from "@/components/technology/cms/faq";

const Cms = () => {
  return (
    <>
      <CmsBanner />
      <CmsPlayer />
      <CmsType />
      <CmsDifference />
      <RelatedCase />
      <Faq />
      <LetsWork />
    </>
  );
};

export default Cms;
