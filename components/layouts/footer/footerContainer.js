import { api_footer_Page } from "@/lib/constants";
import { getDataDynamic } from "@/lib/fetchData";
import Footer from ".";
export const FooterContainer = async () => {
  const data = await getDataDynamic(api_footer_Page);

  return (
    <>
      {data ? (
        <Footer
          props={data?.attributes?.Logo}
          Subscribe={data?.attributes?.Subscribe}
          SocialMedia={data?.attributes?.SocialMedia}
          footerinner={data?.attributes?.footerinner}
          Reserved={data?.attributes?.Reserved}
        />
      ) : (
        <></>
      )}
    </>
  );
};
