
import AboutBanner from "@/components/about/aboutBanner";
import FounderDesk from "@/components/about/founderDesk";
import OurClients from "@/components/about/ourClients";
import OurHistory from "@/components/about/ourHistory";
import OurResults from "@/components/about/ourResults";
import OurTeam from "@/components/about/ourTeam";
import OurValues from "@/components/about/ourValues";
import OurVision from "@/components/about/ourVision";
import WhatWeDo from "@/components/about/whatWeDo";
import LetsWork from "@/components/home/letsWork";
import OurGallery from "@/components/about/ourGallery";
import Curve from "@/components/ui/pageTransition";
import { api_About_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

const AboutPage = async() => {
  const data = await getData(api_About_Page)
  
  return (
    <Curve>
      <div className="overflow-hidden">
        <AboutBanner props={data.BannerComponent} />
        <OurVision props={data.OurVisionMissionComponent} />
        <OurHistory  props={data.OurHistoryComponent} OurHistory={data.OurHistory}/>
        <WhatWeDo  props={data.WhatWeDoComponent} />
        <OurValues props={data.Ourvaluesection}/>
        <OurResults props={data.Result}/>
        <FounderDesk props={data.FounderDesk}/>
        <OurTeam  props={data.Team}/>
        <OurGallery props={data.Gallery}/>
        <LetsWork  contact={data.ContactUs}/>
      </div>
    </Curve>
  );
};

export default AboutPage;