import OurValues from "@/components/about/ourValues";
import CoeBanner from "@/components/coe/coeBanner";
import CoeImpact from "@/components/coe/coeImpact";
import CoeService from "@/components/coe/coeService";
import CoeSupport from "@/components/coe/coeSupport";
import LetsWork from "@/components/home/letsWork";

const Coe = () => {
  return (
    <div>
      <CoeBanner />
      <OurValues />
      <CoeSupport />
      <CoeImpact />
      <CoeService />
      <LetsWork />
    </div>
  );
};

export default Coe;
