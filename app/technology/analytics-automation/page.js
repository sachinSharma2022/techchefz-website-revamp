import Faq from "@/components/common/faq";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import NotFound from "@/app/not-found";
import WhyCms from "@/components/technology/cms/whyCms";
import {
  api_analytics_automations_Page,
  api_Case_study_Page,
} from "@/lib/constants";
import { getData, getDataDynamic } from "@/lib/fetchData";

const Cms = async () => {
  const data = await getData(api_analytics_automations_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div>
          <CmsBanner props={data.Banner} />
          <CmsPlayer props={data.Player} />
          <WhyCms props={data.Why} />
          <CmsType props={data.Type} />
          <CmsDifference props={data.Difference} />
          {/* <TechnologyValues
            wrapperStyle="technology-cms-styles"
            props={data.Technology}
          /> */}
          <SolutionTheProcess props={data.OurProcess} />
          <Faq props={data.Faq} />
          <RelatedCase
            className="case-related-style"
            props={data_related_cases}
          />

          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default Cms;
