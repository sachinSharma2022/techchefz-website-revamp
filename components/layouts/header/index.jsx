
import NavigationDesktop from "../navigation/navigationDesktop";
import NavigationMobile from "../navigation/navigationMobile";

import { api_header_Page, api_insight_insides_Page } from "@/lib/constants";
import { getDataDynamic } from "@/lib/fetchData";

const Header = async () => {
  const data = await getDataDynamic(api_header_Page);
  const data_inside = await getDataDynamic(api_insight_insides_Page);
  return (
    <>
      {data ? (
        <>
          <NavigationMobile props={data?.attributes?.HeaderMenu} />
          <NavigationDesktop props={data?.attributes?.HeaderMenu} featureArticle={data_inside}/>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
