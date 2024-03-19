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
import Curve from "@/components/ui/pageTransition";
import NotFound from "../not-found";
import { api_About_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";



export async function generateMetadata() {
  const data = await getData(api_About_Page);
  
  
  return {
    title: data?.SeoData?.Title,
    description: data?.SeoData?.Description,
   
  };
}

const AboutPage = async () => {
  const data = await getData(api_About_Page);

  return (
    <Curve>
      {data ? (
        <div className="overflow-hidden">
          <AboutBanner props={data.BannerComponent} />
          <OurVision props={data.OurVisionMissionComponent} />
          <OurHistory
            props={data.OurHistoryComponent}
            OurHistory={data.OurHistory}
          />
          <WhatWeDo props={data.WhatWeDoComponent} />
          <OurValues props={data.Ourvaluesection} />
          <OurResults props={data.Result} />
          <FounderDesk props={data.FounderDesk} />
          <OurTeam props={data.Team} />
          <OurClients props={data.OurClient} />
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </Curve>
  );
};

export default AboutPage;
