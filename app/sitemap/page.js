import LetsWork from "@/components/home/letsWork";
import SiteMapBanner from "@/components/sitemap/siteMapBanner";
import SiteMapLinks from "@/components/sitemap/siteMapLinks";

const Sitemap = () => {
  return (
    <div>
      <SiteMapBanner />
      <SiteMapLinks />
      <LetsWork />
    </div>
  );
};

export default Sitemap;
