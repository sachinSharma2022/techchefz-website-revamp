import { api_footer_Page } from "@/lib/constants";
import { getDataDynamic } from "@/lib/fetchData";
import FooterLazyLoad from "./footerLazyLoad";
export const FooterContainer = async () => {
  const data = await getDataDynamic(api_footer_Page);

  return <>{data ? <FooterLazyLoad data={data} /> : <></>}</>;
};
export default FooterContainer;
