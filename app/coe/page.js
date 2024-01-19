import OurValues from "@/components/about/ourValues";
import Impact from "@/components/accelerators/acceleratorDetail/impact";
import Challenges from "@/components/caseStudy/challenges";
import CoeBanner from "@/components/coe/coeBanner";
import LetsWork from "@/components/home/letsWork";
import Consistent from "@/components/technology/consistent";
import React from "react";

const Coe = () => {
  return (
    <div>
      <CoeBanner />
      <OurValues />
      <Challenges className="pt-5" />
      <Impact />
      <Consistent />
      <LetsWork />
    </div>
  );
};

export default Coe;
