import AcceleratorBanner from "@/components/accelerators/acceleratorBanner";
import BrowserAccelerator from "@/components/accelerators/browserAccelerator";
import LetsWork from "@/components/home/letsWork";
import Faq from "@/components/common/faq";
import { getData,getDataDynamic } from "@/lib/fetchData";
import { api_accelerators_Page,api_accelerators_details_Page } from "@/lib/constants";

export const metadata = {
  title: "Accelerators | TechChefz Digital",
  description: "Accelerators | TechChefz Digital",
};

const Accelerators = async () => {
  const data = await getData(api_accelerators_Page);
  const data_browser_accelerator = await getDataDynamic(api_accelerators_details_Page);
  


  return (
    <div>
      <AcceleratorBanner props={data.AcceleratorBanner} />
      <BrowserAccelerator props={data_browser_accelerator} />
      <Faq props={data.Faq} />
      <LetsWork contact={data.LetsWork} />
    </div>
  );
};

export default Accelerators;
