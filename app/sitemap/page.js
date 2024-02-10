import LetsWork from "@/components/home/letsWork";
import SiteMapBanner from "@/components/sitemap/siteMapBanner";
import SiteMapLinks from "@/components/sitemap/siteMapLinks";
import { api_sitemaps_Page } from "@/lib/constants";
import { getData } from "@/lib/fetchData";

const Sitemap = async() => {
  const data = await getData(api_sitemaps_Page)
  return (
    <div>
      <SiteMapBanner props={data.Banner}/>
      <SiteMapLinks props={data.sitemaplink}/>
      <LetsWork contact={data.LetsWork}/>
    </div>
  );
};

export default Sitemap;
