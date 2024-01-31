import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import Challenges from "@/components/caseStudy/challenges";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";

const AcceleratorDetails = () => {
  return (
    <div>
      <DetailBanner />
      <AcceleratorIndustry />
      <Impact />
      <Challenges />
      <RelatedCase className="mt-0 mb-5 pt-5 pb-0" />
      <LetsWork />
    </div>
  );
};

export default AcceleratorDetails;
