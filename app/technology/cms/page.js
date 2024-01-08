import RelatedCase from "@/components/caseStudy/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/technology/cms/faq";
import WhyCms from "@/components/technology/cms/whyCms";
import TechnologyValues from "@/components/technology/technologyValues";

const Cms = () => {
  return (
    <div>
      <CmsBanner />
      <CmsPlayer />
      <WhyCms />
      <CmsType />
      <CmsDifference />
      <TechnologyValues />
      <RelatedCase />
      <Faq />
      <LetsWork />
    </div>
  );
};

export default Cms;