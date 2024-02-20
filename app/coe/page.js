import OurValues from "@/components/about/ourValues";
import CoeBanner from "@/components/coe/coeBanner";
import CoeImpact from "@/components/coe/coeImpact";
import CoeService from "@/components/coe/coeService";
import CoeSupport from "@/components/coe/coeSupport";
import LetsWork from "@/components/home/letsWork";
import { getData } from "@/lib/fetchData";
import { api_Coe_Page } from "@/lib/constants";

export const metadata = {
  title: "Centre of Excellence",
  description: "Centre of Excellence | TechChefz Digital",
};

const Coe = async () => {
  const data = await getData(api_Coe_Page);
  return (
    <>
      {data ? (
        <div>
          <CoeBanner props={data.CoeBanner} />
          <OurValues props={data.Ourvaluesection} />
          <CoeSupport props={data.Support} />
          <CoeImpact props={data.CoeImpact} />
          <CoeService props={data.CoeService} />
          <LetsWork contact={data.ContactUs} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Coe;
