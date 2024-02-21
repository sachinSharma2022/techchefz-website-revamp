import { useMediaQuery } from "react-responsive";
import NavigationDesktop from "../navigation/navigationDesktop";
import NavigationMobile from "../navigation/navigationMobile";
import { api_header_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

const Header = async () => {
  const data = await getData(api_header_Page);
  return (
    <>
      {/* For Mobile */}
      <NavigationMobile />

      {/* For Desktop */}
      <NavigationDesktop props={data?.HeaderMenu} />
    </>
  );
};

export default Header;
