import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import FeatureCard from "@/components/accelerators/acceleratorDetail/featureCard";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";

const AcceleratorDetails = () => {
  return (
    <div>
      <DetailBanner />
      <AcceleratorIndustry />
      <Impact />
      <FeatureCard />
      <RelatedCase
        title="Discover Insights on Related Topics"
        subTitle="Insights"
        className="mt-0 mb-5 pt-5 pb-0"
      />
      <LetsWork />
    </div>
  );
};

export default AcceleratorDetails;
