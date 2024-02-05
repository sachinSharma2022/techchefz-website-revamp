"use client";

import { useMediaQuery } from "react-responsive";
import NavigationDesktop from "../navigation/navigationDesktop";
import NavigationMobile from "../navigation/navigationMobile";

const Header = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  return <>{isMobileScreen ? <NavigationMobile /> : <NavigationDesktop />}</>;
};

export default Header;
