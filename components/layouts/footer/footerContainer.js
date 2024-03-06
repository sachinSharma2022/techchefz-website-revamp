import Footer from ".";
import { getDataDynamic } from "@/lib/fetchData";
import { api_footer_Page } from "@/lib/constants";
export const FooterContainer = async () => {
  const data = await getDataDynamic(api_footer_Page);

  console.log(data, "---------------------");

  return <Footer />;
};
