"use client";

import { useMediaQuery } from "react-responsive";
import NavigationDesktop from "../navigation/navigationDesktop";
import NavigationMobile from "../navigation/navigationMobile";

const Header = () => {
  return (
    <>
      {/* For Mobile */}
      <NavigationMobile />

      {/* For Desktop */}
      <NavigationDesktop />
    </>
  );
};

export default Header;
