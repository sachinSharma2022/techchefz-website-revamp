import LetsWork from "@/components/home/letsWork";
import SiteMapBanner from "@/components/sitemap/siteMapBanner";
import SiteMapLinks from "@/components/sitemap/siteMapLinks";
import { api_sitemaps_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";
import NotFound from "../not-found";

const Sitemap = async () => {
  const data = await getData(api_sitemaps_Page);
  return (
    <>
      {data ? (
        <div>
          <SiteMapBanner props={data.Banner} />
          <SiteMapLinks props={data.sitemaplink} />
          <LetsWork contact={data.LetsWork} />
        </div>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default Sitemap;
