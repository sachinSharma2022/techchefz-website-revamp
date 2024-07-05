"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useEffect } from "react";

const Providers = ({ children }) => {
  useEffect(() => {
    const isSamsungBrowser = /SamsungBrowser/i.test(navigator.userAgent);
    if (isSamsungBrowser) {
      console.log("This is Samsung Browser");
      // alert("Samsung Phone is detect");
      document.body.classList.add("samsung-phone-style");
    }
  }, []);
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#05bed7"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
