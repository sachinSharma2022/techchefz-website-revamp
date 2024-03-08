import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import FeatureCard from "@/components/accelerators/acceleratorDetail/featureCard";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import { getData,getDataDynamic } from "@/lib/fetchData";
import { api_accelerators_details_Page } from "@/lib/constants";
import NotFound from "@/app/not-found";

const AcceleratorDetails = async ({params}) => {
  const data = await getDataDynamic(api_accelerators_details_Page);
  let index = 0;
  for (const i in data) {
    if (data[i].id == params.acceleratorsdDetails) {
      index = i;
    }
  }
  return (
    <>
      {data ? (
        <div>
          <DetailBanner props={data[index].attributes.Banner} />
          <AcceleratorIndustry props={data[index].attributes.Media} />
          <Impact props={data[index].attributes.Impact} />
          <FeatureCard props={data[index].attributes.Challanges} />
          <RelatedCase className="mt-0 mb-5 pt-5 pb-0" props={data} />
          <LetsWork contact={data[index].attributes.LetsWork} />
        </div>
      ) : (
        <><NotFound /></>
      )}
    </>
  );
};

export default AcceleratorDetails;
