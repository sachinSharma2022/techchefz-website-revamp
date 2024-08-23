"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(() => {
  return import("@/components/layouts/footer");
});
//import Footer from ".";
import useLazyLoad from "@/lib/useLazyLoad";
const FooterLazyLoad = ({ data }) => {
  const targetRefFooter = useRef();
  const isVisibleFooter = useLazyLoad(targetRefFooter);
  return (
    <div ref={targetRefFooter}>
      {isVisibleFooter && (
        <Footer
          props={data?.attributes?.Logo}
          Subscribe={data?.attributes?.Subscribe}
          SocialMedia={data?.attributes?.SocialMedia}
          footerinner={data?.attributes?.footerinner}
          Reserved={data?.attributes?.Reserved}
        />
      )}
    </div>
  );
};
export default FooterLazyLoad;
