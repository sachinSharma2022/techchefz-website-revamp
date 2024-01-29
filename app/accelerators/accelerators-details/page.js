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
<<<<<<< HEAD
      <Challenges className="pb-5 pb-sm-0" />
      <RelatedCase sliderClassName="mb-0" />
=======
      <Challenges />
      <RelatedCase sliderClassName="mb-0" className="mt-5" />
>>>>>>> 50713cf59bb4906628b603348f6f2cd2f469673a
      <LetsWork />
    </div>
  );
};

export default AcceleratorDetails;
