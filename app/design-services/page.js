import RelatedCase from "@/components/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/common/faq";
import WhyCms from "@/components/technology/cms/whyCms";
import NotFound from "@/app/not-found";
import TechnologyValues from "@/components/technology/technologyValues";
import CoeService from "@/components/coe/coeService";

import { getData, getDataDynamic } from "@/lib/fetchData";
import {
  api_Tech_Solutions_Page,
  api_Case_study_Page,
} from "@/lib/constants";
import SolutionTheProcess from "@/components/solutions/solutionTheProcess";

export async function generateMetadata() {
  const data = await getData(api_Tech_Solutions_Page);

  return {
    title: data?.SeoData?.Title,
    description: data?.SeoData?.Description,
  };
}

const Cms = async () => {
  const data = await getData(api_Tech_Solutions_Page);
  const data_related_cases = await getDataDynamic(api_Case_study_Page);
  return (
    <>
      {data ? (
        <div>
          <CmsBanner props={data.Banner} />
          <CmsPlayer props={data.Player} />
         
          <WhyCms props={data.Why} />
          <SolutionTheProcess props={data.OurProcess} />
          <CoeService props={data.CoeService} />
          <TechnologyValues
            wrapperStyle="technology-styles"
            props={data.Technology}
          />
          <CmsType props={data.Type} />
          
          <Faq props={data.Faq} />
          <RelatedCase
            className="cms-related-style"
            props={data_related_cases}
            RelatedInsight={data.RelatedInsight}
          />

          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Cms;
