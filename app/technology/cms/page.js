import React from "react";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import RelatedCase from "@/components/caseStudy/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsType from "@/components/technology/cms/cmsType";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import Faq from "@/components/technology/cms/faq";
import CmsOurValue from "@/components/technology/cms/cmsOurValue";

const Cms = () => {
  return (
    <div>
      <CmsBanner />
      <CmsPlayer />
      <CmsType />
      <CmsDifference />
      <CmsOurValue />
      <RelatedCase />
      <Faq />
      <LetsWork />
    </div>
  );
};

export default Cms;
