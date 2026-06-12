import type { MetadataRoute } from "next";

const routes = ["", "/about", "/seeding-services", "/method", "/case-studies", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://egoric.agency";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
