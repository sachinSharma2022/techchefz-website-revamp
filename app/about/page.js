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
