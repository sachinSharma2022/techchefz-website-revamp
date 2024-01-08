import RelatedCase from "@/components/caseStudy/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsOurValue from "@/components/technology/cms/cmsOurValue";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/technology/cms/faq";
import WhyCms from "@/components/technology/cms/whyCms";

const Cms = () => {
  return (
    <div>
      <CmsBanner />
      <CmsPlayer />
      <WhyCms />
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
