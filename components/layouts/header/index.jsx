import { useMediaQuery } from "react-responsive";
import NavigationDesktop from "../navigation/navigationDesktop";
import NavigationMobile from "../navigation/navigationMobile";
import { api_header_Page } from "@/lib/constants";
import { getDataDynamic } from "@/lib/fetchData";

const Header = async () => {
  const data = await getDataDynamic(api_header_Page);
  return (
    <>
      {/* For Mobile */}
      <NavigationMobile props={data?.attributes?.HeaderMenu}/>

      {/* For Desktop */}
      <NavigationDesktop props={data?.attributes?.HeaderMenu} />
    </>
  );
};

export default Header;
