import { getDataDynamic } from "@/lib/fetchData";
import {
  api_insight_insides_Page,
  api_Case_study_Page,
  api_Career_detail_Page,
} from "@/lib/constants";
export default async function sitemap() {
  const insights = await getDataDynamic(api_insight_insides_Page);
  const portfolio = await getDataDynamic(api_Case_study_Page);
  const career = await getDataDynamic(api_Career_detail_Page);
  const changeFrequency = "daily";

  const insightsPosts = insights.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}/insights/${slug.id}`,
    lastModified: slug?.attributes?.updatedAt,
    changeFrequency,
  }));
  const portfolioPosts = portfolio.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}/portfolio/${slug.id}`,
    lastModified: slug?.attributes?.updatedAt,
    changeFrequency,
  }));
  const careerPosts = career.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}/careers/${slug.id}`,
    lastModified: slug?.attributes?.updatedAt,
    changeFrequency,
  }));

  const routes = [
    "",
    "/about",
    "/solutions",
    "/technology",
    "/technology/cms",
    "/technology/commerce",
    "/technology/microservices",
    "/technology/cloud-devsec-ops",
    "/technology/data-intelligence",
    "/technology/custom-development",
    "/technology/analytics-automation",
    "/portfolio",
    "/careers",
    "/insights",
    "/coe",
    "/contact-us",
    
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SITEMAP_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes, ...insightsPosts, ...portfolioPosts, ...careerPosts];
}
