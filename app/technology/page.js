import LetsWork from "@/components/home/letsWork";
import OurNumbers from "@/components/home/ourNumbers";
import CmsType from "@/components/technology/cms/cmsType";
import Consistent from "@/components/technology/consistent";
import Discover from "@/components/technology/discover";
import TechnologyBanner from "@/components/technology/technologyBanner";
import TechnologyCase from "@/components/technology/technologyCase";
import TechnologyValues from "@/components/technology/technologyValues";
import React from "react";

const Technology = () => {
  return (
    <div>
      <TechnologyBanner />
      <CmsType />
      <Consistent />
      <TechnologyValues />
      <OurNumbers />
      <Discover />
      <TechnologyCase />
      <LetsWork />
    </div>
  );
};

export default Technology;
