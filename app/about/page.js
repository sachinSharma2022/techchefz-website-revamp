
import AboutBanner from "@/components/about/aboutBanner";
import OurGallery from "@/components/about/ourGallery";
import OurHistory from "@/components/about/ourHistory";
import OurResults from "@/components/about/ourResults";
import OurTeam from "@/components/about/ourTeam";
import OurValues from "@/components/about/ourValues";
import OurVision from "@/components/about/ourVision";
import WhatWeDo from "@/components/about/whatWeDo";
import LetsWork from "@/components/home/letsWork";
import Curve from "@/components/ui/pageTransition";
import { api_About_Page } from "@/lib/constants";
import axios, { Axios } from "axios";

const AboutPage = async() => {
  const data = await getData()
  
  return (
    <Curve>
      <div className="overflow-hidden">
        <AboutBanner props={data.BannerComponent} />
        <OurVision props={data.OurVisionMissionComponent} />
        <OurHistory  props={data.OurHistoryComponent} OurHistory={data.OurHistory}/>
        <WhatWeDo  props={data.WhatWeDoComponent} />
        <OurValues props={data.Ourvaluesection}/>
        <OurResults props={data.Result}/>
        <OurTeam  props={data.Team}/>
        <OurGallery props={data.Gallery}/>
        <LetsWork  contact={data.ContactUs}/>
      </div>
    </Curve>
  );
};

export default AboutPage;

async function getData() {
  try{
    const response = await axios.get(api_About_Page);
    return response.data?.data[0]?.attributes
  }catch(error){
    console.log(error)
    return null
  }
  
}