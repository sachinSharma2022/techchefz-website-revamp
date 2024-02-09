"use client";
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

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <AboutBanner />
      <OurVision />
      <OurHistory />
      <WhatWeDo />
      <OurValues />
      <OurResults />
      <FounderDesk />
      <OurTeam />
      <OurClients />
      <LetsWork />
    </div>
  );
};

export default AboutPage;
