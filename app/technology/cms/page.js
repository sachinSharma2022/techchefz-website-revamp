import RelatedCase from "@/components/relatedCase";
import LetsWork from "@/components/home/letsWork";
import CmsBanner from "@/components/technology/cms/cmsBanner";
import CmsDifference from "@/components/technology/cms/cmsDifference";
import CmsPlayer from "@/components/technology/cms/cmsPlayer";
import CmsType from "@/components/technology/cms/cmsType";
import Faq from "@/components/common/faq";
import WhyCms from "@/components/technology/cms/whyCms";
import TechnologyValues from "@/components/technology/technologyValues";
import { getData } from "@/lib/fetchData";
import { api_Technology_Page } from "@/lib/constants";


const Cms = async() => {
  const data = await getData(api_Technology_Page)
  return (
    <>{
      data? <div>
      <CmsBanner />
      <CmsPlayer />
      <WhyCms />
      <CmsType />
      <CmsDifference />
      <TechnologyValues />
      {/* <RelatedCase className="pt-0 mt-0" /> */}
      <Faq />
      <LetsWork  contact={data.ContactUs}/>
    </div>:<></>
    }
    
    
    </>
   
  );
};

export default Cms;
