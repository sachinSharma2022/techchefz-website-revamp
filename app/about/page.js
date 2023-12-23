"use client"

import AboutBanner from "@/components/about/aboutBanner";
import OurHistory from "@/components/about/ourHistory";
import OurResults from "@/components/about/ourResults";
import OurValues from "@/components/about/ourValues";
import WhatWeDo from "@/components/about/whatWeDo";
import OurTeam from "@/components/about/ourTeam";
import OurGallery from "@/components/about/ourGallery";
import OurVision from "@/components/about/ourVision";
import LetsWork from "@/components/home/letsWork";
import VideoCustom from "@/components/ui/videoCustom";

const AboutPage = () => {
   return (
      <div>
         <AboutBanner />
         <OurVision />
         <div className="d-flex justify-content-center m-5">
         <VideoCustom src={"about.mp4"} width={1200} height={500} />
         </div>
         <OurHistory />
         <WhatWeDo />
         <OurValues />
         <OurResults />
         <OurTeam />
         <OurGallery />
         <LetsWork />
      </div>
   );
};

export default AboutPage;
