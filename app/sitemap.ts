import { experiences } from "@/config/experience";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/experience",
    "/skills",
    "/education",
    "/contact",
    "/resume",
    ...Projects.map((p) => `/projects/${p.id}`),
    ...experiences.map((e) => `/experience/${e.id}`),
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
