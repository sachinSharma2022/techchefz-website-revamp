import AcceleratorBanner from "@/components/accelerators/acceleratorBanner";
import BrowserAccelerator from "@/components/accelerators/browserAccelerator";
import LetsWork from "@/components/home/letsWork";
import Faq from "@/components/common/faq";
import { getData } from "@/lib/fetchData";
import { api_accelerators_Page } from "@/lib/constants";


const Accelerators = async() => {
  const data = await getData(api_accelerators_Page)

  return (
    <div>
      <AcceleratorBanner props={data.AcceleratorBanner} />
      <BrowserAccelerator />
      <Faq props ={data.Faq} />
      <LetsWork  contact={data.LetsWork}/>
    </div>
  );
};

export default Accelerators;
