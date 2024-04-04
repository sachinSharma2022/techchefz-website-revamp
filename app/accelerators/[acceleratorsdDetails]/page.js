import DetailBanner from "@/components/accelerators/acceleratorDetail/acceleratorDetailBanner";
import Impact from "@/components/accelerators/acceleratorDetail/acceleratorImpact";
import AcceleratorIndustry from "@/components/accelerators/acceleratorDetail/acceleratorIndustry";
import FeatureCard from "@/components/accelerators/acceleratorDetail/featureCard";
import LetsWork from "@/components/home/letsWork";
import RelatedCase from "@/components/relatedCase";
import { getDataDynamic } from "@/lib/fetchData";
import { api_accelerators_details_Page } from "@/lib/constants";
import NotFound from "@/app/not-found";

const AcceleratorDetails = async ({ params }) => {
  const data = await getDataDynamic(api_accelerators_details_Page);
  const [page] = data.filter(
    (value) => value.id == params.acceleratorsdDetails
  );
  return (
    <>
      {data ? (
        <div>
          <DetailBanner props={page.attributes.Banner} />
          <AcceleratorIndustry props={page.attributes.Media} />
          <Impact props={page.attributes.Impact} />
          <FeatureCard props={page.attributes.Challanges} />
          <RelatedCase className="mt-0 mb-5 pt-5 pb-0" props={data} />
          <LetsWork contact={page.attributes.LetsWork} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default AcceleratorDetails;
