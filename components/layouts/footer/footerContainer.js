import Footer from ".";
import { getDataDynamic } from "@/lib/fetchData";
import { api_footer_Page } from "@/lib/constants";
import FooterLazyLoad from "./footerLazyLoad";
const FooterContainer = async () => {
  const data = await getDataDynamic(api_footer_Page);

  return <>{data ? <FooterLazyLoad data={data} /> : <></>}</>;
};
export default FooterContainer;
