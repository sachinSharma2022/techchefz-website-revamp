export default function robots() {
  return {
    rules: {
      userAgent: "*",
      disallow: "",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITEMAP_URL}/sitemap.xml`,
  };
}
