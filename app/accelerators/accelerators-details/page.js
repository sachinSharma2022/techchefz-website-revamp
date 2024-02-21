import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import FeatureCard from "@/components/accelerators/acceleratorDetail/featureCard";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import { getData } from "@/lib/fetchData";
import { api_accelerators_details_Page } from "@/lib/constants";

const AcceleratorDetails = async () => {
  const data = await getData(api_accelerators_details_Page);
  return (
    <>
      {data ? (
        <div>
          <DetailBanner props={data.Banner} />
          <AcceleratorIndustry props={data.Media} />
          <Impact props={data.Impact} />
          <FeatureCard props={data.Challanges} />
          <RelatedCase className="mt-0 mb-5 pt-5 pb-0" props={data.CaseStudy} />
          <LetsWork contact={data.LetsWork} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AcceleratorDetails;
